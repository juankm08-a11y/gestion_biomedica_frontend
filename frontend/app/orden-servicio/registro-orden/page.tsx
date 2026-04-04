import ProtectedRoute from "@/app/components/ProtectedRoute";
import FormularioRegistroOrden from "../components/FormularioRegistroOrden";

export default function RegistroOrden() {
  return (
    <ProtectedRoute roles={["superadministrador", "tecnicobiomedico"]}>
      <FormularioRegistroOrden />
    </ProtectedRoute>
  );
}
