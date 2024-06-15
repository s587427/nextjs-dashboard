import SideNav from '@/app/ui/dashboard/sidenav';

// 如目錄有/page預設會將page放在layout的children
// 使用layout的好處是當page compoents update layout 不會re-render 稱為partial rendering
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
