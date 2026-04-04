"use client";

import {
  consultarMantenimiento,
  eliminarMantenimiento,
} from "@/app/api/mantenimientos/mantenimiento";
import RoleGuard from "@/app/components/RoleGuard";
import { ROUTES } from "@/app/routes/routes";
import { tieneRol } from "@/app/utils/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HistorialMantenimiento() {
  const [mantenimientos, setMantenimientos] = useState<any[]>([]);
  const [buscar, setBuscar] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (!tieneRol(["superadministrador", "ingenierobiomedico"])) {
      router.push(ROUTES.dashboard.DASHBOARD);
    }
  });

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-full w-[1600px] shadow-md border border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">Consultar Mantenimientos</h1>
        </div>
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Buscar mantenimiento..."
            className="border p-2 flex-1 text-base"
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
          />
          <button className="border px-4 py-2">Buscar</button>
        </div>
      </div>
      <div className="border border-gray-300 overflow-x-auto">
        <table className="w-full min-w-[1200px] text-base">
          <thead className="border-b bg-gray-100">
            <tr>
              <th className="p-4 text-left">EQUIPO</th>
              <th className="p-4 text-left">EQUIPO_NOMBRE</th>
              <th className="p-4 text-left">TIPO</th>
              <th className="p-4 text-left">FECHA INICIO</th>
              <th className="p-4 text-left">FECHA FIN</th>
              <th className="p-4 text-left">ESTADO</th>
              <th className="p-4 text-left">RESPONSABLE</th>
              <th className="p-4 text-left">RESPONSABLE_NOMBRE</th>
            </tr>
          </thead>

          <tbody>
            {mantenimientos.map((mantenimiento) => (
              <tr key={mantenimiento.idMantenimiento} className="border-b">
                <td className="p-3">{mantenimiento.equipo}</td>
                <td className="p-3">{mantenimiento.tipo}</td>
                <td className="p-3">{mantenimiento.estado}</td>
                <td className="p-3">{mantenimiento.fechaInicio}</td>
                <td className="p-3">{mantenimiento.fechaFin}</td>
                <td className="p-3">{mantenimiento.responsable}</td>

                <td className="p-3 flex gap-2">
                  <RoleGuard
                    roles={["superadministrador", "ingenierobiomedico"]}
                  >
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
                  </RoleGuard>
                  <RoleGuard
                    roles={["superadministrador", "ingenierobiomedico"]}
                  >
                    <button
                      onClick={() =>
                        handleEliminar(mantenimiento.idMantenimiento)
                      }
                      className="px-6 py-3 rounded text-base"
                    >
                      Eliminar
                    </button>
                  </RoleGuard>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
