# oh-my-design-mcp

**Drop-in MCP server. 107 brand design systems. Zero AI calls. Free & open.**

Give your coding agent (Claude Desktop, Cursor, Cline, Continue, Codex) instant access to a curated catalog of 107 brand DESIGN.md files — Toss, Stripe, Linear, Apple, Airbnb, Coupang, and 100 more — exposed as MCP resources, tools, and prompts.

- **Local-only.** All data ships inside the npm tarball. No network calls at runtime. No API keys. No telemetry.
- **Deterministic.** Tools are pure file reads + keyword search. Same input, same output.
- **Drop-in.** One JSON snippet per IDE. `npx -y oh-my-design-mcp` and you're done.

> Companion to the [oh-my-design](https://github.com/kwakseongjae/oh-my-design) CLI / skill suite. This server is the read-side; the CLI is the author-side.

---

## Install

### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "oh-my-design": {
      "command": "npx",
      "args": ["-y", "oh-my-design-mcp"]
    }
  }
}
```

Restart Claude Desktop. You should see `oh-my-design` in the MCP server list with 3 tools and 107 resources.

### Cursor

Edit `~/.cursor/mcp.json` (or use Settings → MCP):

```json
{
  "mcpServers": {
    "oh-my-design": {
      "command": "npx",
      "args": ["-y", "oh-my-design-mcp"]
    }
  }
}
```

### Cline (VS Code extension)

Open Cline settings → MCP Servers → Edit MCP Settings → add:

```json
{
  "mcpServers": {
    "oh-my-design": {
      "command": "npx",
      "args": ["-y", "oh-my-design-mcp"],
      "disabled": false,
      "autoApprove": ["list_references", "get_design_md", "search_by_vibe"]
    }
  }
}
```

### Continue

Edit `~/.continue/config.yaml`:

```yaml
mcpServers:
  - name: oh-my-design
    command: npx
    args:
      - "-y"
      - "oh-my-design-mcp"
```

### Codex (OpenAI Codex CLI)

Edit `~/.codex/config.toml`:

```toml
[mcp_servers.oh-my-design]
command = "npx"
args = ["-y", "oh-my-design-mcp"]
```

### Manual / debugging

```bash
npx -y oh-my-design-mcp --help
npx -y oh-my-design-mcp --version
npx -y oh-my-design-mcp           # starts stdio server, waits for JSON-RPC on stdin
```

---

## What it exposes

### Tools

| Tool              | Input                                                | Returns                                                          |
| ----------------- | ---------------------------------------------------- | ---------------------------------------------------------------- |
| `list_references` | `{ country?, category?, has_official_ds? }`          | `{ count, references: [{ id, name, displayName, country, category, primaryColor, hasOfficialDs }] }` |
| `get_design_md`   | `{ id }`                                             | `{ id, frontmatter, content, sections }`                         |
| `search_by_vibe`  | `{ description, limit? }`                            | `{ query, count, matches: [{ id, name, score, reasoning }] }`    |

### Resources

107 brand DESIGN.md files exposed at `design://<id>` — e.g. `design://toss`, `design://stripe`, `design://linear`, `design://apple`. Each resource is `text/markdown` and contains the canonical 15-section spec (Visual Theme, Color Palette, Typography, Components, …, Voice & Tone, Personas, Motion).

### Prompts

| Prompt            | Args                  | Effect                                                                                                |
| ----------------- | --------------------- | ----------------------------------------------------------------------------------------------------- |
| `design_from_ref` | `{ refId, task }`     | Returns a primed message instructing the agent to build `task` in the visual + verbal style of `refId`. Injects Visual Theme, Color, Typography, and Voice sections. |

---

## Examples

**1. Build something in a brand's style**

> You: "Build a pricing page that looks like Toss."
>
> Agent: *(calls `get_design_md` with `id="toss"`, reads the Color Palette + Typography + Components sections, then writes the page using `#3182f6` as the accent, Toss Product Sans for headings, and Toss's documented card patterns.)*

**2. Discover by vibe**

> You: "I want something that feels like a calm B2B fintech dashboard. Show me 3 options."
>
> Agent: *(calls `search_by_vibe` with `description="calm B2B fintech dashboard", limit=3`, returns ranked matches like Toss, Stripe, Banksalad with reasoning, then asks which to use.)*

**3. Audit / extract tokens**

> You: "Pull Stripe's color tokens and motion principles into a JSON config for our app."
>
> Agent: *(calls `get_design_md` with `id="stripe"`, parses the Color Palette and Motion sections, emits structured JSON.)*

---

## How it compares

| Feature                  | oh-my-design-mcp     | Refero MCP                       | Static GitHub collection   |
| ------------------------ | -------------------- | -------------------------------- | -------------------------- |
| Cost                     | **Free, MIT**        | Paid subscription                | Free                       |
| Catalog                  | 107 curated brands   | 130k screens                     | Varies                     |
| Format                   | Canonical DESIGN.md  | Screen images + metadata         | Raw / inconsistent         |
| Runtime network          | **None**             | Required (API calls)             | None                       |
| API keys                 | **None**             | Required                         | None                       |
| Vibe search              | Keyword (deterministic) | Embedding-based                 | None                       |
| Drop-in install          | `npx -y` one snippet | Account + key setup              | Manual clone / copy        |
| Token tagging / sections | Yes (15 sections)    | Image-level only                 | Inconsistent               |

We trade catalog breadth for **bundled, deterministic, offline access to a hand-curated, structured spec per brand.** Best paired with embedding-based image search (Refero) when you want both.

---

## Roadmap

- **v0.2** — embedding-based `search_by_vibe` (still local, using a small bundled model) + `extract_tokens` tool returning JSON token sets.
- **v0.3** — additional resources for component examples + Figma-token export.
- Bundled catalog grows with the upstream [oh-my-design](https://github.com/kwakseongjae/oh-my-design) repo.

---

## License & credits

MIT. © oh-my-design contributors. Brand names, logos, and DESIGN.md descriptions reference each brand's publicly published design system; usage as inspiration / interoperability per nominative fair use. File an issue to request removal of any brand.

Source: <https://github.com/kwakseongjae/oh-my-design/tree/main/packages/mcp>
