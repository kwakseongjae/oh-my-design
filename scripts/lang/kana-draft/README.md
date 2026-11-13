# kana draft: generator and check

`docs/drafts/kana/references/rules.md` is generated, and the draft is checked against the rule files it came from.
Both read the worker data in `~/.omd-workers/kana` (or `KANA_DATA`), which is not in the repository.

    python3 scripts/lang/kana-draft/build_rules.py docs/drafts/kana/references/rules.md scripts/lang/kana-draft/rules_header.md scripts/lang/kana-draft/rules_footer.md
    python3 scripts/lang/kana-draft/check_kana_draft.py docs/drafts/kana

The check exits 1 when a rule id, a quoted phrase, a run of kana or kanji, or a hedge word in SKILL.md is not in
the checked rule files (`research-*/rules.v2.md`) or the measurement. Passing means the draft says nothing the rule
files do not; it does not mean a native reader has agreed with the rule files.
