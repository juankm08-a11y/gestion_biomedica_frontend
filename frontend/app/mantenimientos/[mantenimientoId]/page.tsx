"use client";

import { useParams } from "next/navigation";
import FormularioActualizarMantenimiento from "../../components/mantenimientos/FormularioActualizarMantenimiento";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import { PERMISOS } from "@/app/auth/permissions";

export const dynamic = 'force-dynamic';

export default function ActualizarMantenimiento() {
  const params = useParams();

  const mantenimientoId = Number(
    Array.isArray(params.id) ? params.id[0] : params.id,
  );

  if (!mantenimientoId || isNaN(mantenimientoId)) {
    return <p>Cargando Mantenimiento...</p>;
  }
  return (
    <ProtectedRoute roles={PERMISOS.mantenimientos}>
      <FormularioActualizarMantenimiento mantenimientoId={mantenimientoId} />
    </ProtectedRoute>
  );
}
