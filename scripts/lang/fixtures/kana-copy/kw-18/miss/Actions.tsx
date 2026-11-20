// KW-18 miss: the same sentence in a paragraph, and Ubie's Good label on the button
export function Actions() {
  return (
    <div>
      <p>お手数ですが、こちらからお問い合わせください。</p> {/* UB Do */}
      <button type="button">この内容で更新する</button> {/* UB-btn Good */}
    </div>
  );
}
