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

## Usage with MCP Clients

This MCP server can be used with various MCP-compatible clients. Below are configuration examples for popular tools.

### Claude Desktop

Configure Claude Desktop using the `mcp-remote` proxy:

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

4. Save the configuration file and restart Claude Desktop

### Claude Code

Configure Claude Code by adding to your MCP settings:

1. Open Claude Code settings
2. Go to **MCP Servers** configuration
3. Add the server configuration:

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

4. Restart Claude Code to activate the connection

### Cursor

Configure Cursor IDE to use this MCP server:

1. Open Cursor Settings
2. Navigate to **Features > Model Context Protocol**
3. Add the following configuration:

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

4. Restart Cursor to load the MCP server

### Cline (VS Code Extension)

Configure Cline in VS Code:

1. Install the Cline extension from VS Code marketplace
2. Open VS Code Settings (JSON)
3. Add to your `settings.json`:

```json
{
  "cline.mcpServers": {
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

4. Reload VS Code

### Example Interactions

Once configured in any client, you can interact naturally:

```
You: Tell me about Allan Kimmer Jensen

AI: [Uses get_bio tool to retrieve biographical information]

You: How can I contact Allan?

AI: [Uses get_contact_info tool to get email and Signal]

You: What are Allan's social media profiles?

AI: [Uses get_social_links tool to retrieve LinkedIn, GitHub, and Instagram]
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
