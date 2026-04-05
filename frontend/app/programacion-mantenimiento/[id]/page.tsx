"use client";

import { useParams } from "next/navigation";
import ActualizarProgramacion from "../components/ActualizarProgramacion";

export default function ActualizarProgramacionMantenimientoPage() {
  const params = useParams();

  const id = Number(Array.isArray(params.id) ? params.id[0] : params.id);

  if (!id) {
    return <p>Cargando Programación</p>;
  }

  return <ActualizarProgramacion id={id} />;
}
