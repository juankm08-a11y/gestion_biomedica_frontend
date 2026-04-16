import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioRegistroOrden from "../../../components/mantenimientos/ordenes-servicio/FormularioRegistroOrden";

export default function RegistroOrdenPage() {
  return (
    <ProtectedRoute roles={["superadministrador", "tecnicobiomedico"]}>
      <FormularioRegistroOrden />
    </ProtectedRoute>
  );
}
