# Paper Shaders (vendored)

`@paper-design/shaders` **0.0.82**, the files the blog field needs and nothing else: `shader-mount`, `shader-sizing`, `shader-utils`, `vertex-shader`, `types` and `shaders/dithering`, each `.js` with its `.d.ts`, copied unmodified from the npm package's `dist/` (`npm pack @paper-design/shaders@0.0.82`). Apache License 2.0: `LICENSE` and `NOTICE` are the package's own.

Vendored rather than installed so the blog home and `scripts/blog-covers` draw from one pinned copy with no CDN. Used by `src/components/blog/blog-field.tsx` and `scripts/blog-covers/covers/_home.mjs` (web/public/design.md, Asset: the blog field). To update, replace these files from a newer package and re-render the covers.
