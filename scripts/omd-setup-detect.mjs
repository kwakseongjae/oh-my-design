#!/usr/bin/env node
/**
 * omd-setup-detect.mjs — 이 머신에서 쓸 수 있는 생성·브라우저 채널을 **감지만** 한다 (F1 omd:setup 의 첫 단계).
 *
 * 원칙: 사용자에게 "이거 발급받아라"고 하지 않는다. 있는 것을 찾아 보여 주고, 장단점은 스킬이 문답으로
 * 설명하며, 선택은 사용자가 한다. 키 값은 절대 출력하지 않는다 — 존재 여부(env 이름)만.
 *
 * usage: node scripts/omd-setup-detect.mjs [--json]
 */
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";

// 브라우저 가용성은 실제 체크 도구가 쓰는 해석기에게 묻는다 — 여기서 다시 추측하면 둘이 어긋난다.
let browserProbe = { playwrightCore: null, mode: "unknown", detail: "probe not bundled" };
try {
  ({ detectBrowser: browserProbe } = await import("../test-v2/tools/lib/browser.mjs"));
  browserProbe = browserProbe();
} catch {
  browserProbe = { playwrightCore: null, mode: "unknown", detail: "probe not bundled" };
}

const has = (cmd) => { const r = spawnSync("sh", ["-c", `command -v ${cmd}`], { encoding: "utf8" }); return r.status === 0 ? r.stdout.trim() : null; };
const ver = (cmd, args) => { const r = spawnSync(cmd, args, { encoding: "utf8", timeout: 8000 }); return r.status === 0 ? (r.stdout || r.stderr).split("\n")[0].trim().slice(0, 80) : null; };
const env = (k) => (process.env[k] ? "set" : "unset");

const grokBin = has("grok") || (existsSync(join(homedir(), ".grok/bin/grok")) ? join(homedir(), ".grok/bin/grok") : null);
const channels = {
  "grok-build": {
    kind: "image+video (CLI tools image_gen / image_to_video)", present: !!grokBin, path: grokBin,
    version: grokBin ? ver(grokBin, ["--version"]) : null,
    auth: grokBin ? (existsSync(join(homedir(), ".grok")) ? "login dir present" : "unknown") : null,
    pros: "이미 로그인돼 있으면 키 불필요 · 6초 720p 영상까지 · T3 벤치가 실제로 쓴 채널", cons: "SuperGrok 구독 필요 · 스타일 ID·SVG 없음 · 헤드리스는 --prompt-file 경유",
    cost: "구독 포함(잔액 소진 시 402)",
  },
  "codex-imagegen": {
    kind: "image (gpt-image-2 via `codex exec` $imagegen)", present: !!has("codex"), path: has("codex"), version: has("codex") ? ver("codex", ["--version"]) : null,
    auth: existsSync(join(homedir(), ".codex")) ? "~/.codex present (ChatGPT login)" : "no ~/.codex",
    pros: "ChatGPT 로그인만으로 키 없이 헤드리스 · 참조 이미지 최대 16장 편집 · 가장 싼 경로(≈$0.03–0.08/장)", cons: "SVG 없음 · Codex 채널에서만 네이티브",
    cost: "≈$0.03(1K)–0.08(4K)/장 (외부 발표치)",
  },
  "gemini-nanobanana": {
    kind: "image (Gemini 3.1 Flash Image via gemini CLI extension)", present: !!has("gemini"), path: has("gemini"), version: has("gemini") ? ver("gemini", ["--version"]) : null,
    auth: env("GEMINI_API_KEY") === "set" ? "GEMINI_API_KEY set" : (existsSync(join(homedir(), ".gemini")) ? "~/.gemini present" : "none"),
    pros: "참조 이미지 편집 · 배치 시 반값", cons: "확장 설치 필요(`nanobanana`) · SVG 없음 · 헤드리스 경로 미검증",
    cost: "$0.067/장 (NB2), $0.134–0.24 (Pro)",
  },
  "xai-api": { kind: "image (grok-imagine-image-2.0, OpenAI 호환 REST)", present: env("XAI_API_KEY") === "set", auth: `XAI_API_KEY ${env("XAI_API_KEY")}`, pros: "CLI 없이 순수 API · n≤10 · 15 비율", cons: "SVG·스타일 ID 없음", cost: "$0.04/장" },
  "recraft-api": { kind: "image + **native SVG** + style_id", present: env("RECRAFT_API_KEY") === "set", auth: `RECRAFT_API_KEY ${env("RECRAFT_API_KEY")}`, pros: "유일한 네이티브 SVG · 브랜드 참조 1–10장으로 style_id(재사용) · 아이콘·일러스트 세트 일관성", cons: "유료 키 필요", cost: "SVG $0.088 · style 생성 $0.044 · 래스터 $0.035" },
  "openai-api": { kind: "image (gpt-image-2 REST)", present: env("OPENAI_API_KEY") === "set", auth: `OPENAI_API_KEY ${env("OPENAI_API_KEY")}`, pros: "Codex 없이도 같은 모델", cons: "토큰 과금", cost: "≈$0.03–0.08/장" },
  "video-veo": { kind: "video (Veo 3.1 via Gemini API)", present: env("GEMINI_API_KEY") === "set", auth: `GEMINI_API_KEY ${env("GEMINI_API_KEY")}`, pros: "Lite $0.05/s 720p", cons: "오디오 포함 표준은 $0.40/s", cost: "$0.05–0.60/s" },
  "browser-playwright": {
    kind: "browser (deterministic capture)",
    present: browserProbe.mode === "playwright-cache" || browserProbe.mode === "chrome",
    path: browserProbe.playwrightCore, version: browserProbe.mode === "unknown" ? null : browserProbe.mode,
    auth: browserProbe.detail,
    pros: "결정론 캡처·측정(omd check render/landing/contrast · omd showcase)", cons: "로그인 세션 없음", cost: "$0",
  },
  "browser-claude-in-chrome": { kind: "browser (user's Chrome via MCP)", present: null, note: "세션에서 mcp__claude-in-chrome__* 도구 노출 여부로 판단 — 이 스크립트는 알 수 없다", pros: "로그인된 실제 브라우저", cons: "결정론 아님", cost: "$0" },
  "ffmpeg": { kind: "video encode (showcase)", present: !!has("ffmpeg"), version: has("ffmpeg") ? ver("ffmpeg", ["-version"]) : null, pros: "showcase.mjs 필수", cons: "", cost: "$0" },
};

const cfgPath = join(process.cwd(), ".omd", "config.json");
const existing = existsSync(cfgPath) ? JSON.parse(readFileSync(cfgPath, "utf8")) : null;
const out = { detectedAt: new Date().toISOString(), cwd: process.cwd(), channels, existingConfig: existing };
if (process.argv.includes("--json")) console.log(JSON.stringify(out, null, 1));
else {
  console.log(`omd:setup 감지 (${out.detectedAt})`);
  for (const [k, c] of Object.entries(channels)) console.log(`  ${(c.present === null ? "?" : c.present ? "✓" : "·").padEnd(2)} ${k.padEnd(24)} ${c.kind}${c.version ? " · " + c.version : ""}${c.auth ? " · " + c.auth : ""}`);
  console.log(existing ? `\n기존 .omd/config.json: media.image=${JSON.stringify(existing.media?.image)} video=${JSON.stringify(existing.media?.video)}` : "\n.omd/config.json 없음 — omd:setup 문답으로 만든다.");
}
