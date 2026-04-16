import ProtectedRoute from "@/app/auth/ProtectedRoute";
import VerQR from "@/app/components/equipos/VerQR";

export default function QRPage({ equipoId }: any) {
  return (
    <ProtectedRoute>
      <VerQR equipoId={equipoId}></VerQR>
    </ProtectedRoute>
  );
}
