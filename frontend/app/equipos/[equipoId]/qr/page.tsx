import { PERMISOS } from "@/app/auth/permissions";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import VerQR from "@/app/components/equipos/VerQR";

export const dynamic = 'force-dynamic';

export default function QRPage({ equipoId }: any) {
  return (
    <ProtectedRoute roles={PERMISOS.equipos}>
      <VerQR equipoId={equipoId}></VerQR>
    </ProtectedRoute>
  );
}
