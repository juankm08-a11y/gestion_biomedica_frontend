"use client";

import { consultarEquipo } from "@/app/api/equipos/equipo";
import { actualizarProgramacion } from "@/app/api/programacionMantenimiento/programacion";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ActualizarProgramacion({ id }: any) {
  const [equipos, setEquipos] = useState<any[]>([]);

  const [data, setData] = useState({
    equipo: "",
    frecuenciaMantenimiento: "",
    frecuenciaCalibracion: "meses",
    unidadFrecuencia: "",
    proximoMantenimiento: "",
    proximoCalibracion: "",
  });

  const router = useRouter();

  useEffect(() => {
    const cargarEquipos = async () => {
      const response = await consultarEquipo();

      setEquipos(Array.isArray(response.data) ? response.data : []);
    };

    cargarEquipos();
  }, [id]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    alibracion: (data.proximoCalibracion || null,
      await actualizarProgramacion(id, data));
    alert("Programación actualizada correctamente");
    router.push(
      ROUTES.programacionMantenimiento.PROGRAMACIONMANTENIMIENTO_CONSULTAR,
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-[900px] shadow-md border border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Actualizar Programacion
          </h1>
        </div>
      </div>
      <div className="border border-gray-300 p-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
        >
          <label className="font-semibold text-gray-700">Equipo</label>
          <select
            name="equipo"
            onChange={handleChange}
            value={data.equipo || ""}
          >
            <option value="">Seleccionar equipo</option>

            {equipos.map((equipo) => (
              <option key={equipo.idEquipo} value={equipo.idEquipo}>
                {equipo.nombre}
              </option>
            ))}
          </select>

          <label className="font-semibold text-gray-700">
            Frecuencia Mantenimiento
          </label>
          <input
            type="number"
            name="frecuenciaMantenimiento"
            onChange={handleChange}
            value={data.frecuenciaMantenimiento || ""}
          />
          <label className="font-semibold text-gray-700">
            Frecuencia Calibración
          </label>
          <input
            type="number"
            name="frecuenciaCalibracion"
            onChange={handleChange}
            className="font-semibold text-gray-700"
            value={data.frecuenciaCalibracion || ""}
          />

          <select
            name="unidadFrecuencia"
            value={data.unidadFrecuencia || ""}
            onChange={handleChange}
          >
            <option value="">Selecciona unidad</option>
            <option value="dias">Dias</option>
            <option value="meses">Meses</option>
            <option value="anios">Años</option>
          </select>

          <label className="font-semibold text-gray-700">
            Proximo Mantenimiento
          </label>
          <input
            type="date"
            value={data.proximoMantenimiento || ""}
            name="proximoMantenimiento"
            onChange={handleChange}
          />

          <label className="font-semibold text-gray-700">
            Proximo Calibracion
          </label>
          <input
            type="date"
            value={data.proximoCalibracion || ""}
            onChange={handleChange}
            name="proximoCalibracion"
          />
          <button
            type="submit"
            className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
          >
            Actualizar Programacion
          </button>
        </form>
      </div>
    </div>
  );
}
