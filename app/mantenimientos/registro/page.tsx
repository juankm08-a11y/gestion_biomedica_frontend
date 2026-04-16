import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioRegistroMantenimiento from "../../components/mantenimientos/FormularioRegistroMantenimiento";

export default function RegistroMantenimientoPage() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <FormularioRegistroMantenimiento />
    </ProtectedRoute>
  );
}
