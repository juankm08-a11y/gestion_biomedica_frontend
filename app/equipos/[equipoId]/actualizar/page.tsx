"use client";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import FormularioActualizarEquipo from "@/app/components/equipos/FormularioActualizarEquipo";
import { useParams } from "next/navigation";

export default function ActualizarEquipoPage() {
  const params = useParams();
  const idParam = params.equipoId;
  const idEquipo = Number(Array.isArray(idParam) ? idParam[0] : idParam);

  if (!idParam || isNaN(idEquipo)) {
    return <div>Cargando equipo...</div>;
  }

  return (
    <ProtectedRoute
      roles={["superadministrador", "administrador", "ingenierobiomedico"]}
    >
      <FormularioActualizarEquipo idEquipo={idEquipo} />
    </ProtectedRoute>
  );
}
