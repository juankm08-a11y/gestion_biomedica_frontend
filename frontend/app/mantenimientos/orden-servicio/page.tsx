import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import HistorialOrdenes from "../../components/mantenimientos/ordenes-servicio/HistorialOrden";

export default function VerOrden() {
  return (
    <ProtectedRoute roles={["superadministrador", "tecnicobiomedico"]}>
      <HistorialOrdenes />
    </ProtectedRoute>
  );
}
