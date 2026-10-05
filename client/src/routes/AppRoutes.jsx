import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import PublicLayout from "../layouts/PublicLayout";
import HomePage from "../pages/public/HomePage";
import AboutPage from "../pages/public/AboutPage";
import PlansPage from "../pages/public/PlansPage";
import LoginPage from "../pages/member/LoginPage";

function ScrollToTop() {
  const { pathname, search, key } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, search, key]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
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
    </>
  );
}
