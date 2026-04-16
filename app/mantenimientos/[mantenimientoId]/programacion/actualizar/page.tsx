"use client";

import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioActualizarProgramacion from "@/app/components/mantenimientos/programacion-mantenimiento/FormularioActualizarProgramacion";
import { useParams } from "next/navigation";

export default function ActualizarProgramacionPage() {
  const params = useParams();

  const idParam = params.programacionId;
  const idProgramacion = Number(Array.isArray(idParam) ? idParam[0] : idParam);

  if (!idParam || isNaN(idProgramacion)) {
    return <div>Cargando programacion...</div>;
  }
  return (
    <ProtectedRoute>
      <FormularioActualizarProgramacion idProgramacion={idProgramacion} />
    </ProtectedRoute>
  );
}
