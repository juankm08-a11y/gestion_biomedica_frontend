"use client";

import { useParams } from "next/navigation";
import FormularioActualizarUbicacion from "../components/FormularioActualizarUbicacion1";

export default function ActualizarUbicacionPage() {
  const params = useParams();

  const id = Number(Array.isArray(params.id) ? params.id[0] : params.id);

  return <FormularioActualizarUbicacion id={id} />;
}
