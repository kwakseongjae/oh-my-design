#!/usr/bin/env node
/**
 * dataproduct-audit.mjs — data-fidelity audit for the wholesale-console task.
 *
 * "Product-grade" means the screens COMPUTE from the shared dataset. This
 * audit derives every expected value from data/data.json at audit time
 * (nothing hardcoded here) and verifies the rendered pages against it:
 *
 *  - overview: orders total, per-status counts (paired with the status word
 *    in the same element subtree), open cases, low/out product count
 *  - orders: rendered order-id count equals the dataset; activating a
 *    "delayed" filter narrows to exactly the delayed orders
 *  - detail: opening the first order shows its id, its customer name, and
 *    every line's product NAME (proves a runtime join); an unknown id
 *    produces an honest error state
 *  - products: all product names rendered, provided images used
 *  - anti-hardcode: raw orders.html markup containing many order-id
 *    literals implies hand-copied rows instead of runtime rendering
 *
 * Usage: dataproduct-audit.mjs --workspace <dir> --out <dir>
 */

import { createRequire } from "node:module";
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const require = createRequire(import.meta.url);
const webRequire = createRequire(resolve("web/package.json"));
let playwright;
try { playwright = require("playwright-core"); } catch { playwright = webRequire("playwright-core"); }
const { chromium } = playwright;

function parseArgs(argv) {
  const map = new Map();
  for (let i = 0; i < argv.length; i += 1) if (argv[i].startsWith("--")) { map.set(argv[i].slice(2), argv[i + 1]); i += 1; }
  return map;
}
const args = parseArgs(process.argv.slice(2));
if (!args.has("workspace") || !args.has("out")) { console.error("usage: dataproduct-audit.mjs --workspace <dir> --out <dir>"); process.exit(1); }
const workspace = resolve(args.get("workspace"));
const outDir = resolve(args.get("out"));
mkdirSync(outDir, { recursive: true });

const data = JSON.parse(readFileSync(join(workspace, "data/data.json"), "utf8"));
const expected = {
  orders_total: data.orders.length,
  by_status: Object.fromEntries(["pending", "packed", "shipped", "delayed", "cancelled"].map((s) => [s, data.orders.filter((o) => o.status === s).length])),
  open_cases: data.orders.filter((o) => ["pending", "packed"].includes(o.status)).reduce((t, o) => t + o.total_cases, 0),
  low_or_out: data.products.filter((p) => p.stock_status !== "in-stock").length,
  product_names: data.products.map((p) => p.name),
};
const firstOrder = data.orders[0];
const firstCustomer = data.customers.find((c) => c.id === firstOrder.customer_id);
const firstLineNames = firstOrder.lines.map((l) => data.products.find((p) => p.id === l.product_id).name);

const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".mjs": "text/javascript", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml" };
function chromePath() {
  for (const item of [process.env.CHROME_PATH, "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/Applications/Chromium.app/Contents/MacOS/Chromium"].filter(Boolean)) if (existsSync(item)) return item;
  return null;
}
const server = createServer((request, response) => {
  try {
    const path = normalize(decodeURIComponent(new URL(request.url, "http://localhost").pathname));
    const file = join(workspace, path === "/" ? "index.html" : path);
    if (!file.startsWith(workspace) || !existsSync(file) || !statSync(file).isFile()) { response.writeHead(404); response.end(); return; }
    response.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
    response.end(readFileSync(file));
  } catch { response.writeHead(500); response.end(); }
});
await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
const origin = `http://127.0.0.1:${server.address().port}`;
const executablePath = chromePath();
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
const goto = async (target) => { await page.goto(`${origin}/${target}`, { waitUntil: "networkidle", timeout: 30000 }); await page.waitForTimeout(700); };

const result = { expected };

// overview
await goto("index.html");
const bodyText = (await page.innerText("body")).replace(/\s+/g, " ");
const containsNumber = (n) => new RegExp(`(?<![\\d.])${n}(?![\\d.])`).test(bodyText);
result.overview = {
  orders_total_shown: containsNumber(expected.orders_total),
  open_cases_shown: containsNumber(expected.open_cases),
  low_or_out_shown: containsNumber(expected.low_or_out),
  status_pairs: {},
};
for (const [status, count] of Object.entries(expected.by_status)) {
  result.overview.status_pairs[status] = await page.evaluate(({ status, count }) => {
    const walk = [...document.querySelectorAll("body *")].filter((el) => el.children.length <= 6 && new RegExp(status, "i").test(el.textContent || ""));
    return walk.some((el) => new RegExp(`(?<![\\d.])${count}(?![\\d.])`).test((el.textContent || "").replace(/\s+/g, " ")));
  }, { status, count });
}
result.overview.pass = result.overview.orders_total_shown && result.overview.open_cases_shown
  && Object.values(result.overview.status_pairs).every(Boolean);
await page.screenshot({ path: join(outDir, "overview.png"), fullPage: false });

// orders table + filter
await goto("orders.html");
const countIds = () => page.evaluate(() => {
  const matches = (document.body.innerText || "").match(/O-26\d{3}/g) || [];
  return new Set(matches).size;
});
result.orders = { rendered_ids: await countIds() };
result.orders.all_rows = result.orders.rendered_ids === expected.orders_total;
let filterActivated = false;
for (const locator of [
  page.getByRole("button", { name: /delayed/i }), page.getByRole("radio", { name: /delayed/i }),
  page.getByRole("checkbox", { name: /delayed/i }), page.getByRole("tab", { name: /delayed/i }),
]) {
  if (await locator.count()) { await locator.first().click(); filterActivated = true; break; }
}
if (!filterActivated) {
  const combo = page.getByRole("combobox");
  for (let i = 0; i < await combo.count(); i += 1) {
    const options = await combo.nth(i).locator("option").allTextContents();
    const target = options.find((o) => /delayed/i.test(o));
    if (target) { await combo.nth(i).selectOption({ label: target }); filterActivated = true; break; }
  }
}
await page.waitForTimeout(600);
result.orders.filter_activated = filterActivated;
result.orders.delayed_ids_after_filter = filterActivated ? await countIds() : null;
result.orders.filter_exact = filterActivated && result.orders.delayed_ids_after_filter === expected.by_status.delayed;
await page.screenshot({ path: join(outDir, "orders-filtered.png"), fullPage: false });

// detail via first order (fresh load, then activate its row/link)
await goto("orders.html");
const idLink = page.locator(`a:has-text("${firstOrder.id}"), button:has-text("${firstOrder.id}"), [role="row"]:has-text("${firstOrder.id}") a, [role="row"]:has-text("${firstOrder.id}") button`);
result.detail = { row_found: (await idLink.count()) > 0 };
if (result.detail.row_found) {
  await idLink.first().click();
  await page.waitForTimeout(900);
  const text = (await page.innerText("body")).replace(/\s+/g, " ");
  result.detail.shows_id = text.includes(firstOrder.id);
  result.detail.shows_customer = text.includes(firstCustomer.name);
  result.detail.joined_line_names = firstLineNames.map((n) => ({ name: n, shown: text.includes(n) }));
  result.detail.join_pass = result.detail.shows_id && result.detail.shows_customer && result.detail.joined_line_names.every((l) => l.shown);
  await page.screenshot({ path: join(outDir, "detail.png"), fullPage: false });
}
await goto("order-detail.html?id=O-99999");
const errText = (await page.innerText("body")).replace(/\s+/g, " ");
result.detail_unknown_id_honest = /not found|unknown|no such|doesn.t exist|couldn.t find|invalid order/i.test(errText)
  || await page.evaluate(() => Boolean(document.querySelector('[data-state="error"], [role="alert"]')));

// products
await goto("products.html");
const prodText = (await page.innerText("body")).replace(/\s+/g, " ");
result.products = {
  names_shown: expected.product_names.filter((n) => prodText.includes(n)).length,
  names_total: expected.product_names.length,
  images_used: await page.evaluate(() => [...document.querySelectorAll("img[src*='assets/']")].length),
};
result.products.pass = result.products.names_shown === result.products.names_total && result.products.images_used >= 8;
await page.screenshot({ path: join(outDir, "products.png"), fullPage: false });

await browser.close(); server.close();

// anti-hardcode: order ids literally present in the orders.html markup
const rawOrders = readFileSync(join(workspace, "orders.html"), "utf8");
const staticIds = new Set(rawOrders.match(/O-26\d{3}/g) || []).size;
result.anti_hardcode = { static_order_ids_in_markup: staticIds, pass: staticIds <= 1 };

result.data_fidelity_pass = Boolean(result.overview.pass && result.orders.all_rows && result.orders.filter_exact
  && result.detail.join_pass && result.detail_unknown_id_honest && result.products.pass && result.anti_hardcode.pass);
result.generated_at = new Date().toISOString();
writeFileSync(join(outDir, "dataproduct-audit.json"), `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify({ overview: result.overview.pass, rows: result.orders.all_rows, filter: result.orders.filter_exact, join: result.detail.join_pass ?? false, unknown_id: result.detail_unknown_id_honest, products: result.products.pass, anti_hardcode: result.anti_hardcode.pass, DATA_FIDELITY: result.data_fidelity_pass }));
