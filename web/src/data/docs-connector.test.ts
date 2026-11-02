import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { CLI_DOCS } from "./cli-docs";
import {
  CONNECTOR_CLAUDE_CODE_COMMAND,
  CONNECTOR_COPY,
  CONNECTOR_CURSOR_JSON,
  CONNECTOR_TOOL_NAMES,
  CONNECTOR_URL,
} from "./docs-connector";
import { DOC_LOCALES, DOC_NAV_GROUPS, docsHref } from "@/lib/docs/locales";
import { docsPageMarkdown } from "@/lib/docs/page-markdown";
import { getDocsToc } from "@/components/cli-docs/docs-route";

describe("MCP connector docs page", () => {
  it("holds the endpoint and the three install forms to the shipped values", () => {
    expect(CONNECTOR_URL).toBe("https://oh-my-design.kr/api/mcp");
    expect(CONNECTOR_CLAUDE_CODE_COMMAND).toBe("claude mcp add --transport http oh-my-design https://oh-my-design.kr/api/mcp");
    expect(JSON.parse(CONNECTOR_CURSOR_JSON)).toEqual({ mcpServers: { "oh-my-design": { url: CONNECTOR_URL } } });
    for (const locale of DOC_LOCALES) {
      const adds = CONNECTOR_COPY[locale].adds;
      expect(adds.map((add) => add.command), locale).toEqual([CONNECTOR_CLAUDE_CODE_COMMAND, undefined, CONNECTOR_CURSOR_JSON]);
      expect(adds[1].body, locale).toContain(CONNECTOR_URL);
      expect(CONNECTOR_COPY[locale].endpointBody, locale).toContain(CONNECTOR_URL);
    }
  });

  it("documents exactly the tools the server registers, in registration order", () => {
    const server = readFileSync(join(__dirname, "..", "lib", "mcp", "server.ts"), "utf8");
    const registered = [...server.matchAll(/registerTool\("([a-z_]+)"/g)].map((match) => match[1]);
    expect([...CONNECTOR_TOOL_NAMES]).toEqual(registered);
    for (const locale of DOC_LOCALES) {
      const tools = CONNECTOR_COPY[locale].tools;
      expect(tools.map((tool) => tool.name), locale).toEqual(registered);
      for (const tool of tools) expect(tool.prompt.trim().length, `${locale} ${tool.name}`).toBeGreaterThan(8);
    }
  });

  it("sits in the guides group right after shadcn, and merges into every locale's dictionary and nav", () => {
    const guides = DOC_NAV_GROUPS.find((group) => group.id === "guides")!.pages;
    expect(guides.indexOf("connector")).toBe(guides.indexOf("shadcn") + 1);
    for (const locale of DOC_LOCALES) {
      expect(CLI_DOCS[locale].connector).toBe(CONNECTOR_COPY[locale]);
      expect(CLI_DOCS[locale].nav.connector).toBe(CONNECTOR_COPY[locale].navLabel);
      if (locale !== "en") {
        expect(CONNECTOR_COPY[locale].title, locale).not.toBe(CONNECTOR_COPY.en.title);
        expect(CONNECTOR_COPY[locale].lead, locale).not.toBe(CONNECTOR_COPY.en.lead);
      }
    }
  });

  it("renders as Markdown in all five locales with its install command, URL and tools", () => {
    for (const locale of DOC_LOCALES) {
      const markdown = docsPageMarkdown(locale, "connector");
      expect(markdown, locale).toContain(`# ${CONNECTOR_COPY[locale].title}`);
      expect(markdown, locale).toContain(`${"https://oh-my-design.kr"}${docsHref(locale, "connector")}`);
      expect(markdown, locale).toContain(CONNECTOR_CLAUDE_CODE_COMMAND);
      expect(markdown, locale).toContain(CONNECTOR_CURSOR_JSON);
      expect(markdown, locale).toContain(CONNECTOR_URL);
      for (const name of CONNECTOR_TOOL_NAMES) expect(markdown, `${locale} ${name}`).toContain(name);
      expect(getDocsToc(CLI_DOCS[locale], "connector").length, locale).toBe(6);
    }
  });

  it("does not claim a directory listing, an npm package, authentication or write tools", () => {
    const text = JSON.stringify(CONNECTOR_COPY.en).toLowerCase();
    for (const claim of ["directory", "npm", "oauth", "api key", "rate limit"]) expect(text, claim).not.toContain(claim);
  });
});
