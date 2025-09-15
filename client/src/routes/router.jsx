import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import DevicesPage from "@/features/devices/pages/DevicesPage";
import SpacePage from "@/features/spaces/pages/SpacePage";
import SpaceDevicesPage from "@/features/spaceDevices/page/SpaceDevicesPage";
import SettingsPage from "@/features/settings/pages/SettingsPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import NotFoundPage from "@/features/misc/pages/NotFoundPage";

import { ProtectedRoute } from "./ProtectedRoute";

// Layout for all protected pages
function AppLayout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

// Layout for auth pages
function AuthLayout() {
  return <Outlet />;
}

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Public Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Protected App Routes */}
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="devices" element={<DevicesPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path=":space" element={<SpacePage />} />
          <Route path=":space/:roomName" element={<SpaceDevicesPage />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
