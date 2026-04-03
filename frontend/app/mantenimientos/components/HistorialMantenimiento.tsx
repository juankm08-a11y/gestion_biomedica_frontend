"use client";

import {
  consultarMantenimiento,
  eliminarMantenimiento,
} from "@/app/api/mantenimientos/mantenimiento";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HistorialMantenimiento() {
  const [mantenimientos, setMantenimientos] = useState<any[]>([]);

  const router = useRouter();

  const cargarMantenimientos = async () => {
    const response = await consultarMantenimiento();
    setMantenimientos(Array.isArray(response) ? response : []);
  };

  useEffect(() => {
    cargarMantenimientos();
  }, []);

  const handleEliminar = async (id: number) => {
    if (!confirm("Seguro que deseas eliminar este mantenimiento?")) return;

    await eliminarMantenimiento(id);

    cargarMantenimientos();
  };

  return (
    <div className="border bg-white">
      <table className="w-full text-sm">
        <thead className="border-b bg-gray-100">
          <tr>
            <th className="p-3 text-left">EQUIPO</th>
            <th className="p-3 text-left">EQUIPO_NOMBRE</th>
            <th className="p-3 text-left">TIPO</th>
            <th className="p-3 text-left">FECHA INICIO</th>
            <th className="p-3 text-left">FECHA FIN</th>
            <th className="p-3 text-left">ESTADO</th>
            <th className="p-3 text-left">RESPONSABLE</th>
            <th className="p-3 text-left">RESPONSABLE_NOMBRE</th>
          </tr>
        </thead>

        <tbody>
          {mantenimientos.map((mantenimiento) => (
            <tr key={mantenimiento.idMantenimiento}>
              <td className="p-3">{mantenimiento.equipo}</td>
              <td className="p-3">{mantenimiento.tipo}</td>
              <td className="p-3">{mantenimiento.estado}</td>
              <td className="p-3">{mantenimiento.fechaInicio}</td>
              <td className="p-3">{mantenimiento.fechaFin}</td>
              <td className="p-3">{mantenimiento.responsable}</td>

              <td className="p-3 flex gap-2">
                <button
                  onClick={() =>
                    router.push(
                      `/mantenimientos/${mantenimiento.idMantenimiento}`,
                    )
                  }
                  className="border px-4 py-2 rounded"
                >
                  Editar
                </button>

                <button
                  onClick={() => handleEliminar(mantenimiento.idMantenimiento)}
                  className="border px-4 py-2 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
