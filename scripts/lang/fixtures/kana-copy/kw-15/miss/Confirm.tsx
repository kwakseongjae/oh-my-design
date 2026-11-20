// KW-15 miss: OK in a paragraph is not a button; the button is Ubie's Good label
export function Confirm() {
  return (
    <div>
      <p>OK</p>
      <Button>この内容で更新する</Button> {/* UB-btn Good */}
    </div>
  );
}
