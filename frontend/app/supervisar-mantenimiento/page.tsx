import ProtectedRoute from "../components/ProtectedRoute";
import SupervisarMantenimiento from "./components/SupervisarMantenimiento";

export default function ListaReportes() {
  return (
    <ProtectedRoute roles={["superadministrador", "coordinador"]}>
      <SupervisarMantenimiento />
    </ProtectedRoute>
  );
}
