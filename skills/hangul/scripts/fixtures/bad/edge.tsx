// The root <html> element is set in layout.tsx (this comment must not be flagged).
export default function Edge() {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <h2 className="text-base font-semibold tracking-tight">제1조 (목적)</h2>
        <p style={{ letterSpacing: -0.5 }}>본문 텍스트입니다</p>
      </body>
    </html>
  );
}
