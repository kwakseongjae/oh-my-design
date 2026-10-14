# growth-data

Data-only branch for oh-my-design's **public** growth metrics. It shares no history with `main` and is never merged.

- `metrics-public.jsonl` holds one JSON object per snapshot (`schema: "public-1"`): GitHub stars/forks/watchers/open issues, npm downloads, and skills.sh installs. All of these are already public.
- **Private stats never land here.** GitHub traffic, clones, referrers and DAU/WAU/MAU go to a separate private repo, and only when the owner has configured `METRICS_REPO` + `METRICS_REPO_TOKEN`. See `.github/workflows/growth-snapshot.yml` on `main`.
- Rows are appended by `scripts/growth/snapshot.mjs --public-only` / `GROWTH_PUBLIC_FILE`, run weekly (Mondays) and on demand by the workflow.
- **Append-only.** Never rewrite or reorder lines, and never force-push. Correct a wrong line with a later line, not by editing history.
- A source that failed is `null`, and a scrubbed note goes under `errors`. Secrets are never written.

Read it:

```sh
git fetch origin growth-data
git show origin/growth-data:metrics-public.jsonl | tail -n 1 | jq .
```

Seeded 2026-10-14 with public fields of the snapshots from 2026-09-29, 2026-10-13 and 2026-10-14.
