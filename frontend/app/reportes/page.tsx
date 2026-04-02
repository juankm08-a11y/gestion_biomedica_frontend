"use client";

import { useEffect, useState } from "react";
import { consultarReporte } from "../api/reportes/reporte";

export default function ReportesPage() {
  const [reporte, setReporte] = useState<any>(null);

  const cargarReporte = async () => {
    try {
      const data = await consultarReporte();

      setReporte(data);
    } catch (error) {
      console.error("Error cargando reporte: ", reporte);
    }
  };

  useEffect(() => {
    cargarReporte();
  }, []);

  if (!reporte) {
    return <p>Cargando reporte...</p>;
  }
  return (
    <div>
      <h1>Reporte general del sistema</h1>

      <div>
        <div>
          <h2>Total Equipos</h2>

          <p>{reporte.totalMantenimientos}</p>

          <div>
            <h2>Mantenimientos Pendientes</h2>

            <p>{reporte.mantenimientosPendientes}</p>
          </div>
          <div>
            <h2>Ordenes Ejecutadas</h2>
            <p>{reporte.ordenesEjecutadas}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
