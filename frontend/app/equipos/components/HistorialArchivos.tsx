"use client";

import {
  consultarArchivos,
  eliminarArchivo,
} from "@/app/api/archivosAdjuntos/archivoAdjunto";
import { useEffect, useState } from "react";

export default function HistorialArchivos({ equipoId }: { equipoId: number }) {
  const [archivos, setArchivos] = useState<any[]>([]);

  const cargarArchivos = async () => {
    if (!equipoId) return;

    const response = await consultarArchivos(equipoId);

    setArchivos(response);
  };

  useEffect(() => {
    cargarArchivos();
  }, [equipoId]);

  const handleEliminr = async (id: number) => {
    if (!confirm("Deseas eliminar este archivo")) return;

    await eliminarArchivo(id);

    cargarArchivos();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-full w-[1600px] shadow-md  border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">Consultar Archivos Adjuntos</h1>
        </div>
        <div className="border border-gray-300 overflow-x-auto">
          <table className="w-full min-w-[1200px] text-base">
            <thead className="border-b bg-gray-100">
              <tr>
                <th className="p-4 text-left">Nombre</th>
                <th className="p-4 text-left">Archivo</th>
                <th className="p-4 text-left">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {archivos.map((archivo) => (
                <tr key={archivo.id} className="border-b">
                  <td>{archivo.nombre}</td>
                  <td>
                    <a href={archivo.archivo} target="_blank">
                      Ver
                    </a>
                  </td>

                  <td>
                    <button onClick={() => handleEliminr(archivo.id)}>
                      Eliminar
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
