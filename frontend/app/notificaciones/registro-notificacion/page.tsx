import ProtectedRoute from "@/app/components/ProtectedRoute";
import FormularioNotificaciones from "../components/FormularioNotificacion";

export default function CrearNotificacion() {
  return (
    <ProtectedRoute roles={["superadministrador", "administrador"]}>
      <FormularioNotificaciones />
    </ProtectedRoute>
  );
}
