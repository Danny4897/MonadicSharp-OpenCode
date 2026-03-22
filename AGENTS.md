# MonadicSharp Development Rules

## Core principle
Every C# file in this project uses MonadicSharp for error handling.
Never generate try/catch. Never generate null returns.
Always use Result<T>, Option<T>, Try.ExecuteAsync.

## Green code rules (apply automatically)
1. Cheapest validation first in every Bind chain
2. Map only for infallible operations — use Bind + Try.Execute if throws
3. WithRetry always outside validation scope + useJitter: true
4. CachingAgentWrapper before any repeated LLM call
5. ValidatedResult<T> at every LLM output boundary
6. Try.ExecuteAsync at all I/O — never try/catch inside Bind
7. Minimum AgentCapability grants only
8. CircuitBreaker on every external agent
9. Partition over Sequence for batch operations
10. Token budget check before LLM call

## MonadicForge integration
When asked to analyze code quality, run:
  dotnet forge analyze --path ./src --format json

When asked to migrate legacy code, run:
  dotnet forge migrate --path ./src

When asked for a security report, run:
  dotnet forge report --path ./src --output forge-report.html

## MonadicSharp MCP
The monadic-sharp MCP server is available with these resources:
- monadic-sharp://rop-basics
- monadic-sharp://ai-patterns
- monadic-sharp://framework-agents
- monadic-sharp://framework-infrastructure
- monadic-sharp://framework-security

Use these resources when generating MonadicSharp code.
