"use client";

import { useParams } from "next/navigation";
import FormularioActualizarEquipo from "../components/FormularioActualizarEquipo";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function ActualizarEquipo() {
  const params = useParams();
  const id = Number(Array.isArray(params.id) ? params.id[0] : params.id);

  return (
    <ProtectedRoute
      roles={["superadministrador", "administrador", "ingenierobiomedico"]}
    >
      <FormularioActualizarEquipo />
    </ProtectedRoute>
  );
}
