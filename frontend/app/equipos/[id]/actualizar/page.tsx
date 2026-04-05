"use client";

import { useParams } from "next/navigation";
import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import FormularioActualizarEquipo from "@/app/components/equipos/FormularioActualizarEquipo";

export default function ActualizarEquipo() {
  const params = useParams();
  const id = Number(Array.isArray(params.id) ? params.id[0] : params.id);

  return (
    <ProtectedRoute
      roles={["superadministrador", "administrador", "ingenierobiomedico"]}
    >
      <FormularioActualizarEquipo id={id} />
    </ProtectedRoute>
  );
}
