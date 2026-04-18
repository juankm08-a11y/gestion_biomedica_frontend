import ProtectedRoute from "@/app/auth/ProtectedRoute";
import HistorialOrdenes from "../../components/mantenimientos/ordenes-servicio/HistorialOrden";
import { PERMISOS } from "@/app/auth/permissions";

export const dynamic = 'force-dynamic';

export default function VerOrdenPage() {
  return (
    <ProtectedRoute roles={PERMISOS.ordenes}>
      <HistorialOrdenes />
    </ProtectedRoute>
  );
}
