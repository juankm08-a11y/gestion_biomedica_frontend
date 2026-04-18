"use client";

import { consultarReporte } from "@/services/reportes.service";
import { useEffect, useState } from "react";
import PageContainer from "../ui/layout/PageContainer";
import DataTable, { Column } from "../ui/table/DataTable";
import { useFetch } from "@/hooks/useFetch";
import { ReporteResponse } from "@/types/Reporte.type";

export default function ReporteDashboard() {
  const { data: reporte, loading, error } = useFetch<ReporteResponse>(consultarReporte);

  if (loading) return <p>Cargando reporte</p>;

  if (error) return <p>Error cargando reporte</p>;

  if (!reporte) return null;

  const columns: Column<ReporteResponse>[] = [
    { key: "totalEquipos", label: "Total Equipos" },
    { key: "totalMantenimientos", label: "Total Mantenimientos" },
    { key: "mantenimientosPendientes", label: "Mantenimientos Pendientes" },
    { key: "ordenesEjecutadas", label: "Ordenes Ejecutadas" },
  ];

  return (
    <PageContainer>
      <DataTable
        title="Resumen del Sistema"
        data={[reporte]}
        columns={columns}
      />
    </PageContainer>
  );
}
