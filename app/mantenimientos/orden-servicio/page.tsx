import ProtectedRoute from "@/app/auth/ProtectedRoute";
import HistorialOrdenes from "../../components/mantenimientos/ordenes-servicio/HistorialOrden";

export const dynamic = 'force-dynamic';

export default function VerOrdenPage() {
  return (
    <ProtectedRoute roles={["superadministrador", "tecnicobiomedico"]}>
      <HistorialOrdenes />
    </ProtectedRoute>
  );
}
