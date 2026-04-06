import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import FormularioRegistroCertificado from "../../components/certificados/FormularioCertificado";

export default function RegistroCertificado() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <FormularioRegistroCertificado />
    </ProtectedRoute>
  );
}
