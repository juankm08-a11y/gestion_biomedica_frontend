import { PERMISOS } from "@/app/auth/permissions";
import FormularioRegistroCertificado from "../../components/certificados/FormularioCertificado";
import ProtectedRoute from "@/app/auth/ProtectedRoute";

export const dynamic = 'force-dynamic';

export default function RegistroCertificado() {
  return (
    <ProtectedRoute roles={PERMISOS.certificados}>
      <FormularioRegistroCertificado />
    </ProtectedRoute>
  );
}
