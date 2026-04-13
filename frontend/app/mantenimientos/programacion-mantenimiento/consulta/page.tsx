import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import HistorialProgramacion from "../../../components/mantenimientos/programacion-mantenimiento/HistorialProgramacion";

export default function ListaProgramaciones() {
  return (
    <ProtectedRoute roles={["superadministrador", "tecnicobiomedico"]}>
      <HistorialProgramacion />
    </ProtectedRoute>
  );
}
