import FormularioRegistroEquipo from "@/app/components/equipos/FormularioRegistroEquipo";
import ProtectedRoute from "@/app/auth/ProtectedRoute";
import PageContainer from "@/app/components/ui/layout/PageContainer";

export const dynamic = 'force-dynamic';

export default function RegistroEquipoPage() {
  return (
    <ProtectedRoute
      roles={[
        "superadministrador",
        "administrador",
        "ingenierobiomedico",
        "tecnicobiomedico",
      ]}
    >
      <PageContainer>
        <FormularioRegistroEquipo />
      </PageContainer>
    </ProtectedRoute>
  );
}
