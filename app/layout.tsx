// 引入全局樣式
import '@/app/ui/global.css';

// 引入主要的字體
import { inter } from '@/app/ui/fonts';

// root layout必須存在
// 在這邊加入的compoents會共享所有page

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased tailwindcss的class 使字體看起來更滑順 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
