#!/bin/bash
set -e

echo "Installing MonadicSharp OpenCode configuration..."

OPENCODE_CONFIG="$HOME/.config/opencode"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Crea directory se non esiste
mkdir -p "$OPENCODE_CONFIG"

# Copia skills nella directory globale OpenCode
mkdir -p "$OPENCODE_CONFIG/skills"
cp -r "$SCRIPT_DIR/.opencode/skills/"* "$OPENCODE_CONFIG/skills/"
echo "✅ Skills installed"

# Copia agents
mkdir -p "$OPENCODE_CONFIG/agents"
cp "$SCRIPT_DIR/.opencode/agents/"* "$OPENCODE_CONFIG/agents/"
echo "✅ Agents installed"

# Copia commands
mkdir -p "$OPENCODE_CONFIG/commands"
cp "$SCRIPT_DIR/.opencode/commands/"* "$OPENCODE_CONFIG/commands/"
echo "✅ Commands installed"

# Avvisa per MCP
echo ""
echo "⚠️  MCP Setup required:"
echo "   Set MONADIC_SHARP_MCP_PATH in your environment:"
echo "   export MONADIC_SHARP_MCP_PATH=/path/to/monadic-sharp-mcp/dist/index.js"
echo ""
echo "   Or add it to opencode.json manually."
echo ""
echo "✅ MonadicSharp OpenCode integration installed!"
echo "   Run 'opencode' in any .NET project to get started."
