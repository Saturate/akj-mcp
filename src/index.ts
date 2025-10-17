import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

// Define our MCP agent with tools for Allan Kimmer Jensen's personal information
export class MyMCP extends McpAgent {
	server = new McpServer({
		name: "Allan Kimmer Jensen Info",
		version: "1.0.0",
	});

	async init() {
		// Tool to get Allan's bio
		this.server.tool(
			"get_bio",
			"Returns a biographical paragraph about Allan Kimmer Jensen",
			{},
			async () => ({
				content: [
					{
						type: "text",
						text: "Allan Kimmer Jensen is a technology enthusiast and software developer with a passion for building innovative solutions. With expertise spanning across cloud infrastructure, AI/ML systems, and modern web technologies, Allan focuses on creating tools that enhance developer productivity and enable seamless integration between humans and AI. His work emphasizes practical, user-centric design and leveraging cutting-edge technologies like Model Context Protocol (MCP) to bridge the gap between AI systems and real-world applications.",
					},
				],
			}),
		);

		// Tool to get Allan's contact information
		this.server.tool(
			"get_contact_info",
			"Returns Allan Kimmer Jensen's contact information",
			{},
			async () => ({
				content: [
					{
						type: "text",
						text: JSON.stringify(
							{
								email: "hi@akj.io",
								signal: "https://signal.me/#eu/xNbamSVh5o2huibDiEC5TW9KYX-TUcDbp86owaXx9yTquofkCrNBqKGQ5kKXUuCs",
							},
							null,
							2,
						),
					},
				],
			}),
		);

		// Tool to get Allan's social media links
		this.server.tool(
			"get_social_links",
			"Returns Allan Kimmer Jensen's social media profile links",
			{},
			async () => ({
				content: [
					{
						type: "text",
						text: JSON.stringify(
							{
								linkedin: "https://www.linkedin.com/in/allankimmerjensen",
								github: "https://github.com/akj",
								instagram: "https://www.instagram.com/allankimmerjensen",
							},
							null,
							2,
						),
					},
				],
			}),
		);
	}
}

function getHtmlLandingPage(): string {
	return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Allan Kimmer Jensen - MCP Server</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #e4e4e7;
            background: #000;
            min-height: 100vh;
            padding: 40px 20px;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
        }
        .header {
            margin-bottom: 60px;
            border-bottom: 1px solid #27272a;
            padding-bottom: 40px;
        }
        .header h1 {
            font-size: 3em;
            margin-bottom: 12px;
            font-weight: 700;
            color: #fff;
            letter-spacing: -0.03em;
        }
        .header p {
            font-size: 1.25em;
            color: #71717a;
            font-weight: 400;
        }
        .section {
            margin-bottom: 60px;
        }
        .section h2 {
            font-size: 1.5em;
            margin-bottom: 24px;
            font-weight: 600;
            color: #fff;
            letter-spacing: -0.02em;
        }
        .section p {
            margin-bottom: 16px;
            font-size: 1em;
            color: #a1a1aa;
            line-height: 1.7;
        }
        .tool {
            background: #09090b;
            border: 1px solid #27272a;
            padding: 24px;
            margin-bottom: 16px;
            border-radius: 8px;
            transition: border-color 0.2s;
        }
        .tool:hover {
            border-color: #3f3f46;
        }
        .tool h3 {
            font-size: 1.1em;
            margin-bottom: 8px;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
            color: #fff;
            font-weight: 500;
        }
        .tool .description {
            color: #a1a1aa;
            margin-bottom: 12px;
            font-size: 0.95em;
        }
        .tool .meta {
            font-size: 0.875em;
            color: #71717a;
            line-height: 1.6;
        }
        .code-block {
            background: #09090b;
            border: 1px solid #27272a;
            color: #e4e4e7;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
            font-size: 0.875em;
            margin: 16px 0;
            line-height: 1.7;
        }
        .endpoint {
            background: #09090b;
            border: 1px solid #3f3f46;
            padding: 12px 16px;
            border-radius: 6px;
            margin: 16px 0;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
            font-size: 0.9em;
            color: #e4e4e7;
        }
        .usage-box {
            margin-top: 32px;
            margin-bottom: 32px;
        }
        .usage-box h3 {
            font-size: 1.1em;
            margin-bottom: 16px;
            font-weight: 600;
            color: #fff;
        }
        .usage-box ol {
            margin-left: 20px;
            color: #a1a1aa;
            margin-bottom: 12px;
        }
        .usage-box li {
            margin-bottom: 8px;
        }
        .footer {
            margin-top: 80px;
            padding-top: 40px;
            border-top: 1px solid #27272a;
            text-align: center;
            color: #71717a;
            font-size: 0.9em;
        }
        a {
            color: #e4e4e7;
            text-decoration: none;
            border-bottom: 1px solid #3f3f46;
            transition: border-color 0.2s;
        }
        a:hover {
            border-bottom-color: #e4e4e7;
        }
        .tags {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 12px;
        }
        .tag {
            font-size: 0.813em;
            color: #a1a1aa;
            padding: 4px 12px;
            border: 1px solid #27272a;
            border-radius: 4px;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Allan Kimmer Jensen</h1>
            <p>Personal MCP Server</p>
        </div>

        <div class="section">
            <h2>Overview</h2>
            <p>
                Model Context Protocol (MCP) server providing information about Allan Kimmer Jensen for use with Large Language Models.
                Exposes three tools for biographical, contact, and social media information retrieval.
            </p>
        </div>

        <div class="section">
            <h2>Tools</h2>

            <div class="tool">
                <h3>get_bio</h3>
                <div class="description">Returns biographical paragraph</div>
                <div class="meta">
                    Parameters: none<br>
                    Returns: Professional biography highlighting expertise in cloud infrastructure, AI/ML systems, and web technologies
                </div>
            </div>

            <div class="tool">
                <h3>get_contact_info</h3>
                <div class="description">Returns contact information</div>
                <div class="meta">
                    Parameters: none<br>
                    Returns: JSON object with email and Signal contact link
                </div>
            </div>

            <div class="tool">
                <h3>get_social_links</h3>
                <div class="description">Returns social media profiles</div>
                <div class="meta">
                    Parameters: none<br>
                    Returns: JSON object with LinkedIn, GitHub, and Instagram URLs
                </div>
            </div>
        </div>

        <div class="section">
            <h2>Usage</h2>

            <div class="usage-box">
                <h3>Cloudflare AI Playground</h3>
                <ol>
                    <li>Navigate to <a href="https://playground.ai.cloudflare.com/" target="_blank">playground.ai.cloudflare.com</a></li>
                    <li>Connect using the HTTP endpoint below</li>
                </ol>
                <div class="endpoint">https://akj-mcp.mail-34e.workers.dev/mcp</div>
            </div>

            <div class="usage-box">
                <h3>Claude Desktop</h3>
                <p>Add to claude_desktop_config.json:</p>
                <div class="code-block">{
  "mcpServers": {
    "allan-info": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://akj-mcp.mail-34e.workers.dev/mcp"
      ]
    }
  }
}</div>
                <p>Restart Claude Desktop after saving.</p>
            </div>
        </div>

        <div class="section">
            <h2>Technical</h2>
            <div class="tags">
                <span class="tag">Cloudflare Workers</span>
                <span class="tag">TypeScript</span>
                <span class="tag">MCP SDK</span>
                <span class="tag">HTTP Transport</span>
                <span class="tag">No Auth</span>
            </div>
        </div>

        <div class="footer">
            <p><a href="mailto:hi@akj.io">hi@akj.io</a></p>
        </div>
    </div>
</body>
</html>`;
}

export default {
	fetch(request: Request, env: Env, ctx: ExecutionContext) {
		const url = new URL(request.url);

		// Handle root route - serve HTML for browsers
		if (url.pathname === "/" || url.pathname === "") {
			// Check if this is a browser request by looking at Accept header
			const acceptHeader = request.headers.get("accept") || "";
			const isBrowser = acceptHeader.includes("text/html");

			if (isBrowser && request.method === "GET") {
				// Serve HTML landing page for browser requests
				return new Response(getHtmlLandingPage(), {
					headers: {
						"content-type": "text/html;charset=UTF-8",
					},
				});
			}
		}

		// Handle /mcp route - Streamable HTTP transport
		if (url.pathname === "/mcp") {
			return MyMCP.serve("/mcp").fetch(request, env, ctx);
		}

		return new Response("Not found", { status: 404 });
	},
};
