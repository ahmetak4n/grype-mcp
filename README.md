# grype mcp server
[Grype](https://github.com/anchore/grype) is a vulnerability scanner for container images and file systems. Security teams use grype easily but developers can struggle while using it to finding vulnerable packages or their locations. Grype mcp server allows developers to easily use the grype tool with IDElike Cursor or Claude Desktop. 

# setup 
## dependencies
- grype
  
## configurations
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
# screenshots
![image](https://github.com/user-attachments/assets/eaf63ca8-6b20-4ceb-b86b-92fff0280ffb)
![image](https://github.com/user-attachments/assets/536d9736-66cb-4fc3-b630-cc4703e8852b)




