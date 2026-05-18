import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createServer, SERVER_NAME, SERVER_VERSION } from './server.js';

function printHelp() {
  // Use stderr — stdout is reserved for the JSON-RPC stream.
  process.stderr.write(
    [
      `${SERVER_NAME} v${SERVER_VERSION}`,
      '',
      'Drop-in MCP server exposing 107 brand design systems (DESIGN.md).',
      '',
      'Usage:',
      `  npx -y ${SERVER_NAME}            # start stdio MCP server (default)`,
      `  npx -y ${SERVER_NAME} --help     # show this help`,
      `  npx -y ${SERVER_NAME} --version  # print version`,
      '',
      'Tools:     list_references, get_design_md, search_by_vibe',
      'Resources: design://<id>  (107 brands)',
      'Prompts:   design_from_ref',
      '',
      'Install in Claude Desktop, Cursor, Cline, Continue, or Codex — see README.',
      '',
    ].join('\n'),
  );
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) {
    printHelp();
    return;
  }
  if (args.includes('--version') || args.includes('-v')) {
    process.stdout.write(`${SERVER_VERSION}\n`);
    return;
  }

  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // Log to stderr only — stdout is the JSON-RPC channel.
  process.stderr.write(
    `[${SERVER_NAME}] v${SERVER_VERSION} listening on stdio\n`,
  );
}

main().catch((err) => {
  process.stderr.write(
    `[${SERVER_NAME}] fatal: ${err instanceof Error ? err.stack ?? err.message : String(err)}\n`,
  );
  process.exit(1);
});
