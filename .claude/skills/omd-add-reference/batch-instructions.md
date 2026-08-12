# Reference batch authoring gate

Status: `CORE_V2_CATALOG_WRITE_BLOCKED`.

Do not launch reference-writing workers and do not modify catalog files. The
historical batch instructions depended on legacy frontmatter and numbered
sections, so they are intentionally unavailable during the Core v2 catalog
cutover. Research candidates may be reported in chat only. Resume only through
the graph-backed reference writer and its dropped-zero migration tests.
