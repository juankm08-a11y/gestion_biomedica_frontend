import ProtectedRoute from "../components/ProtectedRoute";
import HistorialReportes from "./components/HistorialReportes";

export default function ListaReportes() {
  return (
    <ProtectedRoute roles={["superadministrador", "administrador"]}>
      <HistorialReportes />
    </ProtectedRoute>
  );
}
