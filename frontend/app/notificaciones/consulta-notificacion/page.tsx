import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import HistorialNotificaciones from "../components/HistorialNotificaciones";

export default function ConsultaNotificacion() {
  return (
    <ProtectedRoute roles={["superadministrador", "administrador"]}>
      <HistorialNotificaciones />
    </ProtectedRoute>
  );
}
