import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import DevicesPage from "@/features/devices/pages/DevicesPage";
import SpacePage from "@/features/spaces/pages/SpacePage";
import SpaceDevicesPage from "@/features/spaceDevices/page/SpaceDevicesPage";
import SettingsPage from "@/features/settings/pages/SettingsPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import NotFoundPage from "@/features/misc/pages/NotFoundPage";

// 🔹 Protected Layout (with MainLayout)
function AppLayout() {
  const isAuthenticated = true; // Replace with your auth logic

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <MainLayout>
      <Outlet /> {/* Renders nested pages */}
    </MainLayout>
  );
}

// 🔹 Public Layout (for Auth pages)
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
        </Route>

        {/* Protected App Routes */}
        <Route element={<AppLayout />}>
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
