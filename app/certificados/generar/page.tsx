import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioRegistroCertificado from "../../components/certificados/FormularioCertificado";

export default function RegistroCertificado() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <FormularioRegistroCertificado />
    </ProtectedRoute>
  );
}
