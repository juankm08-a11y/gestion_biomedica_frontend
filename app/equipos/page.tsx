import ProtectedRoute from "../auth/ProtectedRoute";
import TablaEquipos from "../components/equipos/HistorialEquipos";

export default function EquiposPage() {
  return (
    <ProtectedRoute
      roles={["superadministrador", "administrador", "ingenierobiomedico"]}
    >
      <TablaEquipos />
    </ProtectedRoute>
  );
}
