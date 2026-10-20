// Fill web/src/data/r11-props.json `props` from the shipped files, keeping `schema` and `note`.
//
//   node docs/research/2026-10-20-r11/props/build-manifest.mjs
//
// Order follows PROP_IDS in web/src/lib/landing-a/props.ts. Width and height are read from the
// WebP itself. Alt text names the generic object only (no brand, no "OmD" chrome).
import { createRequire } from "node:module";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const WEB = join(HERE, "../../../../web");
const sharp = createRequire(join(WEB, "package.json"))("sharp");
const MANIFEST = join(WEB, "src/data/r11-props.json");

const PROP_IDS = [
  "coin", "card", "check-badge", "parcel-box", "price-tag", "piggy-bank", "chart-bars",
  "receipt", "calculator", "briefcase", "chat-bubble", "palette", "shopping-bag",
];

const ALT = {
  coin: { en: "3D gold coin", ko: "3D 금색 동전", ja: "3Dの金色のコイン", "zh-tw": "3D 金色硬幣" },
  card: { en: "3D blank payment card", ko: "3D 빈 결제 카드", ja: "3Dの無地の決済カード", "zh-tw": "3D 空白支付卡" },
  "check-badge": { en: "3D badge with a check mark", ko: "체크 표시가 있는 3D 배지", ja: "チェックマーク付きの3Dバッジ", "zh-tw": "帶勾號的 3D 徽章" },
  "parcel-box": { en: "3D parcel box", ko: "3D 택배 상자", ja: "3Dの配送用の箱", "zh-tw": "3D 包裹箱" },
  "price-tag": { en: "3D price tag", ko: "3D 가격표", ja: "3Dの値札", "zh-tw": "3D 價格標籤" },
  "piggy-bank": { en: "3D piggy bank", ko: "3D 돼지 저금통", ja: "3Dの豚の貯金箱", "zh-tw": "3D 小豬撲滿" },
  "chart-bars": { en: "3D bar chart", ko: "3D 막대그래프", ja: "3Dの棒グラフ", "zh-tw": "3D 長條圖" },
  receipt: { en: "3D paper receipt", ko: "3D 종이 영수증", ja: "3Dの紙のレシート", "zh-tw": "3D 紙本收據" },
  calculator: { en: "3D calculator", ko: "3D 계산기", ja: "3Dの電卓", "zh-tw": "3D 計算機" },
  briefcase: { en: "3D briefcase", ko: "3D 서류 가방", ja: "3Dのブリーフケース", "zh-tw": "3D 公事包" },
  "chat-bubble": { en: "3D speech bubble", ko: "3D 말풍선", ja: "3Dの吹き出し", "zh-tw": "3D 對話框" },
  palette: { en: "3D paint palette", ko: "3D 물감 팔레트", ja: "3Dの絵の具パレット", "zh-tw": "3D 調色盤" },
  "shopping-bag": { en: "3D shopping bag", ko: "3D 쇼핑백", ja: "3Dのショッピングバッグ", "zh-tw": "3D 購物袋" },
};

const current = JSON.parse(readFileSync(MANIFEST, "utf8"));
const props = [];
for (const id of PROP_IDS) {
  const file = join(WEB, "public/r11-props", `${id}.webp`);
  if (!existsSync(file)) {
    console.warn(`skip ${id}: no file`);
    continue;
  }
  const { width, height } = await sharp(file).metadata();
  props.push({
    id,
    src: `/r11-props/${id}.webp`,
    width,
    height,
    alt: ALT[id],
    origin: "omd-generated",
    tool: "Codex CLI 0.158.0 image generation",
    created: "2026-10-20",
  });
}
writeFileSync(MANIFEST, JSON.stringify({ schema: current.schema, note: current.note, props }, null, 2) + "\n");
console.log(`${props.length} props -> ${MANIFEST}`);
