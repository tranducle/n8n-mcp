import { N8NDocumentationMCPServer } from './mcp/server';

const server = new N8NDocumentationMCPServer();

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method === 'GET' && new URL(request.url).pathname === '/sse') {
      return server.handleRequest(request);
    }

    return new Response('Not Found', { status: 404 });
  }
};
