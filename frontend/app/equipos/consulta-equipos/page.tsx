import ProtectedRoute from "@/app/components/ProtectedRoute";
import HistorialEquipos from "../components/HistorialEquipos";

export default function ConsultaEquipos() {
  return (
    <ProtectedRoute
      roles={[
        "superadministrador",
        "administrador",
        "ingenierobiomedico",
        "tecnicobiomedico",
      ]}
    >
      <HistorialEquipos />
    </ProtectedRoute>
  );
}
