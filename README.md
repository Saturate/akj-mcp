# Allan Kimmer Jensen - Personal MCP Server

This is a personal Model Context Protocol (MCP) server that provides information about Allan Kimmer Jensen for use with Large Language Models (LLMs). The server is deployed as a Cloudflare Worker and exposes three tools that LLMs can use to retrieve biographical, contact, and social media information.

## Available Tools

### 1. `get_bio`
**Description:** Returns a biographical paragraph about Allan Kimmer Jensen

**Parameters:** None

**Returns:** A text paragraph containing Allan's professional biography, highlighting his expertise in technology, cloud infrastructure, AI/ML systems, and modern web development.

### 2. `get_contact_info`
**Description:** Returns Allan Kimmer Jensen's contact information

**Parameters:** None

**Returns:** A JSON object containing:
- `email`: Allan's email address (hi@akj.io)
- `signal`: Allan's Signal contact link

### 3. `get_social_links`
**Description:** Returns Allan Kimmer Jensen's social media profile links

**Parameters:** None

**Returns:** A JSON object containing:
- `linkedin`: LinkedIn profile URL
- `github`: GitHub profile URL
- `instagram`: Instagram profile URL

## Try it Out in Cloudflare AI Playground

You can test this MCP server directly in the Cloudflare AI Playground:

1. Navigate to [https://playground.ai.cloudflare.com/](https://playground.ai.cloudflare.com/)
2. In the playground interface, enter the MCP server URL: `https://akj-mcp.mail-34e.workers.dev/mcp`
3. Once connected, the three tools (`get_bio`, `get_contact_info`, and `get_social_links`) will become available
4. You can now ask the AI questions about Allan, and it will use these tools to retrieve information

**Example prompts to try:**
- "Tell me about Allan Kimmer Jensen"
- "How can I contact Allan?"
- "What are Allan's social media profiles?"

## Using with Claude Desktop

To use this MCP server with Claude Desktop, you'll need to configure it using the `mcp-remote` proxy:

### Prerequisites
- [Claude Desktop](https://claude.ai/download) installed on your machine
- Node.js and npm installed

### Configuration Steps

1. Open Claude Desktop
2. Go to **Settings > Developer > Edit Config**
3. Add the following configuration to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "allan-info": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://akj-mcp.mail-34e.workers.dev/mcp"
      ]
    }
  }
}
```

4. Save the configuration file
5. Restart Claude Desktop

After restarting, Claude will have access to the three tools and can retrieve information about Allan Kimmer Jensen when you ask relevant questions.

### Example Usage in Claude Desktop

Once configured, you can interact with Claude naturally:

```
You: Tell me about Allan Kimmer Jensen

Claude: [Uses get_bio tool to retrieve biographical information]

You: How can I reach Allan?

Claude: [Uses get_contact_info tool to get email address]

You: Does Allan have a GitHub profile?

Claude: [Uses get_social_links tool to retrieve social media links]
```

## Deployment

This MCP server is deployed at:
```
https://akj-mcp.mail-34e.workers.dev/mcp
```

## Development

To modify this MCP server:

1. Clone the repository
2. Install dependencies: `npm install`
3. Edit the tools in `src/index.ts`
4. Deploy using Cloudflare Workers: `npm run deploy`

## Technical Details

- **Framework:** Cloudflare Workers with TypeScript
- **MCP SDK:** @modelcontextprotocol/sdk
- **Transport:** Streamable HTTP
- **Authentication:** None (public server)

## License

This is a personal project by Allan Kimmer Jensen.
