// KW-17 miss: SmartHR's OK labels on a button; the genitive form in a heading is not checked
export function Actions() {
  return (
    <section>
      <h2>権限の追加、申請の取り消し</h2> {/* SH-app NG, as a heading */}
      <button type="button">権限を追加、申請を取り消す</button> {/* SH-app OK */}
    </section>
  );
}
