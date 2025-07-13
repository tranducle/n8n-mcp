import { handleRequest } from './mcp/http-handler'; // Hoặc đường dẫn đúng với package bạn dùng

export default {
  async fetch(request: Request): Promise<Response> {
    return handleRequest(request);
  },
};
