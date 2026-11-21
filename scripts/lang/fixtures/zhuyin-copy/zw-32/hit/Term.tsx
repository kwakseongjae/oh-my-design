// ZW-32 hit: the MS 4.2.7 example term as JSX text and as a literal, inside italics
export function Term() {
  return (
    <p>
      <em>全球資訊網</em>
      <span style={{ fontStyle: 'italic' }}>{'全球資訊網'}</span>
    </p>
  );
}
