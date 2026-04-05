import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import FormularioNotificaciones from "../components/FormularioNotificacion";

export default function CrearNotificacion() {
  return (
    <ProtectedRoute roles={["superadministrador", "administrador"]}>
      <FormularioNotificaciones />
    </ProtectedRoute>
  );
}
