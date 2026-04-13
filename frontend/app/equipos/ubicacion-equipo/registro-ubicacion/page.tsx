import FormularioRegistroUbicacion from "@/app/components/equipos/FormularioRegistroUbicacion";
import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";

export default function RegistroUbicacion() {
  return (
    <ProtectedRoute
      roles={[
        "superadministrador",
        "administrador",
        "ingenierobiomedico",
        "tecnicobiomedico",
      ]}
    >
      <FormularioRegistroUbicacion />
    </ProtectedRoute>
  );
}
