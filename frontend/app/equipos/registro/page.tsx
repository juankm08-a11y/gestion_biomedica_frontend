import FormularioRegistroEquipo from "@/app/components/equipos/FormularioRegistroEquipo";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import PageContainer from "@/app/components/ui/layout/PageContainer";
import { PERMISOS } from "@/app/auth/permissions";

export const dynamic = 'force-dynamic';

export default function RegistroEquipoPage() {
  return (
    <ProtectedRoute roles={PERMISOS.equipos}>
      <PageContainer>
        <FormularioRegistroEquipo />
      </PageContainer>
    </ProtectedRoute>
  );
}
