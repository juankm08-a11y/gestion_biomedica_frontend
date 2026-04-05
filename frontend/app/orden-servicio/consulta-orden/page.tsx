import ProtectedRoute from "@/app/components/ProtectedRoute";
import HistorialOrdenes from "../components/HistorialOrden";

export default function VerOrden() {
  return (
    <ProtectedRoute roles={["superadministrador", "tecnicobiomedico"]}>
      <HistorialOrdenes />
    </ProtectedRoute>
  );
}
