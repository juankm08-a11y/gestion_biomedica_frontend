import ProtectedRoute from "../components/equipos/ProtectedRoute";
import TablaEquipos from "../components/equipos/TablaEquipos";

export default function EquiposPage() {
  return (
    <ProtectedRoute
      roles={["superadministrador", "administrador", "ingenierobiomedico"]}
    >
      <TablaEquipos />
    </ProtectedRoute>
  );
}
