"use client";

import { supervisarMantenimiento } from "@/app/api/supervisarMantenimiento/supervisarMantenimiento";
import { useEffect, useState } from "react";

export default function SupervisionMantenimientoPage() {
  const [programaciones, setProgramaciones] = useState<any[]>([]);
  const cargarProgramaciones = async () => {
    const response = await supervisarMantenimiento();

    setProgramaciones(response.data);
  };

  useEffect(() => {
    cargarProgramaciones();
  }, []);

  return (
    <div>
      <h1>Supervisión de Mantenimiento</h1>
      <div>
        <table>
          <thead></thead>
          <tr>
            <th>Equipo</th>
            <th>Próximo Mantenimiento</th>
            <th>Próximo Calibración</th>
          </tr>
        </table>
        <tbody>
          {programaciones.map((p, index) => (
            <tr key={index}>
              <td>{p.equipo}</td>
              <td>{p.proximoMantenimiento}</td>
              <td>{p.proximoCalibracion}</td>
              <td>{p.estado}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}
