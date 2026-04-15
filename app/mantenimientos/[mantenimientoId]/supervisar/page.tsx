"use client";
import { useParams } from "next/navigation";
import ProtectedRoute from "../../../components/equipos/ProtectedRoute";
import SupervisarMantenimiento from "../../../components/mantenimientos/supervisar-mantenimiento/SupervisarMantenimiento";

export default function ListaReportes() {
  const params = useParams();

  const idParam = params.mantenimientoId;
  const idMantenimiento = Number(Array.isArray(idParam) ? idParam[0] : idParam);

  if (!idParam || isNaN(idMantenimiento)) {
    return <div>Cargando mantenimiento...</div>;
  }
  return (
    <ProtectedRoute roles={["superadministrador", "coordinador"]}>
      <SupervisarMantenimiento idMantenimiento={idMantenimiento} />
    </ProtectedRoute>
  );
}
