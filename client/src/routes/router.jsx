import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import MainLayout from "@/layout/MainLayout";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import DevicesPage from "@/features/devices/pages/DevicesPage";
import IndoorPage from "../features/spaces/indoor/pages/IndoorPage";
import OutdoorPage from "@/features/spaces/outdoor/pages/OutdoorPage";

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

const indoorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/indoor",
  component: IndoorPage,
});

const outdoorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/outdoor",
  component: OutdoorPage,
});

// Route Tree
const routeTree = rootRoute.addChildren([
  dashboardRoute,
  devicesRoute,
  indoorRoute,
  outdoorRoute,
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
