"use client";

import {
  cerrarOrden,
  consultarOrden,
} from "@/app/api/ordenes-servicio/ordenesServicio";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HistorialOrdenes() {
  const [ordenes, setOrdenes] = useState<any[]>([]);
  const router = useRouter();

  const cargarOrdenes = async () => {
    const response = await consultarOrden();
    setOrdenes(Array.isArray(response) ? response : []);
  };

  useEffect(() => {
    cargarOrdenes();
  }, []);

  const handleCerrar = async (id: number) => {
    if (!confirm("¿Deseas cerrar esta orden?")) return;

    await cerrarOrden(id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Mantenimiento</th>
          <th>Tipo Servicio</th>
          <th>Fecha Inicio</th>
          <th>Fecha Fin</th>
          <th>Estado</th>
          <th>Accciones</th>
        </tr>
      </thead>
      <tbody>
        {ordenes.map((orden) => (
          <tr key={orden.idOrden}>
            <td>{orden.idOrden}</td>
            <td>{orden.mantenimiento}</td>
            <td>{orden.tipoServicio}</td>
            <td>{orden.fechaInicio}</td>
            <td>{orden.fechaFin}</td>
            <td>{orden.estado}</td>

            <td>
              <button onClick={() => router.push(`/ordenes/${orden.idOrden}`)}>
                Editar orden
              </button>
              <button onClick={() => handleCerrar(orden.idOrden)}>
                Cerrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
