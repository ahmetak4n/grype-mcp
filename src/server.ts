import { z } from "zod";
import { GrypeScan } from "./grype/scanner.ts";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ListToolsRequestSchema, CallToolRequestSchema, } from "@modelcontextprotocol/sdk/types.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";

export const GrypeMcpServer = () => {
  const server = new McpServer(
    {
      name: "grype-mcp-server",
      version: "1.0.0",
    },
    { 
      capabilities: 
      {
        tools: {},
        resources: {}
      } 
    },
  );

  server.tool(
    "grype-scan",
    "File system or container scanner with Grype",
    { 
      scanType: z.enum(["container", "file-system"]).describe("Type of scan to perform"), 
      scanTarget: z.string().describe("Target project name or container image to scan") 
    },
    async ({ scanType, scanTarget }) => {
      const result = await GrypeScan(scanType, scanTarget);
      return result; 
    },
  );
  
  return server;
}

