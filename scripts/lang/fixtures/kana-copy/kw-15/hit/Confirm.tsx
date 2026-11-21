// KW-15 hit: Ubie's Bad label (UB-btn 「OK」) beside its Good one
export function Confirm() {
  return (
    <div>
      <Button>OK</Button>
      <Button>この内容で更新する</Button> {/* UB-btn Good */}
    </div>
  );
}
