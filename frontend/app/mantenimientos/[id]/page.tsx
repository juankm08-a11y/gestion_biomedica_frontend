"use client";

import { useParams } from "next/navigation";
import FormularioActualizarMantenimiento from "./components/FormularioActualizarMantenimiento";

export default function ActualizarMantenimiento() {
  const params = useParams();

  const id = Number(Array.isArray(params.id) ? params.id[0] : params.id);

  if (!id || isNaN(id)) {
    return <p>Cargando Mantenimiento...</p>;
  }
  return (
    <div>
      <FormularioActualizarMantenimiento id={id} />
    </div>
  );
}
