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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-full w-[1600px] shadow-md  border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">
            Consultar Programacion Mantenimiento
          </h1>
        </div>
        <div className="border border-gray-300 overflow-x-auto">
          <table className="w-full min-w-[1200px] text-base">
            <thead className="border-b bg-gray-100">
              <tr>
                <th className="p-4 text-left">Frecuencia Mantenimiento</th>
                <th className="p-4 text-left">Frecuencia Calibracion</th>
                <th className="p-4 text-left">Unidad Frecuencia</th>
                <th className="p-4 text-left">Proximo Mantenimiento</th>
                <th className="p-4 text-left">Proximo Calibracion</th>
              </tr>
            </thead>
            <tbody>
              {programaciones.map((p) => (
                <tr key={p.idProgramacion} className="border-b">
                  <td className="p-3">{p.equipo}</td>
                  <td className="p-3">{p.frecuenciaMantenimiento}</td>
                  <td className="p-3">{p.frecuenciaCalibracion}</td>
                  <td className="p-3">{p.unidadFrecuencia}</td>
                  <td className="p-3">{p.proximoMantenimiento}</td>
                  <td className="p-3"> {p.proximoCalibracion}</td>

                  <td className="p-3">
                    <button
                      onClick={() =>
                        router.push(
                          `/programacion-mantenimiento/${p.idProgramacion}`,
                        )
                      }
                      className="px-6 py-3 rounded text-base"
                    >
                      Actualizar Programacion
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
