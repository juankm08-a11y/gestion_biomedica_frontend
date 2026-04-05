"use client";

import { useParams } from "next/navigation";
import FormularioActualizarOrden from "../components/FormularioActualizarOrden";

export default function ActualizarOrden() {
  const params = useParams();

  const id = Number(Array.isArray(params.id) ? params.id[0] : params.id);

  if (!id || isNaN(id)) {
    return <p>Cargando Mantenimiento...</p>;
  }
  return (
    <div>
      <FormularioActualizarOrden id={id} />
    </div>
  );
}
