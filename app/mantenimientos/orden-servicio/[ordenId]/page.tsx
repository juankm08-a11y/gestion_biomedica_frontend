"use client";

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

  return <OrdenDetalle idOrden={idOrden} />;
}
