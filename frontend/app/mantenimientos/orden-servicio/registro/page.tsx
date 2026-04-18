import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioRegistroOrden from "../../../components/mantenimientos/ordenes-servicio/FormularioRegistroOrden";
import { PERMISOS } from "@/app/auth/permissions";

export const dynamic = 'force-dynamic';

export default function RegistroOrdenPage() {
  return (
    <ProtectedRoute roles={PERMISOS.ordenes}>
      <FormularioRegistroOrden />
    </ProtectedRoute>
  );
}
