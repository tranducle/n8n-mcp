import { N8NDocumentationMCPServer } from './mcp/server';

const server = new N8NDocumentationMCPServer();

export default {
  async fetch(request: Request): Promise<Response> {
    return server.handleRequest(request);
  },
};
