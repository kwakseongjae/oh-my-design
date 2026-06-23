# Analytics pull — setup

Credential-free sources (npm, GitHub) already work. To unblock the three sources
you care about — **Upstash counters, GA4, GSC** — do the steps below, then run:

```bash
node scripts/analytics/pull-all.mjs --days 28
```

Each source is independent: whatever is configured runs, the rest skip with a
reason. Nothing here is committed — keys live in `.secrets/` (gitignored) and
config in `web/.env.local` (gitignored). Raw dumps land in `data/analytics/raw/`
(gitignored).

---

## 1. Upstash counters (2 values — fastest win)

The per-reference `select/generate/download/copy` counters. Grab the REST creds
from **Vercel → project → Settings → Environment Variables** (or the Upstash
console → your DB → REST API), then add to `web/.env.local`:

```
OMD_KV_REST_API_URL=https://xxxx.upstash.io
OMD_KV_REST_API_TOKEN=AY...
```

(The canonical `UPSTASH_REDIS_REST_URL` / `_TOKEN` names also work as a fallback.)

---

## 2. Service account (shared by GA4 + GSC) — click-by-click

One service account covers both APIs. `[type]` = you type a value, `[pick]` =
choose from a dropdown/radio, `[click]` = press the button.

### 2A. Project — https://console.cloud.google.com
- Top bar project dropdown → **New Project** (or reuse one).
- Project name `[type]`: `omd-analytics` → **Create** `[click]`. Wait, then make
  sure that project is selected in the top bar.

### 2B. Enable both APIs — APIs & Services → Library
- Search `[type]` `Google Analytics Data API` → open it → **Enable** `[click]`.
- Search `[type]` `Google Search Console API` → open it → **Enable** `[click]`.

### 2C. Create the service account — IAM & Admin → Service Accounts
- **+ Create service account** `[click]`.
- Step 1: Service account name `[type]`: `omd-analytics-reader` (ID auto-fills)
  → **Create and continue** `[click]`.
- Step 2 "Grant access to project": leave EMPTY → **Continue** `[click]`
  (access is granted per-property in §3/§4, not project-wide).
- Step 3: leave empty → **Done** `[click]`.

### 2D. JSON key
- Click the new SA's email → **Keys** tab → **Add key → Create new key**.
- Key type `[pick]`: **JSON** → **Create** `[click]`. The `.json` downloads.
- Move it (Mac, exact path):
  ```bash
  mv ~/Downloads/omd-analytics-*.json \
     /Users/kwakseongjae/Desktop/projects/oh-my-design/scripts/analytics/.secrets/sa.json
  ```
- The SA email (`omd-analytics-reader@omd-analytics.iam.gserviceaccount.com`) is
  what you paste into GA4 + GSC below. (After the file is in place I can echo the
  exact `client_email` for you.)

---

## 3. GA4 — property ID + grant access — https://analytics.google.com

### 3A. Grant the SA — Admin (⚙ bottom-left) → Property column → Property access management
- **+** (top-right) → **Add users** `[click]`.
- Email addresses `[type]`: the SA email from §2D.
- Uncheck **Notify new users by email** (SAs can't get email).
- Direct roles `[pick]`: **Viewer** → **Add** `[click]`.

### 3B. Property ID — Admin → Property column → Property details (or Property Settings)
- Top-right shows **PROPERTY ID** = a number, e.g. `123456789` (NOT the `G-XXXX`
  measurement ID). Add to `web/.env.local`:
  ```
  GA4_PROPERTY_ID=123456789
  ```

> Optional: for the per-`reference` funnel inside GA4 too, Admin → Custom
> definitions → create an event-scoped custom dimension named `reference`. Not
> required (Upstash covers that join key); the pull skips it gracefully if absent.

---

## 4. GSC — site URL + grant access — https://search.google.com/search-console

### 4A. Which property type? (top-left property selector)
- Shows just `oh-my-design.kr` (globe icon) → **Domain** property →
  `GSC_SITE_URL=sc-domain:oh-my-design.kr`
- Shows full `https://oh-my-design.kr/` → **URL-prefix** property →
  `GSC_SITE_URL=https://oh-my-design.kr/`

### 4B. Grant the SA — Settings (left ⚙) → Users and permissions
- **Add user** `[click]`.
- Email `[type]`: the SA email from §2D.
- Permission `[pick]`: **Full** (Restricted also works; Full avoids edge cases)
  → **Add** `[click]`.

---

## Run

```bash
node scripts/analytics/pull-all.mjs --days 28      # everything that's configured
# or individually:
node scripts/analytics/pull-upstash.mjs
node scripts/analytics/pull-ga4.mjs  --days 28
node scripts/analytics/pull-gsc.mjs  --days 28
node scripts/analytics/pull-public.mjs
```

Then tell me it's done — I'll pull, then run the analysis workflow over the real
data (findings → ranked action items → experiment backlog).

### Final `web/.env.local` additions

```
# Upstash (per-reference counters)
OMD_KV_REST_API_URL=
OMD_KV_REST_API_TOKEN=
# GA4 + GSC (service account JSON lives at scripts/analytics/.secrets/sa.json)
GA4_PROPERTY_ID=
GSC_SITE_URL=sc-domain:oh-my-design.kr
# optional
ANALYTICS_DAYS=28
```
