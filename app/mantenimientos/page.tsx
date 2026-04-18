import ProtectedRoute from "@/app/auth/ProtectedRoute";
import HistorialMantenimiento from "../components/mantenimientos/HistorialMantenimiento";

export const dynamic = 'force-dynamic';

export default function HistorialMantenimientoPage() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <HistorialMantenimiento />
    </ProtectedRoute>
  );
}
