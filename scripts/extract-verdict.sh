#!/bin/zsh
# 검토 판정문에서 결함 서술부만 잘라낸다.
#
# 검토자는 첫 결함 헤더를 최소 네 가지로 쓴다 — `### 1. `, `**1. `, `**1 `(점 없음),
# `### 결함 1`. 웨이브 42에서 `^\*\*1\. `만 보다가 loom의 `**1 A1**`을 놓쳐 판정문이
# 통째로 빠진 개정 프롬프트를 보냈다(에이전트가 스스로 원본 대조를 해서 결과적으로는
# 맞췄지만, 그건 운이다).
#
# usage: extract-verdict.sh <review-output-file>
set -u
f=$1
[[ -f $f ]] || { print -u2 "no such file: $f"; exit 1 }

start=$(grep -nE '^(#{2,4} )?(결함 )?\*{0,2}1[. ]' "$f" | head -1 | cut -d: -f1)
if [[ -z $start ]]; then
  # 결함 헤더가 없으면 판정 줄 앞의 요약부부터 준다
  start=$(grep -nE '^#{1,4} .*(FAIL|PASS)|FAIL [0-9]' "$f" | head -1 | cut -d: -f1)
fi
[[ -z $start ]] && { print -u2 "결함 헤더를 못 찾았다: $f"; exit 2 }
tail -n +$start "$f"
