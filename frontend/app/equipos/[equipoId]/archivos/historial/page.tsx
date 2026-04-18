import HistorialArchivos from "@/app/components/equipos/HistorialArchivos";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import { PERMISOS } from "@/app/auth/permissions";

export const dynamic = 'force-dynamic';

export default async function HistorialEquiposPage({
  params,
}: {
  params: Promise<{ equipoId: string }>;
}) {
  const { equipoId } = await params;

  return (
    <ProtectedRoute
      roles={PERMISOS.equipos}
    >
      <HistorialArchivos equipoId={Number(equipoId)} />
    </ProtectedRoute>
  );
}
