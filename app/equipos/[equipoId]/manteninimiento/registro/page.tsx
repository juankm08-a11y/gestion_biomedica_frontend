"use client";

import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioRegistro from "@/app/components/mantenimientos/FormularioRegistroMantenimiento";
import { useParams } from "next/navigation";

export default function RegistroMantenimientoPage() {
  const params = useParams();
  const id = Number(Array.isArray(params.id) ? params.id[0] : params.id);

  if (!id || isNaN(id)) {
    return <p>Cargando equipo...</p>;
  }

  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <FormularioRegistro equipoId={id} />
    </ProtectedRoute>
  );
}
