import { useEffect, useState } from "react";
import PageContainer from "../../ui/layout/PageContainer";
import { Orden } from "@/types/OrdenServicio.type";
import { consultarOrden } from "@/services/ordenesServicio.service";

export default function OrdenDetalle({ idOrden }: { idOrden: number }) {
  const [orden, setOrden] = useState<Orden | null>(null);

  useEffect(() => {
    const cargarEquipo = async () => {
      try {
        const response = await consultarOrden(idOrden);
        setOrden(response.data);
      } catch (error) {
        console.error("Error cargando orden", error);
      }
    };
    cargarEquipo();
  }, [idOrden]);

  if (!orden) {
    return <div>Cargando orden...</div>;
  }

  return (
    <PageContainer title="Ver detalle de equipo">
      <p>
        <strong>ID:</strong>
        {orden.idOrden}
      </p>
      <p>
        <strong>Estado:</strong>
        {orden.estado}
      </p>
      <p>
        <strong>Fecha Inicio:</strong>
        {orden.fechaInicio}
      </p>
      <p>
        <strong>Fecha Fin:</strong>
        {orden.fechaFin}
      </p>
      <p>
        <strong>Tipo Servicio:</strong>
        {orden.tipoServicio}
      </p>
    </PageContainer>
  );
}
