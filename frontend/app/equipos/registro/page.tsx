import FormularioRegistroEquipo from "@/app/components/equipos/FormularioRegistroEquipo";
import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";

export default function RegistroPage() {
  return (
    <ProtectedRoute
      roles={[
        "superadministrador",
        "administrador",
        "ingenierobiomedico",
        "tecnicobiomedico",
      ]}
    >
      <FormularioRegistroEquipo />
    </ProtectedRoute>
  );
}
