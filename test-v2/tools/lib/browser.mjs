#!/usr/bin/env node
/**
 * browser.mjs — playwright-core와 크로미움 바이너리를 **한 자리에서** 찾는다.
 *
 * 왜 있나 (2026-09-02, 2.0.1 패키징): render-integrity·landing-integrity·text-contrast·showcase는
 * `createRequire(import.meta.url)` 로 `playwright-core`를 요구했다. 레포에서는 `test-v2/tools/node_modules`
 * 심링크(→ web/node_modules)가 받아 줬지만, npm 설치본에는 그 심링크가 없고 playwright-core는 패키지
 * 의존성도 아니었다 — 즉 배포된 스킬의 명령이 사용자 프로젝트에서 그대로 죽었다.
 *
 * 여기서 하는 일 두 가지:
 *   1) playwright-core 해석 — 통상 walk-up → 패키지 루트 기준 → test-v2/tools/node_modules 순.
 *   2) 크로미움 바이너리 해석 — 브라우저를 **자동으로 내려받지 않는다**. 순서는
 *        ① playwright 캐시(ms-playwright)의 chromium — 레포/개발자 머신의 기존 결정론적 경로,
 *        ② 사용자의 Google Chrome(`channel: "chrome"`),
 *      이고 `OMD_BROWSER=chrome|chromium` 로 강제할 수 있다. 둘 다 없으면 실행 가능한 한 줄로 알린다.
 *
 * 캐시를 먼저 보는 이유: 이 도구들의 판정(픽셀 대비·섹션 비율)은 같은 엔진에서 같은 수를 내야 한다.
 * 설치본에는 캐시가 없으므로 자연히 Chrome으로 떨어진다.
 *
 * usage: node test-v2/tools/lib/browser.mjs [--json]   # 감지 결과만 출력 (읽기 전용)
 */
import { createRequire } from "node:module";
import { existsSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir, platform } from "node:os";

const HERE = dirname(fileURLToPath(import.meta.url));
/** test-v2/tools/lib → test-v2/tools → test-v2 → package root */
export const PACKAGE_ROOT = resolve(HERE, "..", "..", "..");

export const INSTALL_HINT =
  "playwright-core를 찾지 못했다 — `npm i -D playwright-core@^1.61.1` 후 다시 실행한다 " +
  "(브라우저 가용성은 `omd setup detect` 가 보여 준다).";
export const BROWSER_HINT =
  "크로미움 바이너리가 없다 — Google Chrome을 설치하거나 `npx playwright install chromium` 을 한 번 실행한다 " +
  "(현재 가용성은 `omd setup detect` 가 보여 준다).";

/** playwright-core의 module id를 돌려준다. 못 찾으면 null. */
export function resolvePlaywrightCore() {
  const attempts = [
    () => createRequire(import.meta.url).resolve("playwright-core"),
    () => createRequire(join(PACKAGE_ROOT, "package.json")).resolve("playwright-core"),
    () => {
      const vendored = join(PACKAGE_ROOT, "test-v2", "tools", "node_modules", "playwright-core");
      if (!existsSync(join(vendored, "package.json"))) throw new Error("no vendored copy");
      return createRequire(join(vendored, "package.json")).resolve("playwright-core");
    },
  ];
  for (const attempt of attempts) {
    try {
      return attempt();
    } catch {
      // try the next resolution root
    }
  }
  return null;
}

function playwrightCacheDir() {
  const override = process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (override && override !== "0") return override;
  const home = homedir();
  if (platform() === "darwin") return join(home, "Library", "Caches", "ms-playwright");
  if (platform() === "win32") return join(process.env.LOCALAPPDATA || join(home, "AppData", "Local"), "ms-playwright");
  return join(home, ".cache", "ms-playwright");
}

/**
 * 이 playwright-core 버전이 기대하는 **정확한** chromium 실행 파일이 캐시에 있는지 본다.
 * 디렉터리 이름만 훑으면 안 된다 — 캐시에 chromium-1228이 있어도 playwright 1.62가 요구하는
 * 리비전이 아니면 launch가 "Executable doesn't exist"로 죽는다. 버전 질문은 playwright에게 시킨다.
 */
function cachedChromiumExecutable(chromium) {
  if (!chromium) return null;
  try {
    const path = chromium.executablePath();
    return path && existsSync(path) ? path : null;
  } catch {
    return null;
  }
}

/** 참고용: 캐시 디렉터리에 있는 chromium 빌드 이름들 (진단 문구에만 쓴다). */
function cachedChromiumBuilds() {
  const dir = playwrightCacheDir();
  if (!existsSync(dir)) return [];
  try {
    return readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && /^chromium(-|_headless_shell-)\d+$/.test(e.name))
      .map((e) => e.name)
      .sort();
  } catch {
    return [];
  }
}

const CHROME_PATHS = {
  darwin: ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"],
  linux: ["/opt/google/chrome/chrome", "/usr/bin/google-chrome", "/usr/bin/google-chrome-stable"],
  win32: [
    join(process.env["PROGRAMFILES"] || "C:\\Program Files", "Google\\Chrome\\Application\\chrome.exe"),
    join(process.env["PROGRAMFILES(X86)"] || "C:\\Program Files (x86)", "Google\\Chrome\\Application\\chrome.exe"),
    join(process.env.LOCALAPPDATA || "", "Google\\Chrome\\Application\\chrome.exe"),
  ],
};

function chromePath() {
  for (const candidate of CHROME_PATHS[platform()] || []) {
    if (candidate && existsSync(candidate)) return candidate;
  }
  return null;
}

/**
 * 읽기 전용 감지. { playwrightCore, mode, detail } 을 돌려준다.
 * mode: "playwright-cache" | "chrome" | "none"
 */
export function detectBrowser(chromiumHandle) {
  const playwrightCore = resolvePlaywrightCore();
  let chromium = chromiumHandle ?? null;
  if (!chromium && playwrightCore) {
    try {
      chromium = createRequire(import.meta.url)(playwrightCore).chromium;
    } catch {
      chromium = null;
    }
  }
  const cached = cachedChromiumExecutable(chromium);
  const chrome = chromePath();
  const forced = process.env.OMD_BROWSER;
  const order = forced === "chrome" ? ["chrome", "cache"] : forced === "chromium" ? ["cache"] : ["cache", "chrome"];
  for (const step of order) {
    if (step === "cache" && cached) {
      return { playwrightCore, mode: "playwright-cache", detail: cached, forced: forced || null };
    }
    if (step === "chrome" && chrome) {
      return { playwrightCore, mode: "chrome", detail: chrome, forced: forced || null };
    }
  }
  const stale = cachedChromiumBuilds();
  return {
    playwrightCore,
    mode: "none",
    detail: playwrightCore
      ? stale.length
        ? `${BROWSER_HINT} (캐시에 ${stale.join(", ")}가 있으나 이 playwright-core가 요구하는 리비전이 아니다)`
        : BROWSER_HINT
      : INSTALL_HINT,
    forced: forced || null,
  };
}

/** playwright-core의 chromium을 로드한다. 없으면 한 줄 안내 후 exit 3. */
export function loadChromium() {
  const id = resolvePlaywrightCore();
  if (!id) {
    console.error(INSTALL_HINT);
    process.exit(3);
  }
  return createRequire(import.meta.url)(id).chromium;
}

/**
 * `chromium.launch()` 에 얹을 옵션. 캐시가 있으면 {} (playwright 기본 chromium),
 * 없고 Chrome이 있으면 { channel: "chrome" }. 둘 다 없으면 한 줄 안내 후 exit 3.
 * 브라우저를 자동으로 내려받지 않는다.
 */
export function browserLaunchOptions(chromiumHandle) {
  const found = detectBrowser(chromiumHandle);
  if (found.mode === "playwright-cache") return {};
  if (found.mode === "chrome") return { channel: "chrome" };
  console.error(BROWSER_HINT);
  process.exit(3);
}

/** 도구들이 쓰는 한 줄 진입점 — chromium 핸들과 launch 옵션을 함께 돌려준다. */
export function chromiumRuntime() {
  const chromium = loadChromium();
  return { chromium, launchOptions: browserLaunchOptions(chromium) };
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  const found = detectBrowser();
  if (process.argv.includes("--json")) console.log(JSON.stringify(found, null, 1));
  else console.log(`playwright-core: ${found.playwrightCore || "not found"}\nbrowser: ${found.mode} — ${found.detail}`);
}
