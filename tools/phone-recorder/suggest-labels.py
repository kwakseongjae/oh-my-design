#!/usr/bin/env python3
"""Propose a screen type and patterns for each frame of a walk, from the element list recorded with it.

    suggest-labels.py <walk-folder> [--scaffold <sheet.json>]

Reads frame-NNN.elements.json (types, labels, frames) and flow.json. Prints one line per frame and writes
labels.suggested.json into the walk. --scaffold also writes a sheet.json skeleton for make-sheet.py, with one group
per stretch of the walk and empty notes for a person to fill in.

These are suggestions for whoever curates the sheet, not labels to publish as they are: a rule sees what the app
exposes in its accessibility tree, and misses what it does not (a floating bar drawn without labels, a web view).
Each pattern below says in a comment what it looks for. No model, no network.
"""
import json, pathlib, re, sys

taxonomy = json.loads((pathlib.Path(__file__).parent / "taxonomy.json").read_text(encoding="utf-8"))
fold = {kind: {w: e["ko"] for e in taxonomy[kind] for w in [e["ko"], *e.get("also", [])]} for kind in ("screens", "patterns")}
walk = pathlib.Path(sys.argv[1]).expanduser()
scaffold = sys.argv[sys.argv.index("--scaffold") + 1] if "--scaffold" in sys.argv else None
W, H = 402, 874   # points; frames are recorded with their own size, this is only the fallback

TYPE_WORDS = [  # the first match in the top bar or the screen's own headings wins
    ("로그인", r"로그인|Log ?in|Sign ?in"), ("회원가입", r"회원가입|가입하기|Sign ?up"), ("장바구니", r"장바구니|Cart"),
    ("검색 결과", r"관련 .*상품|검색 ?결과|개의 결과"), ("검색", r"검색어를 입력|최근 검색어|인기 검색어"), ("알림", r"^알림$|Notifications"),
    ("마이", r"^마이$|마이페이지|나의 |내 정보|My ?page"), ("좋아요", r"^좋아요$|찜|위시"), ("설정", r"^설정$|Settings"),
    ("주문/결제", r"주문서|결제 ?수단|결제하기"), ("채팅", r"^채팅$|메시지"), ("카테고리", r"^카테고리$"), ("랭킹", r"^랭킹$|랭킹 1위"),
    ("상세", r"구매하기|장바구니 담기|바로 ?구매"), ("권한 안내", r"접근 권한"), ("온보딩", r"시작하기|건너뛰기"),
]


def patterns_of(els, alert, height):
    els = [e for e in els if e["y"] + e["h"] > 0 and e["y"] < height and not (e["h"] > height * 0.8 and e["w"] > 300)]
    labels = [e.get("label", "") for e in els]
    text = "\n".join(labels)
    kinds = [e["type"] for e in els]
    out = []
    low = [e for e in els if e["type"] in ("button", "tab") and e.get("label") and e["y"] > height * 0.88]
    if "tabBar" in kinds or kinds.count("tab") >= 3 or any(len([o for o in low if abs(o["y"] - e["y"]) < 12]) >= 3 for e in low):
        out.append("하단 탭 바")                                   # three or more labelled controls sharing the bottom row
    if any(k in ("searchField",) for k in kinds) or any(e.get("placeholder") and "검색" in e["placeholder"] for e in els) or re.search(r"검색어를 입력", text):
        out.append("검색창")
    if "keyboard" in kinds or sum(1 for l in labels if re.fullmatch(r"[ㄱ-ㅎㅏ-ㅣa-z]", l)) >= 8:
        out.append("키보드 표시")                                   # the keyboard's own keys are in the tree
    if alert and alert.get("alert"):
        out.append("시스템 알림")
    if "sheet" in kinds or any(e["type"] in ("other", "cell") and e["y"] > height * 0.4 and e["h"] > height * 0.25 and e["w"] > 380 and re.search(r"닫기", e.get("label", "")) for e in els):
        out.append("하단 시트")
    if re.search(r"\b\d+ ?/ ?\d+\b", text):
        out.append("캐러셀(쪽수 표시)")                              # "7 / 35"
    if re.search(r"\b\d{1,2}:\d{2}:\d{2}\b", text):
        out.append("카운트다운")
    prices = sum(1 for l in labels if re.search(r"\d[\d,]*원", l))
    if prices >= 3:
        out.append("상품 카드 그리드" if sum(1 for l in labels if re.search(r"\d+ ?%", l)) >= 2 else "가격 목록")
    rows = {}
    for e in els:
        if e["type"] == "button" and e.get("label") and 20 <= e["h"] <= 44 and height * 0.12 < e["y"] < height * 0.9:
            rows.setdefault(round(e["y"] / 10), []).append(e)
    if any(len(r) >= 4 for r in rows.values()):
        out.append("필터 칩")                                       # four or more short buttons on one line
    if re.search(r"없습니다|없어요|비어 ?있", text):
        out.append("빈 상태")
    if "secureTextField" in kinds:
        out.append("비밀번호 입력")
    if kinds.count("switch") >= 2:
        out.append("토글 목록")
    if sum(1 for l in labels if re.search(r"동의", l)) >= 2:
        out.append("동의 체크")
    if re.search(r"\b[0-5]\.\d\b", text) and re.search(r"후기|리뷰|\(\d+\)", text):
        out.append("평점·후기 수")
    if kinds.count("cell") >= 6 and prices < 3:
        out.append("목록 행")
    if any(e["type"] == "button" and e.get("label") and e["y"] > height * 0.86 and e["w"] > 200 for e in els):
        out.append("하단 고정 버튼")                                 # one wide button pinned at the bottom
    return out


BOTTOM_TABS = {"홈": "홈", "마이": "마이", "MY": "마이", "나의 당근": "마이", "좋아요": "좋아요", "찜": "좋아요", "카테고리": "카테고리", "채팅": "채팅",
               "검색": "검색", "동네생활": "커뮤니티", "커뮤니티": "커뮤니티", "스냅": "피드", "피드": "피드", "전체": "전체 메뉴", "메뉴": "전체 메뉴"}


def on_screen(e, height):
    return e["y"] + e["h"] > 0 and e["y"] < height


def type_of(els, height):
    """The screen's own title first, then what it is built from, then the selected bottom tab.

    A button in the top bar is a shortcut to somewhere else (a cart icon is on every screen), so buttons never count
    as a title. A web view announces its page title as one tall element; that is the best title there is.
    """
    els = [e for e in els if on_screen(e, height)]
    kinds = [e["type"] for e in els]
    titles = [e["label"] for e in els if e["type"] == "other" and e["h"] > height * 0.8 and e["w"] > 300 and 0 < len(e["label"]) < 60 and e["label"] != "도구 막대"]
    titles += [e["label"] for e in els if e["type"] in ("text", "other", "navigationBar") and e["y"] < 125 and 8 < e["h"] <= 60 and e["x"] < 250 and e.get("label")]
    for name, rx in TYPE_WORDS:
        if any(re.search(rx, t, re.M) for t in titles):
            return name
    if "secureTextField" in kinds:
        return "로그인"
    if any(e["type"] in ("textField", "searchField") and e["y"] < 125 for e in els) and any(re.search(r"다음 키보드|받아쓰기|^space$|간격", e.get("label", "")) for e in els):
        return "검색"
    body = "\n".join(e.get("label", "") for e in els if e["type"] == "button" and e["y"] > height * 0.8)
    if re.search(r"구매하기|장바구니 담기|바로 ?구매", body):
        return "상세"
    bar = [e for e in els if e["type"] in ("button", "tab") and e["y"] > height * 0.86 and e.get("selected")]
    if bar:
        return BOTTOM_TABS.get(bar[0]["label"], bar[0]["label"][:8])
    return "화면"


flow = json.loads((walk / "flow.json").read_text(encoding="utf-8"))
suggested = []
for step in flow["steps"]:
    if not step.get("frame"):
        continue
    f = walk / f"{step['frame']}.elements.json"
    data = json.loads(f.read_text(encoding="utf-8")) if f.exists() else {}
    els = data.get("elements", [])
    entry = {"frame": step["frame"], "note": step.get("note", ""), "type": fold["screens"].get(type_of(els, H), "화면"),
             "patterns": list(dict.fromkeys(fold["patterns"].get(p, p) for p in patterns_of(els, data.get("alert"), H))),
             "elements": len(els), "stable": step.get("stable")}
    suggested.append(entry)
    print(f"{entry['frame']}  {entry['type']:8}  {', '.join(entry['patterns']) or '—':60}  {entry['note'][:36]}{'' if entry['stable'] in (True, None) else '  [still moving]'}")
reached = {s["type"] for s in suggested}
core = [e["ko"] for e in taxonomy["screens"] if e.get("core")]
print("core screens reached: " + ", ".join(c for c in core if c in reached) + "  |  not yet: " + (", ".join(c for c in core if c not in reached) or "none"))
(walk / "labels.suggested.json").write_text(json.dumps(suggested, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

if scaffold:
    key = "w"
    frames = [{"walk": key, "frame": s["frame"], "title": s["note"] or s["type"], "type": s["type"], "patterns": s["patterns"], "note": ""} for s in suggested]
    sheet = {"title": f"{walk.name} — 화면과 흐름", "app": "", "version": "", "device": flow.get("device", ""), "captured": flow.get("started", "")[:10],
             "walks": {key: str(walk)}, "summary": [], "groups": [{"title": "전체", "note": "", "frames": frames}], "clips": [], "findings": [], "method": []}
    pathlib.Path(scaffold).expanduser().write_text(json.dumps(sheet, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"scaffold → {scaffold}")
