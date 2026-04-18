"use client";

import { PERMISOS } from "@/app/auth/permissions";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioActualizarOrden from "@/app/components/mantenimientos/ordenes-servicio/FormularioActualizarOrden";
import { useParams } from "next/navigation";

export const dynamic = 'force-dynamic';

export default function ActualizarOrdenPage() {
  const params = useParams();
  const idParam = params.ordenId;

  const idOrden = Number(Array.isArray(idParam) ? idParam[0] : idParam);
  if (!idParam || isNaN(idOrden)) {
    return <div>Cargando mantenimiento</div>;
  }

  return (
    <ProtectedRoute roles={PERMISOS.ordenes}>
      <FormularioActualizarOrden idOrden={idOrden} />
    </ProtectedRoute>
  );
}
