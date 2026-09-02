---
name: omd-showcase
description: "Turn a rendered page (or several, side by side) into a scroll demo video — deterministic frame capture, ffmpeg H.264/GIF, labels per arm. Trigger: '시연 영상', '스크롤 영상 만들어', 'showcase', 'demo video', '비교 영상', 'record the page'."
argument-hint: "<render.html> [--compare a.html b.html c.html] [--labels 'A|B|C'] [--seconds 12] [--gif]"
user-invocable: true
---

# omd:showcase — 페이지에서 시연 영상까지 한 명령

엔진: `test-v2/tools/showcase.mjs` (설치본에서는 `omd showcase`). 실시간 녹화가 아니라 **프레임 캡처**다 —
스크롤 위치를 프레임마다 `ease(t)`로 놓고 2배율 스크린샷을 찍은 뒤 ffmpeg로 30fps H.264를 만든다.
같은 입력이면 같은 영상이 나오고, 페이지 리빌은 캡처 전에 한 번 끝내 둔다(시연은 구도·에셋·리듬을 보여
주는 것이지 리빌 타이밍을 재는 것이 아니다).

## 쓰는 법

```bash
node test-v2/tools/showcase.mjs <run>/render.html --out demo.mp4 --seconds 12 --gif --label "omd"
node test-v2/tools/showcase.mjs --compare a/render.html b/render.html c/render.html --labels "hallmark|ui-ux-pro-max|omd" --out compare.mp4
```

- 단일: mp4(+gif). 비교: arm마다 개별 캡처 후 `hstack` — 페이지 높이가 달라도 각자 0→끝으로 정규화돼 동기 스크롤이 된다.
- 기본 1440×900 @2x, 30fps, 시작·끝 1.2초 홀드. `--dpr 1`이면 가볍다.
- ffmpeg가 없으면 프레임 PNG만 남기고 안내한다(`omd:setup`이 감지한다).

## 콘텐츠 룰 (X·Threads 소재일 때)

- 페이지 하단의 비공식 고지가 프레임에 보여야 한다 — 이 도구는 고지를 만들지 않는다.
- 레퍼런스 브랜드를 태그·멘션하지 않는다. 봉인 벤치 수치를 영상·캡션에 넣지 않는다.
- 비교 영상의 조건(같은 브리프·같은 모델·같은 이미지 채널)을 캡션 첫 줄에 적는다.

## 산출

`showcase.mp4`(+`.gif`) — `trace.md`가 있는 런이면 그 아래에 `showcase:` 한 줄(프레임 수·초·명령)을 덧붙인다.
