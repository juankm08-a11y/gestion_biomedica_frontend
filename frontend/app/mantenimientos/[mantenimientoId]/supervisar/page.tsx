"use client";
import { useParams } from "next/navigation";
import ProtectedRoute from "../../../auth/ProtectedRoute";
import SupervisarMantenimiento from "../../../components/mantenimientos/supervisar-mantenimiento/SupervisarMantenimiento";
import { PERMISOS } from "@/app/auth/permissions";

export const dynamic = 'force-dynamic';

export default function ListaReportes() {
  const params = useParams();

  const idParam = params.mantenimientoId;
  const idMantenimiento = Number(Array.isArray(idParam) ? idParam[0] : idParam);

  if (!idParam || isNaN(idMantenimiento)) {
    return <div>Cargando mantenimiento...</div>;
  }
  return (
    <ProtectedRoute roles={PERMISOS.supervisarMantenimiento}>
      <SupervisarMantenimiento idMantenimiento={idMantenimiento} />
    </ProtectedRoute>
  );
}
