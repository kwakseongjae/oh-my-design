# Restoring the GA4 + Search Console pulls (October 2026)

**What broke.** The GA4 tag (`G-5XCHN3NJXC`) still collects on production. Only the
reporting pull died: the Google Cloud project that owned the service account in
`scripts/analytics/.secrets/sa.json` was deleted, so every call returns
`403 CONSUMER_INVALID`. The data in GA4 is intact. You need a new project, a new
service account and a new key, and that service account needs access granted again.

**Code status (checked 2026-10-14).** No code changes are needed. `_google-auth.mjs`
signs its own JWT, so there is no client library to upgrade. The endpoints are current
according to Google's live discovery documents (revision 2026-10-12):

| Script | Endpoint | Scope |
| --- | --- | --- |
| `pull-ga4.mjs`, `pull-ga4-modes.mjs`, `pull-curation.mjs` | `analyticsdata.googleapis.com/v1beta/properties/{id}:runReport` | `analytics.readonly` |
| `pull-gsc.mjs` | `searchconsole.googleapis.com/webmasters/v3/sites/{site}/searchAnalytics/query` | `webmasters.readonly` |
| `setup-ga4.mjs`, `prune-ga4-keyevents.mjs`, `annotate-ga4.mjs` (optional, write) | `analyticsadmin.googleapis.com` v1beta / v1alpha | `analytics.edit` |

Values used below: GA4 property ID **533041908** and Search Console property
**`sc-domain:oh-my-design.kr`**. Both are already in `web/.env.local`
(`GA4_PROPERTY_ID`, `GSC_SITE_URL`).

**Owner only** = needs your Google login. The rest is shell, which an agent can run once
the key file is in place.

---

### 1. Create a GCP project (owner only)
<https://console.cloud.google.com/projectcreate>. Name it `omd-analytics-2026`, then
**Create**. Make sure it is selected in the top bar.

### 2. Enable the APIs (owner only)
In **APIs & Services → Library**, open each of these and click **Enable**:
- **Google Analytics Data API** (`analyticsdata.googleapis.com`)
- **Google Search Console API** (`searchconsole.googleapis.com`)
- Optional: **Google Analytics Admin API** (`analyticsadmin.googleapis.com`). Only the
  `setup-ga4` / `prune-ga4-keyevents` / `annotate-ga4` scripts need it, and they also
  need the Editor role in step 5.

### 3. Create the service account (owner only)
**IAM & Admin → Service Accounts → + Create service account**. Name it
`omd-analytics-reader`, then **Create and continue**. Leave project roles empty,
click **Continue**, then **Done**. Access is granted per property in steps 5 and 6,
not on the project.

### 4. Create a JSON key and put it in place (owner: download; shell: move)
Open the service account, go to **Keys → Add key → Create new key → JSON → Create**,
then move the file:

```bash
mv ~/Downloads/omd-analytics-2026-*.json \
   /Users/kwakseongjae/Desktop/projects/oh-my-design/scripts/analytics/.secrets/sa.json
chmod 600 /Users/kwakseongjae/Desktop/projects/oh-my-design/scripts/analytics/.secrets/sa.json
# Print only the service-account email for steps 5 and 6:
node -e 'console.log(require("/Users/kwakseongjae/Desktop/projects/oh-my-design/scripts/analytics/.secrets/sa.json").client_email)'
```

This overwrites the dead key. `scripts/analytics/.secrets/` is gitignored, so never
copy the key anywhere else. If key creation is refused with
`iam.disableServiceAccountKeyCreation`, an organization policy is blocking it. Create
the project under "No organization", or ask the org admin to grant an exception.

### 5. Grant Viewer on the GA4 property (owner only)
<https://analytics.google.com> → **Admin** → property **533041908** →
**Property access management** → **+ → Add users**. Paste the email from step 4 and
untick *Notify new users by email*. Choose role **Viewer** (or **Editor** if you will
run the optional Admin API scripts), then click **Add**.
While you are there, remove the old service account from the deleted project. It
shows as an `…iam.gserviceaccount.com` address that is not the new one.

### 6. Grant access in Search Console (owner only, must be a verified owner)
<https://search.google.com/search-console> → property **`sc-domain:oh-my-design.kr`** →
**Settings → Users and permissions → Add user**. Paste the same email and choose
permission **Restricted**, which is read-only and is Search Console's Viewer level.
Click **Add**. Remove the old service account here too.

### 7. Verify (shell)
```bash
cd /Users/kwakseongjae/Desktop/projects/oh-my-design
node scripts/analytics/pull-all.mjs --days 28
```
Expected: `✓ ga4` and `✓ gsc` in the summary, with raw output in
`data/analytics/raw/` (gitignored). Common failures:
- `403 … has not been used in project … or it is disabled`: step 2 was skipped, or
  the API was enabled in another project. Wait 2–5 minutes after enabling, then retry.
- `403 User does not have sufficient permissions for this property`: step 5 is
  missing, or was done on a different property.
- `403 User does not have sufficient permission for site`: step 6 is missing, or the
  property string is not exactly `sc-domain:oh-my-design.kr`.
- `400 Field … is not a valid dimension`: Google renamed a dimension or metric. Look up
  the new name at
  `https://analyticsdata.googleapis.com/v1beta/properties/533041908/metadata` with the
  same token, then fix it in `pull-ga4.mjs`.

### Optional: run it in CI too
To pull GA4 from GitHub Actions later, store the key JSON as the repository secret
`GOOGLE_SA_KEY_JSON`. `_google-auth.mjs` already reads that variable before it looks
for the file. The repo is public, so write the output to a private place only (see
`.github/workflows/growth-snapshot.yml`), never to a public branch, log or artifact.
