import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import FormularioRegistroOrden from "../../../components/mantenimientos/ordenes-servicio/FormularioRegistroOrden";

export default function RegistroOrdenPage() {
  return (
    <ProtectedRoute roles={["superadministrador", "tecnicobiomedico"]}>
      <FormularioRegistroOrden />
    </ProtectedRoute>
  );
}
