import ProtectedRoute from "../auth/ProtectedRoute";
import ReporteDashboard from "../components/reportes/HistorialReportes";

export default function ListaReportesPage() {
  return (
    <ProtectedRoute roles={["superadministrador", "administrador"]}>
      <ReporteDashboard />
    </ProtectedRoute>
  );
}
