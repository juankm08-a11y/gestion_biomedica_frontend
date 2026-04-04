import ProtectedRoute from "@/app/components/ProtectedRoute";
import FormularioUbicacion from "../components/FormularioUbicacion";

export default function RegistroUbicacion() {
  return (
    <ProtectedRoute
      roles={["superadministrador", "administrador", "ingenierobiomedico"]}
    >
      <FormularioUbicacion />
    </ProtectedRoute>
  );
}
