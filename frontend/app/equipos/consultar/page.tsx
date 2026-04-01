"use client";

import { consultarEquipo } from "@/app/api/equipos/equipo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EquiposPage() {
  const [equipos, setEquipos] = useState<any[]>([]);
  const [buscar, setBuscar] = useState("");

  const router = useRouter();

  const cargarEquipos = async () => {
    try {
      const response = await consultarEquipo();

      setEquipos(response);
    } catch (error) {
      console.error("Error cargando equipos:", error);
    }
  };

  useEffect(() => {
    cargarEquipos();
  }, []);

  const equiposFiltrados = equipos.filter((equipo) =>
    equipo.nombre.toLowerCase().includes(buscar.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 border-[10px] border-gray-600">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Lista Equipos</h1>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Buscar equipo..."
          className="border w-full p-2"
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
        />
        <button className="border p-2 rounded">Buscar</button>
      </div>

      <div className="border bg-white">
        <table className="w-full text-sm">
          <thead className="border-b bg-gray-100">
            <tr>
              <th className="p-3 text-left">NOMBRE</th>
              <th className="p-3 text-left">MARCA</th>
              <th className="p-3 text-left">MODELO</th>
              <th className="p-3 text-left">SERIE</th>
              <th className="p-3 text-left">FABRICANTE</th>
              <th className="p-3 text-left">TIPO TECNOLOGIA</th>
              <th className="p-3 text-left">UBICACION</th>
            </tr>
          </thead>

          <tbody>
            {equiposFiltrados.map((equipo) => (
              <tr key={equipo.idEquipo}>
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

      <div className="flex justify-center gap-6 mt-8">
        <button
          className="border px-6 py-3 rounded-full hover:bg-gray-100"
          onClick={() => router.push("/equipos/registro")}
        >
          Registrar equipo
        </button>
        <button className="border px-6 py-3 rounded-full hover:bg-gray-100">
          Editar Equipo
        </button>
        <button className="border px-6 py-3 rounded-full hover:bg-gray-100">
          Eliminar Equipo
        </button>
      </div>
    </div>
  );
}
