"use client";

import { consultarEquipo, eliminarEquipo } from "@/app/api/equipos/equipo";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ListaEquipos() {
  const [equipos, setEquipos] = useState<any[]>([]);
  const [buscar, setBuscar] = useState("");

  const router = useRouter();

  const cargarEquipos = async () => {
    try {
      const response = await consultarEquipo();

      setEquipos(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarEquipos();
  }, []);

  const equiposFiltrados = equipos.filter((equipo) =>
    equipo.nombre.toLowerCase().includes(buscar.toLowerCase()),
  );

  const handleEliminar = async (id: number) => {
    if (!confirm("¿Deseas eliminar este equipo?")) return;

    alert("Equipo eliminado correctamente");

    await eliminarEquipo(id);

    cargarEquipos();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-full w-[1600px] shadow-md border border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">Lista de Equipos</h1>
        </div>
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Buscar equipo..."
            className="border p-2 flex-1 text-base"
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
          />
          <button className="border px-4 py-2">Buscar</button>
        </div>

        <div className="border border-gray-300 overflow-x-auto">
          <table className="w-full min-w-[1200px] text-base">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-4 text-left">NOMBRE</th>
                <th className="p-4 text-left">MARCA</th>
                <th className="p-4 text-left">MODELO</th>
                <th className="p-4 text-left">SERIE</th>
                <th className="p-4 text-left">FABRICANTE</th>
                <th className="p-4 text-left">TIPO TECNOLOGIA</th>
                <th className="p-4 text-left">UBICACION</th>
              </tr>
            </thead>

            <tbody>
              {equiposFiltrados.map((equipo) => (
                <tr key={equipo.idEquipo} className="border-b">
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => router.push(`/equipos/${equipo.idEquipo}`)}
                      className="px-6 py-3 rounded text-base"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminar(equipo.idEquipo)}
                      className="px-6 py-3 rounded text-base"
                    >
                      Eliminar
                    </button>
                  </td>
                  <td className="p-3">{equipo.nombre}</td>
                  <td className="p-3">{equipo.marca}</td>
                  <td className="p-3">{equipo.modelo}</td>
                  <td className="p-3">{equipo.serie}</td>
                  <td className="p-3">{equipo.fabricante}</td>
                  <td className="p-3">{equipo.tipoTecnologia}</td>
                  <td className="p-3">{equipo.ubicacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={() => router.push(ROUTES.equipos.EQUIPO_CREAR)}
            className="border-8 px-8 py-3 rounded-full"
          >
            Registrar equipo
          </button>
          <button
            onClick={() => ROUTES.dashboard.DASHBOARD}
            className="border-8 px-8 py-3 rounded-full"
          >
            Regresar a Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
