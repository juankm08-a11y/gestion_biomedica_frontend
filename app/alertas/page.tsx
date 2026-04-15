import AlertPanel from "../components/panel_alertas/AlertPanel";
import PageContainer from "../components/ui/layout/PageContainer";
import InfoText from "../components/ui/text/InfoText";

export default function AlertasPage() {
  return (
    <PageContainer title="Panel de Alertas">
      <AlertPanel title="Alertas de mantenimiento">
        <div className="bg-[#B1EBE6] p-4 mb-4">
          <InfoText label="Equipo" value="Monitor de signos vitales" />
          <InfoText label="Tipo" value="Mantenimiento preventivo" />
          <InfoText label="Fecha límite" value="20/02/2026" />{" "}
        </div>
      </AlertPanel>
    </PageContainer>
  );
}
