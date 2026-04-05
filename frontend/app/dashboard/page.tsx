import ProtectedRoute from "@/app/components/ProtectedRoute";
import Dashboard from "../components/Dashboard";

export default function DashboardPage() {
  return (
    <ProtectedRoute
      roles={[
        "superadministrdor",
        "administrador",
        "ingenierobiomedico",
        "tecnicobiomedico",
        "coordinador",
      ]}
    >
      <Dashboard />
    </ProtectedRoute>
  );
}
