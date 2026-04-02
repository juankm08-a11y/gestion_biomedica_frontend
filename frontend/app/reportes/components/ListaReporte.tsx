"use client";

import { consultarReporte } from "@/app/api/reportes/reporte";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ListaReportes() {
  const [reportes, setReportes] = useState<any[]>([]);
  const router = useRouter();

  const cargarReportes = async () => {
    try {
      const response = await consultarReporte();

      setReportes(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarReportes();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>TOTAL_EQUIPOS</th>
            <th>TOTAL_MANTENIMIENTOS</th>
            <th>MANTENIMIENTOS PENDIENTES</th>
            <th>ORDENES EJECUTADAS</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
