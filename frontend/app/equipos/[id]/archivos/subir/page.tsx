import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import SubirArchivo from "../../../../components/equipos/SubirArchivo";

export default async function CargarArchivo({
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
      roles={["superadministrador", "administrador", "ingenierobiomedico"]}
    >
      <SubirArchivo equipoId={id} />
    </ProtectedRoute>
  );
}
