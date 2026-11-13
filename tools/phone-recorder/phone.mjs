#!/usr/bin/env node
/**
 * phone — look at a connected iPhone (or a Simulator) and act on it, from the Mac.
 *
 * The device runs the agent server of this folder's UI test bundle (Recorder/PhoneAgentUITests.swift); this is its
 * client. It is meant to be driven by a coding agent one step at a time: look, decide, act, look again.
 *
 *   phone.mjs start <device-id|simulator-udid> [--minutes 20] [--port 8123]
 *   phone.mjs look [--bundle ID] [--walk DIR] [--note "…"]   screenshot + the app's elements; with --walk, kept as the next frame
 *   phone.mjs tap <x> <y> | tap --label "텍스트" [--bundle ID] [--nth N] [--allow-risky]
 *   phone.mjs swipe up|down|left|right | swipe <x1> <y1> <x2> <y2>
 *   phone.mjs type "text" [--bundle ID] | type --secret <account>   --secret types a value from the macOS Keychain
 *                                                          (service "omd-phone"); it is never printed or written to a walk.
 *                                                          Store one yourself: security add-generic-password -s omd-phone -a <account> -w
 *   phone.mjs launch <bundle-id> | terminate <bundle-id> | home | back
 *   phone.mjs alert [--tap "버튼"]                         the system alert in front
 *   phone.mjs settle [--bundle ID] [--walk DIR]            answer system alerts and close pop-ups by the policy below
 *   phone.mjs scrollclip --walk DIR [--steps 16] [--note "…"]  scroll down in small steps, a screenshot after each, made
 *                                                          into an mp4 with ffmpeg (clip-NNN.mp4 + its first frame)
 *   phone.mjs replay <walk/flow.json>                      run a recorded walk's actions again
 *   phone.mjs stop
 *
 * `--bundle` is remembered from the last `launch`. Every action given `--walk DIR` is appended to DIR/flow.json, so
 * a walk is also a macro.
 *
 * Policy (settle): a system alert is recorded, then answered with the least access it offers (허용 안 함, 앱에 추적
 * 금지 요청, 나중에 …). An in-app pop-up is closed by its own dismiss control (건너뛰기, 닫기, 나중에, 둘러보기 …). A
 * login wall is reported, with the ways past it that the screen offers; nothing is typed into a password field.
 * Guard (tap --label): a control whose label is about paying, sending, deleting or leaving an account is not
 * tapped unless --allow-risky is given. The guard reads labels; it cannot know what an unlabelled control does.
 */
import { execFileSync, spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const HOME = process.env.OMD_SCREENS_HOME ?? path.join(os.homedir(), ".omd-workers/screens");
const SESSION = path.join(HOME, "session.json");
const args = process.argv.slice(2);
const cmd = args.shift();
const opt = (name, fallback = null) => { const i = args.indexOf(name); return i === -1 ? fallback : args.splice(i, 2)[1]; };
const flag = (name) => { const i = args.indexOf(name); if (i === -1) return false; args.splice(i, 1); return true; };

const ALERT_LEAST = ["허용 안 함", "Don’t Allow", "Don't Allow", "앱에 추적 금지 요청", "Ask App Not to Track", "나중에", "Not Now", "취소", "Cancel", "닫기", "Close", "확인", "OK"];
const DISMISS = ["건너뛰기", "Skip", "나중에", "나중에 하기", "다음에", "다음에 하기", "오늘 하루 보지 않기", "오늘 그만 보기", "다시 보지 않기", "닫기", "Close", "괜찮아요", "안 받을래요",
  "둘러보기", "로그인 없이 둘러보기", "비회원으로 계속", "비회원으로 둘러보기", "Not now", "Maybe later", "No thanks"];
const GUEST = /둘러보기|비회원|건너뛰기|나중에|다음에|Skip|Later|Not now|guest/i;
const RISKY = /결제|구매|주문하기|바로구매|송금|이체|보내기|충전|출금|삭제|탈퇴|로그아웃|구독|해지|Pay\b|Buy\b|Purchase|Send\b|Transfer|Delete|Sign out|Log out|Subscribe/i;

const session = () => { if (!existsSync(SESSION)) { console.error("no session: run `phone.mjs start <device>` first"); process.exit(2); } return JSON.parse(readFileSync(SESSION, "utf8")); };
const save = (s) => { mkdirSync(HOME, { recursive: true }); writeFileSync(SESSION, JSON.stringify(s, null, 1) + "\n"); };
async function call(method, route, body) {
  const s = session();
  const res = await fetch(s.base + route, { method, ...(body ? { body: JSON.stringify(body) } : {}), signal: AbortSignal.timeout(60000) });
  if (res.headers.get("content-type")?.startsWith("image/")) return Buffer.from(await res.arrayBuffer());
  const data = await res.json();
  if (data.ok === false) throw new Error(data.error);
  return data;
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function secret(account) {
  try { return execFileSync("security", ["find-generic-password", "-s", "omd-phone", "-a", account, "-w"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).replace(/\n$/, ""); }
  catch { throw new Error(`no Keychain item for ${JSON.stringify(account)} (service omd-phone): add it with \`security add-generic-password -s omd-phone -a ${account} -w\``); }
}
const bundleOf = () => opt("--bundle") ?? session().bundle ?? null;

/** Append an action to a walk's flow.json. */
function record(walk, entry) {
  if (!walk) return;
  mkdirSync(walk, { recursive: true });
  const file = path.join(walk, "flow.json");
  const flow = existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : { device: session().device, started: new Date().toISOString(), steps: [] };
  flow.steps.push({ at: new Date().toISOString(), ...entry });
  writeFileSync(file, JSON.stringify(flow, null, 1) + "\n");
  return flow.steps.length;
}

async function look({ bundle, walk, note, quiet = false }) {
  const png = await call("GET", "/screen");
  const tree = bundle ? await call("GET", `/elements?bundle=${encodeURIComponent(bundle)}`) : { front: null, elements: [] };
  const alert = await call("GET", "/alert");
  let frame = null;
  if (walk) {
    mkdirSync(walk, { recursive: true });
    const n = (existsSync(path.join(walk, "flow.json")) ? JSON.parse(readFileSync(path.join(walk, "flow.json"), "utf8")).steps.filter((s) => s.frame).length : 0) + 1;
    frame = `frame-${String(n).padStart(3, "0")}`;
    writeFileSync(path.join(walk, frame + ".png"), png);
    writeFileSync(path.join(walk, frame + ".elements.json"), JSON.stringify({ bundle, alert, ...tree }, null, 1) + "\n");
    record(walk, { action: "look", frame, bundle, ...(note ? { note } : {}), elements: tree.elements.length, ...(alert.alert ? { alert } : {}) });
  } else {
    writeFileSync(path.join(HOME, "last.png"), png);
  }
  if (!quiet) {
    console.log(`${frame ?? "screen"}: ${path.join(walk ?? HOME, (frame ?? "last") + ".png")}${bundle ? ` · ${bundle} ${tree.front ? "in front" : "NOT in front"}` : ""}`);
    if (alert.alert) console.log(`SYSTEM ALERT: ${alert.texts.join(" / ")} → buttons: ${alert.buttons.join(" | ")}`);
    for (const e of tree.elements) {
      if (e.type === "other" && !e.label) continue;
      console.log(`  ${String(e.i).padStart(3)} ${e.type.padEnd(13)} ${JSON.stringify(e.label).slice(0, 60).padEnd(34)} @${e.x + Math.round(e.w / 2)},${e.y + Math.round(e.h / 2)}${e.selected ? " selected" : ""}${e.disabled ? " disabled" : ""}`);
    }
  }
  return { tree, alert, frame };
}

const commands = {
  async start() {
    const device = args[0]; if (!device) throw new Error("device id is required");
    const port = Number(opt("--port", 8123)), minutes = Number(opt("--minutes", 20));
    const sims = execFileSync("xcrun", ["simctl", "list", "devices"], { encoding: "utf8" });
    const simulator = sims.includes(device);
    let host = "127.0.0.1", sign = [], dest = `platform=iOS Simulator,id=${device}`;
    if (!simulator) {
      const list = execFileSync("xcrun", ["devicectl", "list", "devices"], { encoding: "utf8" });
      const row = list.split("\n").find((l) => l.includes(device));
      if (!row) throw new Error("device not found by devicectl");
      host = row.trim().split(/\s{2,}/)[1];                       // <name>.coredevice.local, over the CoreDevice tunnel
      const subject = execFileSync("sh", ["-c", 'security find-certificate -a -c "Apple Development" -p | openssl x509 -noout -subject'], { encoding: "utf8" });
      const team = /OU ?= ?([A-Z0-9]{10})/.exec(subject)?.[1];
      if (!team) throw new Error("no Apple Development certificate in the keychain");
      sign = ["-allowProvisioningUpdates", `DEVELOPMENT_TEAM=${team}`]; dest = `id=${device}`;
    }
    mkdirSync(path.join(HOME, "build"), { recursive: true });
    if (!existsSync(path.join(HERE, "PhoneRecorder.xcodeproj"))) execFileSync("xcodegen", ["generate"], { cwd: HERE });
    const log = path.join(HOME, "agent.log");
    const child = spawn("sh", ["-c", `exec xcodebuild test -project PhoneRecorder.xcodeproj -scheme Recorder -destination "${dest}" -derivedDataPath "${path.join(HOME, "build")}" -only-testing:Recorder/PhoneAgentUITests/testServe ${sign.map((s) => `"${s}"`).join(" ")} > "${log}" 2>&1`],
      { cwd: HERE, detached: true, stdio: "ignore", env: { ...process.env, TEST_RUNNER_AGENT_PORT: String(port), TEST_RUNNER_AGENT_MINUTES: String(minutes) } });
    child.unref();
    const base = `http://${host.includes(":") ? `[${host}]` : host}:${port}`;
    save({ base, device, simulator, pid: child.pid, started: new Date().toISOString(), minutes });
    for (let i = 0; i < 150; i += 1) {
      await sleep(2000);
      try { const h = await call("GET", "/health"); console.log(`ready: ${h.device} (iOS ${h.system}), ${h.width}x${h.height} pt @${h.scale}x, ${base}, for ${minutes} min`); return; } catch { /* still building or installing */ }
      const text = existsSync(log) ? readFileSync(log, "utf8") : "";
      const bad = /error: .*|The device is locked.*|TEST FAILED.*/.exec(text);
      if (bad) throw new Error(`could not start: ${bad[0].slice(0, 200)} (see ${log})`);
    }
    throw new Error(`the agent server did not answer in 5 minutes (see ${log})`);
  },
  async look() { await look({ bundle: bundleOf(), walk: opt("--walk"), note: opt("--note") }); },
  async tap() {
    const walk = opt("--walk"), label = opt("--label"), nth = Number(opt("--nth", 0)), risky = flag("--allow-risky"), bundle = bundleOf();
    let x, y, hit = null;
    if (label !== null) {
      if (!bundle) throw new Error("--label needs --bundle (or a previous launch)");
      const { elements } = await call("GET", `/elements?bundle=${encodeURIComponent(bundle)}`);
      const matches = elements.filter((e) => e.label === label);
      const loose = matches.length ? matches : elements.filter((e) => e.label.includes(label));
      const order = { button: 0, cell: 1, tab: 1, link: 1, switch: 1, textField: 1, searchField: 1 };
      hit = [...loose].sort((a, z) => (order[a.type] ?? 5) - (order[z.type] ?? 5))[nth];
      if (!hit) throw new Error(`no element labelled ${JSON.stringify(label)} in ${bundle}`);
      if (RISKY.test(hit.label) && !risky) throw new Error(`not tapped: ${JSON.stringify(hit.label)} looks like paying, sending, deleting or leaving an account (--allow-risky to override)`);
      x = hit.x + hit.w / 2; y = hit.y + hit.h / 2;
    } else { x = Number(args[0]); y = Number(args[1]); if (Number.isNaN(x) || Number.isNaN(y)) throw new Error("tap <x> <y> or tap --label"); }
    await call("POST", "/tap", { x, y });
    record(walk, { action: "tap", x: Math.round(x), y: Math.round(y), ...(hit ? { label: hit.label, type: hit.type } : {}), bundle });
    console.log(`tapped ${hit ? JSON.stringify(hit.label) + " " : ""}@${Math.round(x)},${Math.round(y)}`);
  },
  async swipe() {
    const walk = opt("--walk"); const h = await call("GET", "/health");
    const cx = h.width / 2, dirs = { up: [cx, h.height * 0.72, cx, h.height * 0.28], down: [cx, h.height * 0.3, cx, h.height * 0.74], left: [h.width * 0.85, h.height / 2, h.width * 0.15, h.height / 2], right: [h.width * 0.15, h.height / 2, h.width * 0.85, h.height / 2] };
    const [x1, y1, x2, y2] = dirs[args[0]] ?? args.slice(0, 4).map(Number);
    await call("POST", "/swipe", { x1, y1, x2, y2 });
    record(walk, { action: "swipe", x1, y1, x2, y2 });
    console.log(`swiped ${args[0] ?? ""}`);
  },
  async back() { const walk = opt("--walk"); const h = await call("GET", "/health"); await call("POST", "/swipe", { x1: 2, y1: h.height / 2, x2: h.width * 0.7, y2: h.height / 2 }); record(walk, { action: "back" }); console.log("swiped back from the left edge"); },
  async type() {
    const walk = opt("--walk"), bundle = bundleOf(), account = opt("--secret");
    // A credential comes from the Keychain and goes straight to the device: the agent names the account, it does not see the value.
    const text = account ? secret(account) : args[0];
    await call("POST", "/type", { bundle, text });
    record(walk, { action: "type", ...(account ? { secret: account } : { text }), bundle });
    console.log(account ? `typed the secret for ${JSON.stringify(account)} (not shown)` : "typed");
  },
  async launch() { const walk = opt("--walk"); const r = await call("POST", "/launch", { bundle: args[0] }); save({ ...session(), bundle: args[0] }); record(walk, { action: "launch", bundle: args[0] }); console.log(`launched ${args[0]} (state ${r.state})`); },
  async terminate() { await call("POST", "/terminate", { bundle: args[0] }); console.log(`terminated ${args[0]}`); },
  async home() { const walk = opt("--walk"); await call("POST", "/home"); record(walk, { action: "home" }); console.log("home"); },
  async alert() {
    const button = opt("--tap"), walk = opt("--walk");
    if (button) { await call("POST", "/alert", { button }); record(walk, { action: "alert", button }); console.log(`answered the alert with ${JSON.stringify(button)}`); return; }
    const a = await call("GET", "/alert");
    console.log(a.alert ? `${a.texts.join(" / ")} → ${a.buttons.join(" | ")}` : "no system alert");
  },
  /** Clear what stands between the agent and the app's own screen, least access first. Reports each thing it did. */
  async settle() {
    const walk = opt("--walk"), bundle = bundleOf();
    for (let round = 0; round < 6; round += 1) {
      const a = await call("GET", "/alert");
      if (a.alert) {
        if (walk) await look({ bundle, walk, note: `system alert: ${a.texts[0] ?? ""}`, quiet: true });
        const button = ALERT_LEAST.find((b) => a.buttons.includes(b));
        if (!button) { console.log(`system alert with no button the policy knows: ${a.buttons.join(" | ")} — left for the agent`); return; }
        await call("POST", "/alert", { button }); record(walk, { action: "alert", button, text: a.texts.join(" / ") });
        console.log(`system alert ${JSON.stringify(a.texts[0] ?? "")}: answered ${JSON.stringify(button)}`);
        await sleep(900); continue;
      }
      if (!bundle) break;
      const { front, elements } = await call("GET", `/elements?bundle=${encodeURIComponent(bundle)}`);
      if (!front) { console.log(`${bundle} is not in front`); return; }
      const password = elements.some((e) => e.type === "secureTextField");
      const loginWords = elements.filter((e) => /로그인|Log ?in|Sign ?in|회원가입/i.test(e.label)).length;
      const ways = elements.filter((e) => ["button", "link", "text", "cell"].includes(e.type) && GUEST.test(e.label));
      if (password || (loginWords >= 2 && elements.some((e) => e.type === "textField"))) {
        console.log(`LOGIN WALL${ways.length ? `: ways past it on this screen: ${ways.map((e) => JSON.stringify(e.label)).join(", ")}` : ": no way past it on this screen"} — left for the agent`);
        return;
      }
      // 닫기 / Close in the top bar closes the page, not a pop-up (Musinsa's cart, 2026-11-13): only lower ones count.
      const height = (await call("GET", "/health")).height;
      const dismiss = elements.find((e) => ["button", "link"].includes(e.type) && DISMISS.includes(e.label.trim()) && !(/^(닫기|Close)$/.test(e.label.trim()) && e.y < height * 0.18));
      if (!dismiss) break;
      if (walk) await look({ bundle, walk, note: `pop-up closed with ${dismiss.label}`, quiet: true });
      await call("POST", "/tap", { x: dismiss.x + dismiss.w / 2, y: dismiss.y + dismiss.h / 2 });
      record(walk, { action: "tap", label: dismiss.label, type: dismiss.type, x: dismiss.x + dismiss.w / 2, y: dismiss.y + dismiss.h / 2, bundle, by: "settle" });
      console.log(`pop-up: tapped ${JSON.stringify(dismiss.label)}`);
      await sleep(900);
    }
    console.log("settled");
  },
  /** A scroll as a clip: the device's own screenshots, one per small step, so it shows what a still cannot. */
  async scrollclip() {
    const walk = opt("--walk"), steps = Number(opt("--steps", 16)), note = opt("--note");
    if (!walk) throw new Error("scrollclip needs --walk");
    const h = await call("GET", "/health");
    mkdirSync(walk, { recursive: true });
    const n = (existsSync(path.join(walk, "flow.json")) ? JSON.parse(readFileSync(path.join(walk, "flow.json"), "utf8")).steps.filter((x) => x.clip).length : 0) + 1;
    const name = `clip-${String(n).padStart(3, "0")}`, dir = path.join(walk, name);
    mkdirSync(dir, { recursive: true });
    for (let i = 0; i <= steps; i += 1) {
      writeFileSync(path.join(dir, `${String(i).padStart(3, "0")}.png`), await call("GET", "/screen"));
      if (i < steps) { await call("POST", "/swipe", { x1: h.width / 2, y1: h.height * 0.62, x2: h.width / 2, y2: h.height * 0.62 - 150 }); await sleep(650); }
    }
    let video = null;
    try {
      execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-framerate", "5", "-i", path.join(dir, "%03d.png"), "-vf", "scale=402:-2", "-pix_fmt", "yuv420p", path.join(walk, name + ".mp4")]);
      video = name + ".mp4";
    } catch { /* no ffmpeg: the frames stay as they are */ }
    record(walk, { action: "scrollclip", clip: name, steps, video, ...(note ? { note } : {}) });
    console.log(`${name}: ${steps + 1} frames${video ? ` → ${path.join(walk, video)}` : " (ffmpeg not found; frames kept)"}`);
  },
  async replay() {
    const flow = JSON.parse(readFileSync(args[0], "utf8"));
    for (const s of flow.steps) {
      if (s.action === "launch") await call("POST", "/launch", { bundle: s.bundle });
      else if (s.action === "tap" && s.label && s.bundle) {          // by label where there is one: positions move
        const { elements } = await call("GET", `/elements?bundle=${encodeURIComponent(s.bundle)}`);
        const e = elements.find((x) => x.label === s.label) ?? null;
        if (e && RISKY.test(e.label)) throw new Error(`replay stopped at ${JSON.stringify(e.label)}`);
        await call("POST", "/tap", e ? { x: e.x + e.w / 2, y: e.y + e.h / 2 } : { x: s.x, y: s.y });
      } else if (s.action === "tap") await call("POST", "/tap", { x: s.x, y: s.y });
      else if (s.action === "swipe") await call("POST", "/swipe", s);
      else if (s.action === "type") await call("POST", "/type", { bundle: s.bundle, text: s.secret ? secret(s.secret) : s.text });
      else if (s.action === "alert") await call("POST", "/alert", { button: s.button }).catch(() => {});
      else if (s.action === "home") await call("POST", "/home");
      else continue;
      console.log(`replayed ${s.action}${s.label ? " " + JSON.stringify(s.label) : ""}`);
      await sleep(1200);
    }
  },
  async stop() { await call("POST", "/quit").catch(() => {}); console.log("session ended"); },
};

if (!commands[cmd]) { console.error(readFileSync(fileURLToPath(import.meta.url), "utf8").split("*/")[0].replace(/^#!.*\n\/\*\*\n?/, "").replace(/^ \* ?/gm, "")); process.exit(2); }
try { await commands[cmd](); } catch (e) { console.error(`phone: ${e.message}`); process.exit(1); }
