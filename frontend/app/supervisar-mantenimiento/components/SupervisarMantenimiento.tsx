"use client";

import { supervisarMantenimiento } from "@/app/api/supervisarMantenimiento/supervisarMantenimiento";
import { useEffect, useState } from "react";

export default function SupervisarMantenimiento() {
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
      <h2>Supervisión de Mantenimiento</h2>

      <table>
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Próximo Mantenimiento</th>
            <th>Próxima Calibración</th>
            <th>Estado</th>
          </tr>
        </thead>
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
      </table>
    </div>
  );
}
