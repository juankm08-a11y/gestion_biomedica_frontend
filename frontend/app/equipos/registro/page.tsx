import FormularioRegistroEquipo from "@/app/components/equipos/FormularioRegistroEquipo";
import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import PageContainer from "@/app/components/layout/PageContainer";

export default function RegistroPage() {
  return (
    <ProtectedRoute
      roles={[
        "superadministrador",
        "administrador",
        "ingenierobiomedico",
        "tecnicobiomedico",
      ]}
    >
      <PageContainer title="Registro de Equipo">
        <FormularioRegistroEquipo />
      </PageContainer>
    </ProtectedRoute>
  );
}
