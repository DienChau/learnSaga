import LoginPage from "features/auth/pages/LoginPages";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "components/Layout";
import { NotFound, PirvateRoute } from "components/Common";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PirvateRoute />}>
        <Route path="/admin" element={<AdminLayout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
