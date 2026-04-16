import HistorialArchivos from "@/app/components/equipos/HistorialArchivos";
import ProtectedRoute from "@/app/auth/ProtectedRoute";

export default async function HistorialEquiposPage({
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
