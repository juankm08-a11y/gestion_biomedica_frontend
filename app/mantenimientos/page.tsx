import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import HistorialMantenimiento from "../components/mantenimientos/HistorialMantenimiento";

export default function HistorialMantenimientoPage() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <HistorialMantenimiento />
    </ProtectedRoute>
  );
}
