import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import FormularioRegistroMantenimiento from "../../components/mantenimientos/FormularioRegistroMantenimiento";

export default function RegistroMantenimiento() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <FormularioRegistroMantenimiento />
    </ProtectedRoute>
  );
}
