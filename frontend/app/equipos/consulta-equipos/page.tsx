import ProtectedRoute from "@/app/components/ProtectedRoute";
import ListaEquipos from "../components/HistorialEquipos";

export default function ConsultaEquipos() {
  return (
    <ProtectedRoute
      roles={["superadministrador", "administrador", "ingenierobiomedico"]}
    >
      <ListaEquipos />
    </ProtectedRoute>
  );
}
