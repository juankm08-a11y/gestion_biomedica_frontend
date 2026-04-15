import { Suspense } from "react";

export default function RecuperarPasswordPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <RecuperarPasswordPage />
    </Suspense>
  );
}
