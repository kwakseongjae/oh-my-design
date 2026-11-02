import localFont from "next/font/local";

const pretendard = localFont({ src: "./fonts/PretendardVariable.woff2", weight: "45 920", display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
