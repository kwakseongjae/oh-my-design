/* Landing copy (ko), ported from the approved concept-A prototype
 * (docs/research/2026-10-13-rebrand/a-landing/i18n*.js, rounds 1-5c). Written natively per
 * locale, not converted. Numbers are {placeholders} filled from generated data at build time.
 * Markup allowed in strings: <b>, <code>, <span class="nb"> and &nbsp; &lt; &gt; (see rich.tsx). */
import type { BrandCopy } from "./en";

export const KO: BrandCopy = {
  "htmlLang": "ko",
  "title": "oh-my-design: 한·중·일 화면을 위한 진짜 디자인 시스템",
  "desc": "실제 회사의 DESIGN.md {total}개. 그중 {cjk}개가 한국·대만·일본·중국 회사예요. 검증된 값마다 어느 화면에서 읽었는지가 붙어 있어요.",
  "nav": {
    "archive": "아카이브",
    "skills": "스킬",
    "docs": "문서",
    "github": "GitHub",
    "lang": "언어",
    "theme": "테마 바꾸기",
    "skip": "본문으로 건너뛰기"
  },
  "hero": {
    "h1": "<span class=\"nb\">한·중·일 화면을 위한</span> <span class=\"nb\">진짜 디자인 시스템</span>",
    "lede": "실제 회사의 DESIGN.md {total}개를 코딩 에이전트에 바로 건네세요. 검증된 값에는 모두 출처가 적혀 있어요.",
    "searchLabel": "레퍼런스 검색",
    "searchPh": "토스뱅크, 교보문고, 誠品, トヨタ…",
    "searchEmpty": "그런 이름의 레퍼런스가 없어요. 한글 이름이나 영문 이름으로 찾아보세요.",
    "searchHint": "{n}개 찾음",
    "browse": "아카이브 둘러보기",
    "how": "어떻게 쓰나요"
  },
  "status": {
    "v": "검증",
    "p": "부분",
    "l": "이전"
  },
  "kb": {
    "label": "키보드에 새긴 회사들. 키를 누르면 그 회사의 DESIGN.md가 열려요."
  },
  "gen": {
    "h2": "DESIGN.md에서 화면까지의 여정",
    "intro": "회사를 고르면 같은 화면이 그 회사 파일만으로 다시 그려져요.",
    "replay": "다시 보기",
    "m": {
      "css": "계산된 스타일",
      "both": "계산된 스타일 + 공식 문서",
      "doc": "공식 문서",
      "live": "라이브 추출"
    },
    "asSpec": "명시된 글꼴: {f}.",
    "absent": "출처에 없음",
    "sample": {
      "label": "이 토큰으로 만든 샘플 화면",
      "title": "이번 달 지출",
      "body": "돈이 어디에 쓰였는지 한눈에 봐요.",
      "card": "최근 내역",
      "rows": [
        "장보기",
        "교통"
      ],
      "cta": "자세히 보기",
      "states": "상태"
    },
    "r5": {
      "pick": "회사",
      "sum": "값 {n}개 · 모두 출처 있음",
      "hint": "요소에 마우스를 올리거나 탭하면 값의 출처가 보여요.",
      "missing": "출처에 없음:",
      "noFace": "명시된 글꼴이 없어 페이지 글꼴로 보여 줘요.",
      "st": {
        "pressed": "누름",
        "hover": "호버",
        "focus": "포커스"
      },
      "stNone": "출처에 상태 값 없음",
      "dflt": "출처에 없음 · 기본값",
      "subF": "{f}: 여기서는 불러오지 않아 페이지 글꼴로 보여 줘요. 브랜드 글꼴이 아니고, 실측으로 고른 대체 글꼴도 아니에요.",
      "disp": "디스플레이 글꼴: {d}.",
      "otherDomain": "버튼과 다른 출처 도메인"
    }
  },
  "use": {
    "h2": "omd CLI로 시작하기",
    "p": "명령어 하나로 스킬, 서브에이전트, 레퍼런스 카탈로그가 Claude Code·Codex·OpenCode에 설치돼요. 아래는 빈 프로젝트에서 실제로 출력된 내용이에요.",
    "panel": "터미널 출력",
    "note": "oh-my-design-cli {ver}을 {date}에 빈 프로젝트에서 실행한 실제 출력이에요.",
    "gap": "{n}줄 생략",
    "skills": [
      [
        "omd-init",
        "가장 가까운 실제 기업 레퍼런스로 DESIGN.md를 세팅해요."
      ],
      [
        "omd-apply",
        "에이전트가 UI를 고칠 때마다 DESIGN.md를 적용해요."
      ],
      [
        "omd-feel",
        "수치로 정리한 인터페이스 디테일 규칙 113개로 다듬거나 점검해요."
      ],
      [
        "omd-cjk-type-shader",
        "한중일 큰 제목을 한지에 번진 먹처럼 그려요."
      ]
    ],
    "all": "스킬 {skills}개 모두 보기 (GitHub)",
    "copy": "복사",
    "copied": "복사했어요",
    "failed": "복사하지 못했어요"
  },
  "faq": {
    "h2": "자주 묻는 질문",
    "items": [
      [
        "DESIGN.md가 뭔가요?",
        "제품의 디자인 시스템(색, 글꼴, 모서리, 컴포넌트, 말투)을 적은 마크다운 파일이에요. 코딩 에이전트가 UI를 만들기 전에 읽어요."
      ],
      [
        "회사가 직접 만든 공식 파일인가요?",
        "아니에요. 공개된 제품 화면과 공식 문서를 근거로 OmD가 재구성한 파일이고, 각 파일의 Governance 섹션에도 그렇게 적혀 있어요. 디자인은 각 회사의 것이고, 파일은 참고용이에요."
      ],
      [
        "CLI가 꼭 있어야 하나요?",
        "아니요. 어떤 레퍼런스든 복사하거나 내려받을 수 있고, <code>oh-my-design.kr/&lt;id&gt;/design.md</code>에서 원문을 바로 받을 수도 있어요. CLI는 Claude Code, Codex, OpenCode, Cursor 안에서 이 파일을 적용하는 스킬을 더해 줘요."
      ],
      [
        "파일은 얼마나 최신인가요?",
        "검증된 파일마다 확인한 날짜와 다음 재확인 날짜가 적혀 있어요. 예를 들어 토스는 {tossChk}에 확인했고 {tossNext}에 다시 확인해요."
      ],
      [
        "비용이 들거나 API 키가 필요한가요?",
        "CLI는 MIT 라이선스이고, 핵심 워크플로에는 API 키가 필요 없어요. 추론은 지금 쓰는 코딩 에이전트 안에서 이뤄져요."
      ]
    ]
  },
  "foot": {
    "tag": "한·중·일 화면을 위한 DESIGN.md 아카이브와 프론트엔드 스킬.",
    "legal": "MIT 라이선스. 레퍼런스의 디자인은 각 회사의 것이며, 학습과 참고를 위해 정리했어요.",
    "marks": "로고는 각 소유자의 상표이며, 참고용으로 표시했어요."
  }
};
