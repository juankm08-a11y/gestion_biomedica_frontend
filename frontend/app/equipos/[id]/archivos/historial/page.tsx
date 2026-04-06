import HistorialArchivos from "@/app/components/equipos/HistorialArchivos";
import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";

export default async function HistorialPage({
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
