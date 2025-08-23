import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import MainLayout from "@/layout/MainLayout";
import DashboardPage from "@/features/dashboard/DashboardPage";
import DevicesPage from "@/features/devices/DevicesPage";

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

// Route Tree
const routeTree = rootRoute.addChildren([dashboardRoute, devicesRoute]);

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
