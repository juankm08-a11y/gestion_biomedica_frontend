"use client";

import { PERMISOS } from "@/app/auth/permissions";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import OrdenDetalle from "@/app/components/mantenimientos/ordenes-servicio/OrdenDetalle";
import { useParams } from "next/navigation";

export const dynamic = 'force-dynamic';

export default function OrdenDetallePage() {
  const params = useParams();
  const idParam = params.ordenId;

  const idOrden = Number(Array.isArray(idParam) ? idParam[0] : idParam);

  if (!idParam || isNaN(idOrden)) {
    return <div>Cargando equipo...</div>;
  }

  return (
    <ProtectedRoute roles={PERMISOS.ordenes}>
      <OrdenDetalle idOrden={idOrden} />;
    </ProtectedRoute>
  )
}
