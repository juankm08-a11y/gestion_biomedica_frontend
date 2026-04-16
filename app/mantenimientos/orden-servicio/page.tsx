import ProtectedRoute from "@/app/auth/ProtectedRoute";
import HistorialOrdenes from "../../components/mantenimientos/ordenes-servicio/HistorialOrden";

export default function VerOrdenPage() {
  return (
    <ProtectedRoute roles={["superadministrador", "tecnicobiomedico"]}>
      <HistorialOrdenes />
    </ProtectedRoute>
  );
}
