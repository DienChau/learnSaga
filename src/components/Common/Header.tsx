import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { authActions, selectIsLoggedIn } from "features/auth/authSlice";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="text-sm font-bold sm:text-lg flex flex-wrap">
            <span className="text-slate-500">Student </span>
            <span className="text-slate-700">Management</span>
          </h1>
        </Link>
        <form onSubmit={() => {}} className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-48"
            value=""
            onChange={() => {}}
          />
          <button type="button">
            <FaSearch className="text-slate-600" /> {""}
          </button>
        </form>
        <div className="flex gap-4 items-center">
          <Link to="/admin">
            <span className="hidden sm:inline text-slate-700 hover:underline">Home</span>
          </Link>
          <Link to="/about">
            <span className="hidden sm:inline text-slate-700 hover:underline">About</span>
          </Link>
          {isLoggedIn ? (
            <Button
              type="default"
              className="bg-blue-400 text-white"
              onClick={() => dispatch(authActions.logout())}
            >
              Logout
            </Button>
          ) : (
            <span className=" text-slate-700 hover:underline">Sign in</span>
          )}
        </div>
      </div>
    </header>
  );
}
