import { Header, Sidebar } from "components/Common";
import { Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <div>
      <Header />
      <div className="flex border-t-2 min-h-screen">
        <div className="flex-1 max-w-[200px] border-r-2">
          <Sidebar />
        </div>
        <main className="flex-[3] bg-pink-100 p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
