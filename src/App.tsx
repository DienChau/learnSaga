import { Button } from "antd";
import { useAppDispatch } from "app/hooks";
import { NotFound, PirvateRoute } from "components/Common";
import { AdminLayout } from "components/Layout";
import { authActions } from "features/auth/authSlice";
import LoginPage from "features/auth/pages/LoginPages";
import { Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();

  return (
    <>
      <Button type="default" onClick={() => dispatch(authActions.logout())}>
        Logout
      </Button>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PirvateRoute />}>
          <Route path="/admin" element={<AdminLayout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
