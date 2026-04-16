import { useEffect, useState } from "react";
import PageContainer from '../../ui/layout/PageContainer';
import { OrdenResponse } from "@/types/OrdenServicio.type";
import { consultarOrden } from "@/services/ordenesServicio.service";
import { useError } from "@/hooks/useError";
import { useFetch } from "@/hooks/useFetch";
import Card from "../../ui/cards/Card";
import DetailGrid from "../../ui/layout/DetailGrid";
import InfoText from "../../ui/text/InfoText";

export default function OrdenDetalle({ idOrden }: { idOrden: number }) {
  
  const {error} = useError();

  const {data:orden,loading} = useFetch<OrdenResponse>(
    () => consultarOrden(idOrden),
    [idOrden]
  )
  
  if (loading) {
    return <PageContainer>
      <p>Cargando orden...</p>
    </PageContainer>
  }

  if (error) {
    return (
      <PageContainer>
        <p className="text-red-500">
          {error}
        </p>
      </PageContainer>
    )
  }

  if (!orden) {
    return (
      <PageContainer>
        <p className="text-red-500">
          No se encontró la orden
        </p>
      </PageContainer>
    )
  }
  return (
    <PageContainer>
     <Card title="Detalle de la orden">
      <DetailGrid>
        <InfoText label="ID" value={orden.idOrden}/>
        <InfoText label="Mantenimiento" value={orden.mantenimiento}/>
        <InfoText label="Estado" value={orden.estado}/>
        <InfoText label="Fecha Inicio" value={orden.fechaInicio}/>
        <InfoText label="Fecha Fin" value={orden.fechaFin}/>
      </DetailGrid>
     </Card>
    </PageContainer>
  );
}
