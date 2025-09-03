import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import MainLayout from "@/layout/MainLayout";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import DevicesPage from "@/features/devices/pages/DevicesPage";
import SpacePage from "@/features/spaces/pages/SpacePage";
import SpaceDevicesPage from "@/features/spaceDevices/page/SpaceDevicesPage";

// Root Layout
const rootRoute = createRootRoute({
  component: MainLayout,
});

// Child Routes
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: DashboardPage,
});

const devicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/devices",
  component: DevicesPage,
});

const spaceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/space/$type", // dynamic param (indoor | outdoor)
  component: SpacePage,
});

const spaceDevicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/space/$type/$roomName",
  component: SpaceDevicesPage,
});

// Route Tree
const routeTree = rootRoute.addChildren([
  dashboardRoute,
  devicesRoute,
  spaceRoute,
  spaceDevicesRoute,
]);

// ✅ Correct way: use createRouter
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

// Router Provider
export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
