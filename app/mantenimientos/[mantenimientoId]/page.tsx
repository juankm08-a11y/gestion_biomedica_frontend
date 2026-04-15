"use client";

import { useParams } from "next/navigation";
import FormularioActualizarMantenimiento from "../../components/mantenimientos/FormularioActualizarMantenimiento";

export default function ActualizarMantenimiento() {
  const params = useParams();

  const mantenimientoId = Number(
    Array.isArray(params.id) ? params.id[0] : params.id,
  );

  if (!mantenimientoId || isNaN(mantenimientoId)) {
    return <p>Cargando Mantenimiento...</p>;
  }
  return (
    <div>
      <FormularioActualizarMantenimiento mantenimientoId={mantenimientoId} />
    </div>
  );
}
