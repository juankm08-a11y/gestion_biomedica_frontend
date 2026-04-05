import FormularioActualizarUbicacion from "@/app/components/equipos/FormularioActualizarUbicacion1";
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
      <FormularioActualizarUbicacion />
    </ProtectedRoute>
  );
}
