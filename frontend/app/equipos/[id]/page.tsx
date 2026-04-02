"use client";

import { useParams } from "next/navigation";
import FormularioActualizarEquipo from "../components/FormularioActualizarEquipo";

export default function ActualizarEquipo() {
  const params = useParams();
  const id = Number(Array.isArray(params.id) ? params.id[0] : params.id);

  return (
    <div>
      <FormularioActualizarEquipo id={id} />
    </div>
  );
}
