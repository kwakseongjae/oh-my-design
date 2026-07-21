import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "../../..");
const skill = readFileSync(resolve(repoRoot, "skills/omd-apply/SKILL.md"), "utf8");

describe("omd:apply delivery contract", () => {
  it("keeps implementation ownership with the main agent", () => {
    expect(skill).toContain("본 에이전트가 실제 편집과 검증을 끝까지 소유");
    expect(skill).toContain("audit/advice 요청만 자문 결과 요약으로 종료할 수 있다");
    expect(skill).toContain("자문 완료를 구현 완료로 간주하지 않음");
  });

  it("defines recovery for unavailable and stale specialist roles", () => {
    expect(skill).toContain("런타임 역할 사용 가능");
    expect(skill).toContain("유효한 로컬 역할 파일 존재");
    expect(skill).toContain("역할과 유효한 역할 파일 모두 없음");
    expect(skill).toContain("역할을 실행했다고 표현하지 않음");
  });

  it("does not preserve the former dispatch-only dead end", () => {
    expect(skill).not.toContain("그 후 인라인 처리는 하지 않고");
    expect(skill).not.toContain("복합 작업을 인라인으로 처리 금지");
  });
});
