import ProtectedRoute from "@/app/auth/ProtectedRoute";
import HistorialCertificados from "../components/certificados/HistorialCertificado";
import { PERMISOS } from "../auth/permissions";

export const dynamic = "force-dynamic";

export default function ConsultaCertificado() {
  return (
    <ProtectedRoute roles={PERMISOS.certificados}>
      <HistorialCertificados />
    </ProtectedRoute>
  );
}
