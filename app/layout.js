import "./globals.css";

export const metadata = {
  title: "تبدیل دلار ⇄ ریال",
  description: "یک پروژه ساده برای تبدیل ارز با Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}