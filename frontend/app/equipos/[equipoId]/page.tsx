"use client";

import { PERMISOS } from "@/app/auth/permissions";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import EquipoDetalle from "@/app/components/equipos/EquipoDetalle";
import { useParams } from "next/navigation";

export default function EquipoDetallePage() {
  const params = useParams();
  const idParam = params.equipoId;

  const idEquipo = Number(Array.isArray(idParam) ? idParam[0] : idParam);

  if (!idParam || isNaN(idEquipo)) {
    return <div>Cargando equipo...</div>;
  }

  return (
    <ProtectedRoute roles={PERMISOS.equipos}>
      <EquipoDetalle idEquipo={idEquipo} />;
    </ProtectedRoute>
  )
}
