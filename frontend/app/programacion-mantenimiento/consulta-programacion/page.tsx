import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import HistorialProgramacion from "../components/HistorialProgramacion";

export default function ListaProgramaciones() {
  return (
    <ProtectedRoute roles={["superadministrador", "tecnicobiomedico"]}>
      <HistorialProgramacion />
    </ProtectedRoute>
  );
}
