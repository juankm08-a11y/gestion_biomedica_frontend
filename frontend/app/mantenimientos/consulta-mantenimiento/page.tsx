import ProtectedRoute from "@/app/components/ProtectedRoute";
import HistorialMantenimiento from "../components/HistorialMantenimiento";

export default function RegistroMantenimiento() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <HistorialMantenimiento />
    </ProtectedRoute>
  );
}
