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
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Archivo</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {archivos.map((archivo) => (
          <tr key={archivo.id}>
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
  );
}
