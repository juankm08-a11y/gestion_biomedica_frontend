import ProtectedRoute from "@/app/components/ProtectedRoute";
import FormularioRegistroMantenimiento from "../components/FormularioRegistroMantenimiento";

export default function RegistroMantenimiento() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <FormularioRegistroMantenimiento />
    </ProtectedRoute>
  );
}
