import ProtectedRoute from "@/app/auth/ProtectedRoute";
import SubirArchivo from "../../../../components/equipos/SubirArchivo";
import { PERMISOS } from "@/app/auth/permissions";

export const dynamic = 'force-dynamic';

export default async function CargarArchivoPage({
  params,
}: {
  params: Promise<{ equipoId: string }>;
}) {
  const { equipoId } = await params;
  const id = Number(equipoId);

  if (isNaN(id)) {
    return <p>ID de equipo inválido</p>;
  }
  return (
    <ProtectedRoute
      roles={PERMISOS.equipos}
    >
      <SubirArchivo equipoId={id} />
    </ProtectedRoute>
  );
}
