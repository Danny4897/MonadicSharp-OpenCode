---
name: saas-module-design
description: Guides architectural decisions for vertical SaaS built on MonadicSharp. Covers module anatomy, Contracts/ boundary rule, security-first setup, inter-module communication decision tree, tenant isolation via AgentContext.Metadata, new module checklist, and SaaS-specific green code rules S1-S4.
type: skill
---

The Contracts/ rule is the most important structural rule in this skill.
No module may reference another module's Domain, Application, or Infrastructure
directly. Only Contracts/ is public. Everything else is internal.

---

## Security layer — always first, always explicit

Security is not optional and not added later. Every module entry point
that accepts external input gets this stack before any business logic runs:
```csharp
var secureCtx = new SecureAgentContext(
    guard:  PromptGuard.Default,
    masker: _masker,
    audit:  _auditTrail);

IAgent<TInput, TOutput> secured = myAgent.WithSecurity(secureCtx);
```

Audit trail is mandatory for:
- Any operation that writes data
- Any operation that reads PII
- Any AI agent invocation
- Any cross-module call

Audit trail is optional for:
- Read-only queries on non-sensitive data
- Pure in-memory transformations

---

## Inter-module communication — decision tree

Use this tree every time two modules need to talk:

Does the caller need an immediate response?

YES → Does the operation cross a process boundary?
      YES → HTTP via MonadicHttpClient
            Always wrap with CircuitBreaker on the caller side
      NO  → IModuleNameService interface
            Injected via DI, same process
            Result<T> return type always

NO  → Event / message
      Publish a domain event from the owning module
      Other modules subscribe — no direct dependency
      Failed handlers go to a retry queue, not an exception

Never call another module's repository directly.
Never share an EF Core DbContext across modules.
Never return null across a module boundary — use Option or Result.

---

## Tenant isolation pattern

For multi-tenant SaaS, tenant context flows through AgentContext.Metadata,
never through method parameters or global state:
```csharp
var context = AgentContext.Create(
    capabilities: AgentCapability.ReadDatabase | AgentCapability.CallExternalApi,
    cancellationToken: ct)
    .WithMetadata("tenantId", tenantId)
    .WithMetadata("userId", userId)
    .WithMetadata("correlationId", correlationId);

// In repositories — always filter by tenantId at the repository level
public async Task<Result<IReadOnlyList<Order>>> GetAllAsync(AgentContext context)
{
    var tenantId = context.GetMetadata<string>("tenantId");
    return await tenantId.BindAsync(tid =>
        Try.ExecuteAsync(() =>
            _db.Orders
               .Where(o => o.TenantId == tid)
               .ToListAsync(context.CancellationToken)));
}
```

---

## Adding a new module — checklist

When a new module is requested, work through this list in order:

- Answer the four questions from Step 0
- Define the Contracts/IModuleNameService.cs interface FIRST
- Define module-specific Error codes in Domain/Errors/
- Map every operation to its minimum AgentCapability
- Identify which operations need SecureAgentWrapper + AuditTrail
- Identify which operations are cache candidates (Q3)
- Create IRepository for each aggregate root — no shared DbContext
- Register CachingAgentWrapper for repeated read agents
- Add CircuitBreaker on every outbound HTTP or cross-process call
- Verify: no reference to another module except via Contracts/

---

## Green code rules specific to SaaS modules

**Rule S1 — Validate tenant context before any I/O**
```csharp
// GREEN — tenant check before DB hit
return context.GetMetadata<string>("tenantId")
    .Bind(ValidateTenantAccess)
    .BindAsync(tid => _repo.GetAsync(id, tid));
```

**Rule S2 — Cache at the module boundary with tenant-aware keys**
```csharp
KeyFactory = (name, q) => $"{name}:{q.TenantId}:{q.ResourceId}",
EntryOptions = CacheEntryOptions.WithTtl(TimeSpan.FromMinutes(5)),
CacheOnlySuccesses = true
```

**Rule S3 — One DbContext per module, scoped per request**

**Rule S4 — CircuitBreaker on all cross-module HTTP calls**
Default: maxFailures: 5, openDuration: 30 seconds.

---

## Reference files

For detailed patterns on specific layers, read:
- references/persistence-patterns.md
- references/agent-pipeline-patterns.md
- references/security-checklist.md

These files are loaded on demand — only read them when the specific layer
is relevant to the current task.
