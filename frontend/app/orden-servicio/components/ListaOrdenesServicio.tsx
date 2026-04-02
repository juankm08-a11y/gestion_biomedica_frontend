"use client";

import {
  cerrarOrden,
  consultarOrden,
} from "@/app/api/ordenes-servicio/ordenesServicio";
import { useEffect, useState } from "react";

export default function ListaOrdenesServicio() {
  const [ordenes, setOrdenes] = useState<any[]>([]);

  const cargarOrdenes = async () => {
    const response = await consultarOrden();
    setOrdenes(response.data);
  };

  useEffect(() => {
    cargarOrdenes();
  }, []);

  const handleCerrar = async (id: number) => {
    await cerrarOrden(id);
    cargarOrdenes();
  };

  return (
    <table className="w-full text-sm">
      <thead>
        <tr>
          <th className="p-3 text-left">Equipo</th>
          <th className="p-3 text-left">Tipo</th>
          <th className="p-3 text-left">Estado</th>
        </tr>
      </thead>
      <tbody>
        {ordenes.map((orden) => (
          <tr key={orden.id}>
            <td className="p-3">{orden.equipo}</td>
            <td className="p-3">{orden.tipoServicio}</td>
            <td className="p-3">{orden.estado}</td>
            <td className="p-3">
              <button
                onClick={() => handleCerrar(orden.id)}
                className="border px-3 py-2 rounded"
              >
                Cerrar Orden
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
