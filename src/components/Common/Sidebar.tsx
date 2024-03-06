import { MdDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  return (
    <div className="flex flex-col">
      <NavLink
        to="/admin/dashboard"
        className={({ isActive, isPending }) =>
          isPending ? "bg-pink-300" : isActive ? "bg-slate-400 text-white" : ""
        }
      >
        <div className="flex gap-2 items-center p-2 hover:bg-slate-400 hover:text-white cursor-pointer transition-all">
          <span>
            <MdDashboard />
          </span>
          <span>Dashboard</span>
        </div>
      </NavLink>
      <NavLink
        to="/admin/students"
        className={({ isActive, isPending }) =>
          isPending ? "bg-pink-300" : isActive ? "bg-slate-400 text-white" : ""
        }
      >
        <div className="flex gap-2 items-center p-2 hover:bg-slate-400 hover:text-white cursor-pointer transition-all">
          <span>
            <HiUserGroup />
          </span>
          <span>User</span>
        </div>
      </NavLink>
    </div>
  );
}
