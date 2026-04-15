"use client";

import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import PageContainer from "../ui/layout/PageContainer";
import Panel from "../ui/panel/Panel";
import MetricCard from "../ui/cards/MetricCard";
import EquiposChart from "../ui/dashboard/EquiposChart";
import ButtonGrid from "../ui/layout/ButtonGrid";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import Icon from "../ui/iconos/Icon";

export default function Dashboard() {
  const router = useRouter();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    router.push(ROUTES.login);
  };
  return (
    <PageContainer>
      <Panel variant="dashboard">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <MetricCard title="Total Equipos" value={12} />
          <MetricCard title="Mantenimientos Preventivos" value={4} />
          <MetricCard title="Alertas Activas" value={12} />
        </div>
        <div className="mb-10">
          <EquiposChart />
        </div>
        <ButtonGrid>
          <PrimaryButton
            text="Registrar Equipo"
            onClick={() => router.push(ROUTES.equipos.CREAR)}
          />
          <PrimaryButton
            text="Consultar Equipos"
            onClick={() => router.push(ROUTES.equipos.LISTA)}
          />
          <PrimaryButton
            text="Registrar Mantenimiento"
            onClick={() => router.push(ROUTES.mantenimientos.CREAR)}
          />
          <PrimaryButton
            text="Ir a Panel de Alertas"
            onClick={() => router.push(ROUTES.alertas.PANEL)}
            icon={<Icon name="alertas" size={22} />}
          />
          <PrimaryButton text="Cerrar Sesión" onClick={handleLogOut} />
        </ButtonGrid>
      </Panel>
    </PageContainer>
  );
}
