"use client";
import { consultarProgramacion } from "@/app/api/programacionMantenimiento/programacion";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HistorialProgramacion() {
  const [programaciones, setProgramaciones] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const cargar = async () => {
      const data = await consultarProgramacion();

      console.log("PROGRAMACIONES: ", data);

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
            <td>{p.equipo}</td>
            <td>{p.frecuenciaMantenimiento}</td>
            <td>{p.frecuenciaCalibracion}</td>
            <td>{p.unidadFrecuencia}</td>
            <td>{p.proximoMantenimiento}</td>
            <td> {p.proximoCalibracion}</td>

            <td>
              <button
                onClick={() =>
                  router.push(`/programacion-mantenimiento/${p.idProgramacion}`)
                }
              >
                Actualizar Programacion
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
