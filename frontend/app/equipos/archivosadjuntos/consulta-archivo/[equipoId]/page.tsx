import ProtectedRoute from "@/app/components/ProtectedRoute";
import HistorialArchivos from "../../../components/HistorialArchivos";

export default async function ConsultaArchivo({
  params,
}: {
  params: Promise<{ equipoId: string }>;
}) {
  const { equipoId } = await params;

  return (
    <ProtectedRoute
      roles={["superadministrador", "administrador", "ingenierobiomedico"]}
    >
      <HistorialArchivos equipoId={Number(equipoId)} />
    </ProtectedRoute>
  );
}
