import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import HomePage from "../pages/public/HomePage";
import AboutPage from "../pages/public/AboutPage";
import PlansPage from "../pages/public/PlansPage";
import LoginPage from "../pages/member/LoginPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/plans"
          element={<PlansPage />}
        />

        <Route
          path="/member/login"
          element={<LoginPage />}
        />
      </Route>

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}
