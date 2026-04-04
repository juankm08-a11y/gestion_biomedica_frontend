import ProtectedRoute from "@/app/components/ProtectedRoute";
import ListaEquipos from "../components/ListaEquipos";

export default function ConsultaEquipos() {
  return (
    <ProtectedRoute
      roles={["superadministrador", "administrador", "ingenierobiomedico"]}
    >
      <ListaEquipos />
    </ProtectedRoute>
  );
}
