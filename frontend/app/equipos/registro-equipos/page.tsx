import ProtectedRoute from "@/app/components/ProtectedRoute";
import FormularioRegistroEquipo from "../components/FormularioRegistroEquipo";

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
