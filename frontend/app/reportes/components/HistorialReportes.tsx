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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-full w-[1600px] shadow-md  border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">Consultar Reporte General</h1>
        </div>
        <div className="border border-gray-300 overflow-x-auto">
          <table className="w-full min-w-[1200px] text-base">
            <thead className="border-b bg-gray-100">
              <tr>
                <th className="p-4 text-left">TOTAL EQUIPOS</th>
                <th className="p-4 text-left">TOTAL MANTENIMIENTOS</th>
                <th className="p-4 text-left">MANTENIMIENTOS</th>
                <th className="p-4 text-left">ORDENES EJECUTADAS</th>
              </tr>
            </thead>
            <tbody>
              <td>{reporte.totalEquipos}</td>
              <td>{reporte.totalMantenimientos}</td>
              <td>{reporte.mantenimientosPendientes}</td>
              <td>{reporte.ordenesEjecutadas}</td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
