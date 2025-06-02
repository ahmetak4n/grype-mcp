# grype mcp server
[Grype](https://github.com/anchore/grype) is a vulnerability scanner for container images and file systems. Security teams use grype easily but developers can struggle while using it to finding vulnerable packages or their locations. Grype mcp server allows developers to easily use the grype tool with IDElike Cursor or Claude Desktop. 

## cursor & claude integration
```
{
  "mcpServers": {
    "grype-mcp-server": {
      "command": "node",
      "args": ["${GRYPE_MCP_SERVER_PATH}/index.ts"]
    }
  }
}
```
