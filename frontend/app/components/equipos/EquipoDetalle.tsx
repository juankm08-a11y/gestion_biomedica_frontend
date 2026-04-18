"use client";
import PageContainer from "@/app/components/ui/layout/PageContainer";
import { useError } from "@/hooks/useError";
import { useFetch } from "@/hooks/useFetch";
import { obtenerEquipo } from "@/services/equipos.service";
import { EquipoResponse } from "../../../types/Equipo.type";
import Card from "../ui/cards/Card";
import InfoText from "../ui/text/InfoText";
import DetailGrid from "../ui/layout/DetailGrid";

export default function EquipoDetalle({ idEquipo }: { idEquipo: number }) {
  const { error } = useError();

  const { data: equipo, loading } = useFetch<EquipoResponse>(
    () => obtenerEquipo(idEquipo),
    [idEquipo],
  );

  if (loading) {
    return (
      <PageContainer>
        <p>Cargando equipo...</p>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <p className="text-red-500">{error}</p>
      </PageContainer>
    );
  }

  if (!equipo) {
    return (
      <PageContainer>
        <p>No se encontró el equipo</p>
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <Card title="Detalle del Equipo">
        <DetailGrid>
          <InfoText label="ID" value={equipo.idEquipo} />
          <InfoText label="Nombre" value={equipo.nombre} />

          <InfoText label="Marca" value={equipo.marca} />
          <InfoText label="Modelo" value={equipo.modelo} />

          <InfoText label="Serie" value={equipo.serie} />
          <InfoText label="Fabricante" value={equipo.fabricante} />

          <InfoText label="Ubicacion" value={equipo.ubicacion} />
          <InfoText label="Tipo Tecnología" value={equipo.tipoTecnologia} />
        </DetailGrid>
      </Card>
    </PageContainer>
  );
}
