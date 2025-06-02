import { GrypeMcpServer } from "./src/server.ts"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = GrypeMcpServer()
const transport = new StdioServerTransport();

await server.connect(transport);
