import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioRegistroCertificado from "../../components/certificados/FormularioCertificado";

export const dynamic = 'force-dynamic';

export default function RegistroCertificado() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <FormularioRegistroCertificado />
    </ProtectedRoute>
  );
}
