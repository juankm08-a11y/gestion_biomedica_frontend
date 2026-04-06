"use client";

import { useRouter } from "next/navigation";
import PageContainer from "../components/layout/PageContainer";
import ButtonGrid from "../components/layout/ButtonGrid";
import PrimaryButton from "../components/layout/PrimaryButton";
import { ROUTES } from "../routes/routes";

export default function Dashboard() {
  const router = useRouter();
  return (
    <PageContainer title="Dashboard">
      <ButtonGrid>
        <PrimaryButton
          text="Registrar Equipo"
          onClick={() => router.push(ROUTES.equipos.CREAR)}
        ></PrimaryButton>
        <PrimaryButton
          text="Consultar Equipos"
          onClick={() => router.push(ROUTES.equipos.LISTA)}
        ></PrimaryButton>
        <PrimaryButton
          text="Registrar Mantenimiento"
          onClick={() => router.push(ROUTES.mantenimietos.CREAR)}
        ></PrimaryButton>
      </ButtonGrid>
    </PageContainer>
  );
}
