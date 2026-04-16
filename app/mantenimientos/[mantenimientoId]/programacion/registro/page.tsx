"use client";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioRegistroProgramacion from "@/app/components/mantenimientos/programacion-mantenimiento/FormularioRegistroProgramacion";
import { useParams } from "next/navigation";

export default function RegistroProgramacionPage() {
  const params = useParams();

  const idParam = params.mantenimientoId;

  const idMantenimiento = Number(Array.isArray(idParam) ? idParam[0] : idParam);

  if (!idParam || isNaN(idMantenimiento)) {
    return <div>Cargando mantenimiento...</div>;
  }
  return (
    <ProtectedRoute>
      <FormularioRegistroProgramacion idMantenimiento={idMantenimiento} />
    </ProtectedRoute>
  );
}
