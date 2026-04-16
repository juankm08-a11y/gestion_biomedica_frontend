import ProtectedRoute from "@/app/auth/ProtectedRoute";
import HistorialCertificados from "../components/certificados/HistorialCertificado";

export const dynamic = "force-dynamic";

export default function ConsultaCertificado() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <HistorialCertificados />
    </ProtectedRoute>
  );
}
