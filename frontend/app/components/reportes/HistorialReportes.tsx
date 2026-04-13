"use client";

import { consultarReporte } from "@/services/reportes.service";
import { useEffect, useState } from "react";
import PageContainer from "../layout/PageContainer";
import Table from "../ui/Table";

export default function ReporteDashboard() {
  const [reporte, setReporte] = useState<any>(null);

  const cargarReporte = async () => {
    const data = await consultarReporte();
    setReporte(data);
  };

  useEffect(() => {
    cargarReporte();
  }, []);

  if (!reporte) return <p>Cargando reporte...</p>;

  const headers = [
    "TOTAL EQUIPOS",
    "TOTAL MANTENIMIENTOS",
    "MANTENIMIENTOS",
    "ORDENES EJECUTADAS",
  ];

  const rows = [
    [
      reporte.totalEquipos,
      reporte.totalMantenimientos,
      reporte.mantenimientosPendientes,
      reporte.ordenesEjecutadas,
    ],
  ];

  return (
    <PageContainer title="Consultar Reporte General">
      <Table headers={headers} rows={rows} />
    </PageContainer>
  );
}
