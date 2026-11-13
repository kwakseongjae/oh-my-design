export function Card() {
  return (
    <section>
      <h2 className="text-2xl leading-tight">見出しの行間</h2>
      <p className="leading-relaxed">本文の行間は広めです。</p>
      <button className="leading-none">送信する</button>
      <p className="leading-tight">English-only caption text</p>
    </section>
  );
}
