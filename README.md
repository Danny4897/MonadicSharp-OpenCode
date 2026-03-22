# MonadicSharp for OpenCode

> The structural guarantee that AI-generated C# code doesn't break
> in production — integrated directly into OpenCode.

## What this gives you

- **MCP Server** — 5 MonadicSharp resources + 21 code generation
  scenarios available as tools in every OpenCode session
- **Green Code Agent** — reviews C# for ROP violations automatically
- **MonadicForge Agent** — runs `dotnet forge analyze/migrate/report`
- **Skills** — `green-code-advisor` and `saas-module-design`
  loaded automatically
- **Commands** — `/forge-analyze`, `/forge-migrate`,
  `/forge-report`, `/green-check`

## Install

```bash
git clone https://github.com/Danny4897/MonadicSharp-OpenCode
cd MonadicSharp-OpenCode
./install.sh
```

Set your MCP path:

```bash
export MONADIC_SHARP_MCP_PATH=/path/to/monadic-sharp-mcp/dist/index.js
```

## Usage

```bash
# In any .NET project
opencode

# Run forge analysis
/forge-analyze

# Check green code compliance
/green-check

# Generate HTML report
/forge-report
```

## Requirements

- [OpenCode](https://opencode.ai) installed
- [MonadicSharp MCP Server](https://github.com/Danny4897/monadic-sharp-mcp)
  built (`npm run build`)
- [MonadicForge](https://github.com/Danny4897/MonadicForge) installed
  (`dotnet tool install -g MonadicForge`)
- .NET 8.0+

## Links

- [MonadicSharp](https://github.com/Danny4897/MonadicSharp) — core library
- [MonadicForge](https://github.com/Danny4897/MonadicForge) — CLI analyzer
- [MonadicSharp.Framework](https://github.com/Danny4897/MonadicSharp.Framework)

## License

MIT
