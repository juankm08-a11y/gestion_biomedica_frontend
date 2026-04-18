import ProtectedRoute from "@/app/auth/ProtectedRoute";
import HistorialMantenimiento from "../components/mantenimientos/HistorialMantenimiento";
import { PERMISOS } from "../auth/permissions";

export const dynamic = 'force-dynamic';

export default function HistorialMantenimientoPage() {
  return (
    <ProtectedRoute roles={PERMISOS.mantenimientos}>
      <HistorialMantenimiento />
    </ProtectedRoute>
  );
}
