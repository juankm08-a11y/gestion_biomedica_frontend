"use client";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioRegistroMantenimiento from "../../components/mantenimientos/FormularioRegistroMantenimiento";
import { useParams } from "next/navigation";

export const dynamic = 'force-dynamic';

export default function RegistroMantenimientoPage() {
  const params = useParams();

  const idParam = params.equipoId;
  const idEquipo = Number(Array.isArray(idParam) ? idParam[0]: idParam)

  if (!idParam || isNaN(idEquipo)) {
    return <div>Cargando Equipo...</div>
  }
  return (
    <ProtectedRoute roles={["superadministrador", "ingenierobiomedico"]}>
      <FormularioRegistroMantenimiento idEquipo={idEquipo} />
    </ProtectedRoute>
  );
}
