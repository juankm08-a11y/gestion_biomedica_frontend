import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import HistorialCertificados from "../components/HistorialCertificado";

export default function ConsultaCertificado() {
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <HistorialCertificados />
    </ProtectedRoute>
  );
}
