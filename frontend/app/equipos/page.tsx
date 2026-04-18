import { PERMISOS } from "../auth/permissions";
import ProtectedRoute from "../auth/ProtectedRoute";
import TablaEquipos from "../components/equipos/HistorialEquipos";

export const dynamic = 'force-dynamic';

export default function EquiposPage() {
  return (
    <ProtectedRoute roles={PERMISOS.equipos}>
      <TablaEquipos />
    </ProtectedRoute>
  );
}
