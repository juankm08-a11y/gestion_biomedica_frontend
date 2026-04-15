"use client";

import EquipoDetalle from "@/app/components/equipos/EquipoDetalle";
import { useParams } from "next/navigation";

export default function EquipoDetallePage() {
  const params = useParams();
  const idParam = params.equipoId;

  const idEquipo = Number(Array.isArray(idParam) ? idParam[0] : idParam);

  if (!idParam || isNaN(idEquipo)) {
    return <div>Cargando equipo...</div>;
  }

  return <EquipoDetalle idEquipo={idEquipo} />;
}
