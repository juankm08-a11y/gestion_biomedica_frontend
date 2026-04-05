import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import FormularioRegistroCertificado from "../components/FormularioCertificado";

export default function RegistroCertificado() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <FormularioRegistroCertificado />
    </ProtectedRoute>
  );
}
