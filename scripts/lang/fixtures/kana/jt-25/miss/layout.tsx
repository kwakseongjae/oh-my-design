export default function RootLayout({ children, locale }) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
