import ProtectedRoute from "@/app/auth/ProtectedRoute";
import HistorialProgramacion from "@/app/components/mantenimientos/programacion-mantenimiento/HistorialProgramacion";

export default function ProgramacionMantenimientoPage() {
  return (
    <ProtectedRoute>
      <HistorialProgramacion />
    </ProtectedRoute>
  );
}
