"use client";

import {
  cerrarOrden,
  consultarOrden,
} from "@/app/api/ordenes-servicio/ordenesServicio";
import { ROUTES } from "@/app/routes/routes";
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

  const handleCancelar = (e: any) => {
    router.push(ROUTES.dashboard.DASHBOARD);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-full w-[1600px] shadow-md  border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">Consultar Orden</h1>
        </div>
      </div>
      <div className="border border-gray-300 overflow-x-auto">
        <table className="w-full min-w-[1200px] text-base">
          <thead className="order-b bg-gray-100">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Mantenimiento</th>
              <th className="p-4 text-left">Tipo Servicio</th>
              <th className="p-4 text-left">Fecha Inicio</th>
              <th className="p-4 text-left">Fecha Fin</th>
              <th className="p-4 text-left">Estado</th>
              <th className="p-4 text-left">Accciones</th>
            </tr>
          </thead>
          <tbody>
            {ordenes.map((orden) => (
              <tr key={orden.idOrden} className="border-b">
                <td className="p-3">{orden.idOrden}</td>
                <td className="p-3">{orden.mantenimiento}</td>
                <td className="p-3">{orden.tipoServicio}</td>
                <td className="p-3">{orden.fechaInicio}</td>
                <td className="p-3">{orden.fechaFin}</td>
                <td className="p-3">{orden.estado}</td>

                <td>
                  <button
                    className="border-8 px-8 py-3 rounded-full"
                    onClick={() => router.push(`/ordenes/${orden.idOrden}`)}
                  >
                    Editar
                  </button>
                  <button
                    className="border-8 px-8 py-3 rounded-full"
                    onClick={() => handleCerrar(orden.idOrden)}
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={() => ROUTES.dashboard.DASHBOARD}
                    className="border-8 px-8 py-3 rounded-full"
                  >
                    Regresar a Dashboard
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
