"use client";
import { consultarProgramacion } from "@/app/api/programacionMantenimiento/programacion";
import { useEffect, useState } from "react";

export default function HistorialProgramacion() {
  const [programaciones, setProgramaciones] = useState<any[]>([]);

  useEffect(() => {
    const cargar = async () => {
      const data = await consultarProgramacion();

      setProgramaciones(Array.isArray(data) ? data : []);
    };
    cargar();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Frecuencia Mantenimiento</th>
          <th>Frecuencia Calibracion</th>
          <th>Unidad Frecuencia</th>
          <th>Proximo Mantenimiento</th>
          <th>Proximo Calibracion</th>
        </tr>
      </thead>
      <tbody>
        {programaciones.map((p) => (
          <tr key={p.idProgramacion}>
            <td>
              {p.equipo}
              {p.frecuenciaMantenimiento}
              {p.frecuenciaCalibracion}
              {p.unidadFrecuencia}
              {p.proximoMantenimiento}
              {p.proximoCalibracion}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
