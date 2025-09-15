import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/features/auth/store/authStore";

export function ProtectedRoute({ children }) {
  const { user } = useAuthStore();

  if (!user) return <Navigate to="/login" replace />;

  return children;
}
