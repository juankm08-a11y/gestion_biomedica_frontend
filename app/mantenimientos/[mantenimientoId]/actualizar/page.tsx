"use client";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioActualizarMantenimiento from "@/app/components/mantenimientos/FormularioActualizarMantenimiento";
import { useParams } from "next/navigation";

export default function ActualizarMantenimientoPage() {
  const params = useParams();
  const idParam = params.mantenimientoId;

  const idMantenimiento = Number(Array.isArray(idParam) ? idParam[0] : idParam);
  if (!idParam || isNaN(idMantenimiento)) {
    return <div>Cargando mantenimiento</div>;
  }

  return (
    <ProtectedRoute
      roles={["superadministrador", "administrador", "ingenierobiomedico"]}
    >
      <FormularioActualizarMantenimiento idMantenimiento={idMantenimiento} />
    </ProtectedRoute>
  );
}
