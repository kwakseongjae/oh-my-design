# Public DESIGN.md Core v2 schemas

The canonical JSON Schemas live in `spec/schema/`. The production website
publishes exact-byte mirrors from `web/public/schema/` at:

- `https://oh-my-design.kr/schema/design-md-core-manifest-v2.schema.json`
- `https://oh-my-design.kr/schema/design-system-graph-v2.schema.json`
- `https://oh-my-design.kr/schema/design-system-provenance-v2.schema.json`
- `https://oh-my-design.kr/schema/design-system-coverage-v2.schema.json`
- `https://oh-my-design.kr/schema/design-md-core-adoption-review-v2.schema.json`
- `https://oh-my-design.kr/schema/design-md-core-adoption-receipt-v2.schema.json`
- `https://oh-my-design.kr/schema/design-md-core-project-checkpoint-v2.schema.json`

Before release, run the focused contract test to verify inventory, mirror bytes,
and `$id` values:

```sh
npx vitest run test/unit/scripts/check-public-core-schemas.test.mjs
```

After deployment, verify HTTP 200, JSON content type, no redirects, and exact
deployed bytes:

```sh
npm run check:public-core-schemas
```

For a local static-serving check, point the command at the static host while
keeping `web/public/schema` as the expected-byte authority:

```sh
npm run check:public-core-schemas -- --base-url http://127.0.0.1:8000
```
