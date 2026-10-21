import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
