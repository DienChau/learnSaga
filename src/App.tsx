import { NotFound, PirvateRoute } from "components/Common";
import { AdminLayout } from "components/Layout";
import LoginPage from "features/auth/pages/LoginPages";
import Dashboard from "features/dashboard";
import StudentFeature from "features/student";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PirvateRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="students" element={<StudentFeature />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
