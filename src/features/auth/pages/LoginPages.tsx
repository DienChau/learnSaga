import { useAppDispatch, useAppSelector } from "app/hooks";
import { authActions, selectIsLoggedIn, selectIsLogging } from "../authSlice";
import { Button } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoginPage() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLoginClick = () => {
    //TODO: Get username, password from login form
    dispatch(
      authActions.login({
        username: "",
        password: "",
      }),
    );
  };

  const loggedIn = useAppSelector(selectIsLoggedIn);
  const logging = useAppSelector(selectIsLogging);

  // const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (loggedIn) {
      navigate("/admin/dashboard");
    }
  }, [loggedIn, navigate]);

  console.log({ loggedIn });
  return (
    <div className="p-3 max-w-lg mx-auto min-h-screen flex items-center justify-center flex-col my-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Student Management</h1>

      {/* <form onSubmit={() => {}} className="flex flex-col gap-4">
        <input
          onChange={() => {}}
          type="email"
          id="email"
          className="border p-3 rounded-lg"
          placeholder="email"
        />
        <input
          onChange={() => {}}
          type="password"
          id="password"
          className="border p-3 rounded-lg"
          placeholder="password"
        />
      </form> */}
      <Button
        onClick={handleLoginClick}
        className="flex gap-5 justify-center items-center w-full bg-slate-700 text-white  rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
      >
        {logging && <AiOutlineLoading3Quarters className="animate-spin" />}
        Fake Login
      </Button>
      <div className="text-center mt-3">This login feature will be integrate in the future!</div>
    </div>
  );
}
