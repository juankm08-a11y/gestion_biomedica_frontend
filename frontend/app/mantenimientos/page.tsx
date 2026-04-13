import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import HistorialMantenimiento from "../components/mantenimientos/HistorialMantenimiento";

export default function RegistroMantenimiento() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <HistorialMantenimiento />
    </ProtectedRoute>
  );
}
