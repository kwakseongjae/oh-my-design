# v4 Self-Test Loop — autonomous validation

**Date:** 2026-04-29
**Goal:** v4 풀구현이 *진짜로* 작동하는지 자동 검증 + 발견된 critical 이슈 자체 fix.
**Approach:** 4 persona × N iterations × audit/fix cycle. 토큰/시간 무시. 사용자에게 묻지 않음.

## 구조

```
v4-self-test/
├── README.md                       (이 파일)
├── fixtures/                       — 4 persona별 mock 프로젝트
│   ├── vibe-coder/                  (Next.js + Tailwind, mid-size)
│   ├── junior-designer/             (Figma URL ref + 부분 코드)
│   ├── founder/                     (empty + Stripe URL ref)
│   └── senior-dev/                  (Next.js + opinionated tooling)
├── scenarios/                       — 각 persona별 시나리오 walk-through
│   ├── V-water-app.md
│   ├── J-figma-import.md
│   ├── F-stripe-clone.md
│   └── S-prototype-cleanup.md
├── iterations/
│   ├── i1-audit/                    (1차 audit 결과)
│   ├── i1-fixes/                    (1차 fix 적용 기록)
│   ├── i2-audit/
│   └── ...
├── findings.md                      (누적 critical/major 이슈)
└── postmortem.md                    (최종 회고)
```

## 사이클

각 iteration:
1. **Unit test 강화** — `test/v4/*.test.ts` 로 각 모듈 검증 + 발견 버그 fix
2. **Audit subagent × 4 (parallel)** — 각 persona 입장에서 master/skill prompt + 코드 review, 시나리오 walk-through 시뮬레이션
3. **Critic subagent** — 4 audit 결과 종합, severity 분류
4. **Apply critical fixes** — 코드 수정 + 재빌드 + re-test
5. **Re-audit** (loop) — N=3 또는 critical=0까지

## 종료 조건

- N=3 도달 OR
- critical 이슈 0 + major 이슈 < 3 OR
- 자가 진단 결과 "shippable for first-time user demo"
</content>
</invoke>
