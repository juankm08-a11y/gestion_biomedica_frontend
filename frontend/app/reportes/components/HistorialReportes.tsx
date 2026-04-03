"use client";

import { consultarReporte } from "@/app/api/reportes/reporte";
import { useEffect, useState } from "react";

export default function ReporteDashboard() {
  const [reporte, setRporte] = useState<any>(null);

  const cargarReporte = async () => {
    const data = await consultarReporte();
    setRporte(data);
  };

  useEffect(() => {
    cargarReporte();
  }, []);

  if (!reporte) return <p>Cargando reporte...</p>;

  return (
    <div>
      <div>
        <h3>Total Equipos</h3>
        <p>{reporte.totalEquipos}</p>
      </div>
      <div>
        <h3>Total Mantenimientos</h3>
        <p>{reporte.totalMantenimientos}</p>
      </div>
      <div>
        <h3>Mantenimientos Pendientes</h3>
        <p>{reporte.mantenimientosPendientes}</p>
      </div>
      <div>
        <h3>Ordenes Ejecutadas</h3>
        <p>{reporte.ordenesEjecutadas}</p>
      </div>
    </div>
  );
}
