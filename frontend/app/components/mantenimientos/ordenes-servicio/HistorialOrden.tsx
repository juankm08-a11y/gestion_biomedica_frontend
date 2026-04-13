"use client";

import {
  cerrarOrden,
  consultarOrdenes,
} from "@/services/ordenesServicio.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../../layout/PageContainer";
import Table from "../../ui/Table";

export default function HistorialOrdenes() {
  const [ordenes, setOrdenes] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    const cargarOrdenes = async () => {
      const response = await consultarOrdenes();
      setOrdenes(Array.isArray(response) ? response : []);
    };
    cargarOrdenes();
  }, []);

  const handleCerrar = async (id: number) => {
    if (!confirm("¿Deseas cerrar esta orden?")) return;

    await cerrarOrden(id);
  };

  const headers = [
    "ID",
    "Mantenimiento",
    "Tipo Servicio",
    "Fecha Inicio",
    "Fecha Fin",
    "Estado",
    "Acciones",
  ];

  const rows = ordenes.map((orden) => [
    orden.idOrden,
    orden.mantenimiento,
    orden.tipoServicio,
    orden.fechaInicio,
    orden.fechaFin,
    orden.estado,
    <div>
      <button
        onClick={() => router.push(`/ordenes/${orden.idOrden}`)}
        className="px-6 py-3 rounded-full bg-blue-500 text-white"
      >
        Editar
      </button>
      <button onClick={() => handleCerrar(orden.idOrden)}>Cerrar</button>
    </div>,
  ]);

  return (
    <PageContainer title="Consultar Ordenes">
      <Table headers={headers} rows={rows} />
    </PageContainer>
  );
}
