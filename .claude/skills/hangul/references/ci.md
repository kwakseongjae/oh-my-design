# /hangul in CI

Both checkers can print GitHub workflow commands, so each finding shows up as an inline annotation on the pull request:

```bash
node scripts/check.mjs --format=github <files-or-dirs>
node scripts/copy-check.mjs --format=github <files-or-dirs>
```

Each finding is one line, `::<level> file=<path>,line=<line>,title=<RULE-ID>::<message>`:
- BLOCK is `::error`;
- WARN is `::warning`;
- FYI is `::notice`.

After the findings, one plain line gives the same counts as the human summary. Paths are relative to the working directory, so run the checkers from the repository root.

`--format=github` cannot be combined with `--json`; that exits 2. Exit codes, `--strict`, `--context` and `--list` work as before.

## Workflow

Save this as `.github/workflows/hangul.yml`. Set `HANGUL` to where the skill is installed in your repository (`.claude/skills/hangul/scripts` is the Claude Code default). The scripts need Node.js 18 or later and nothing else.

```yaml
name: hangul
on: pull_request
permissions:
  contents: read

jobs:
  hangul:
    runs-on: ubuntu-latest
    env:
      HANGUL: .claude/skills/hangul/scripts
    steps:
      - uses: actions/checkout@v7
        with:
          ref: ${{ github.event.pull_request.head.sha }}
          fetch-depth: 0
      - uses: actions/setup-node@v7
        with:
          node-version: 24
      - name: Check Korean typography and copy in changed files
        shell: bash
        env:
          BASE_SHA: ${{ github.event.pull_request.base.sha }}
        run: |
          git diff --name-only --diff-filter=ACMR -z "$BASE_SHA...HEAD" > "$RUNNER_TEMP/hangul-files"
          mapfile -d '' -t files < "$RUNNER_TEMP/hangul-files"
          if ((${#files[@]} == 0)); then exit 0; fi
          status=0
          node "$HANGUL/check.mjs" --format=github "${files[@]}" || status=$?
          node "$HANGUL/copy-check.mjs" --format=github "${files[@]}" || status=$?
          exit "$status"
```

- Deleted files are skipped, and file names with spaces or newlines stay intact.
- Both checkers run even if the first one fails, so one run shows every annotation.
- The checkers read only the files you pass. `check.mjs` decides what is Korean from those files, so a changed CSS file is not checked against the Korean pages it styles unless they changed too. To check the whole project, pass `.` instead of the changed files.

## When to add `--strict`

By default only a BLOCK fails the job; WARN and FYI only annotate. Add `--strict` to both commands once a clean run of the repository has no WARN left and you want new ones to fail the pull request. On a codebase with existing WARNs, every pull request that touches an old file would fail on findings it did not cause, so leave it off until then and read the warnings in review.
