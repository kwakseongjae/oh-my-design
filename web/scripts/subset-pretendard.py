#!/usr/bin/env python3
"""Build the self-hosted Pretendard subset used by the Korean landing (/ko).

Source: the `pretendard` npm package, v1.3.9, file
`dist/web/variable/woff2/PretendardVariable.woff2` (OFL-1.1; the licence is
committed next to the output as OFL.txt).

The full variable font is ~2.0 MB. next/font/local takes one file per
weight/style and has no unicode-range splitting, so instead of the CDN's
dynamic subset we ship one static subset:

  * the 2,350 Hangul syllables of KS X 1001 (the set every Korean font and
    input method treats as "common"; it covers ordinary prose, including all
    copy on the landing),
  * Hangul compatibility jamo, Basic Latin, Latin-1 punctuation, and the
    general punctuation / arrows the copy uses.

Rare syllables outside KS X 1001 (for example in a brand name typed into the
search box) fall back to the platform's Korean face, which is what the CSS
fallback stack names. The weight axis is then narrowed to 400–800 (the
weights the landing uses), which takes the file from ~456 KB to ~324 KB.

Usage (needs fonttools + brotli: `python3 -m venv v && v/bin/pip install fonttools brotli`,
then run with v/bin first on PATH):
  python3 web/scripts/subset-pretendard.py <path/to/PretendardVariable.woff2>
"""

import subprocess
import sys
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "src" / "fonts" / "pretendard" / "PretendardVariable-ksx1001.woff2"


def ksx1001_hangul() -> str:
    chars = []
    for lead in range(0xB0, 0xC9):
        for trail in range(0xA1, 0xFF):
            try:
                chars.append(bytes([lead, trail]).decode("euc-kr"))
            except UnicodeDecodeError:
                pass
    return "".join(chars)


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    src = sys.argv[1]
    hangul = ksx1001_hangul()
    assert len(hangul) == 2350, len(hangul)
    unicodes = ",".join(
        [
            "U+0020-007E",  # Basic Latin
            "U+00A0-00BF",  # Latin-1 punctuation and signs (· etc.)
            "U+00D7",  # ×
            "U+2010-2027",  # dashes, quotes, bullets, ellipsis
            "U+2030-203A",
            "U+2190-2193",  # arrows
            "U+3000-303F",  # CJK punctuation
            "U+3131-318E",  # Hangul compatibility jamo
        ]
    )
    OUT.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        [
            "pyftsubset",
            src,
            f"--unicodes={unicodes}",
            f"--text={hangul}",
            "--layout-features=*",
            "--flavor=woff2",
            f"--output-file={OUT}",
        ],
        check=True,
    )
    subprocess.run(
        ["fonttools", "varLib.instancer", str(OUT), "wght=400:800", "-o", str(OUT)],
        check=True,
    )
    print(f"wrote {OUT} ({OUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
