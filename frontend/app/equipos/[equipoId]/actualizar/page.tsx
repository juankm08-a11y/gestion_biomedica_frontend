"use client";
import { PERMISOS } from "@/app/auth/permissions";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioActualizarEquipo from "@/app/components/equipos/FormularioActualizarEquipo";
import { useParams } from "next/navigation";

export const dynamic = 'force-dynamic';

export default function ActualizarEquipoPage() {
  const params = useParams();
  const idParam = params.equipoId;
  const idEquipo = Number(Array.isArray(idParam) ? idParam[0] : idParam);

  if (!idParam || isNaN(idEquipo)) {
    return <div>Cargando equipo...</div>;
  }

  return (
    <ProtectedRoute
      roles={PERMISOS.equipos}
    >
      <FormularioActualizarEquipo idEquipo={idEquipo} />
    </ProtectedRoute>
  );
}
