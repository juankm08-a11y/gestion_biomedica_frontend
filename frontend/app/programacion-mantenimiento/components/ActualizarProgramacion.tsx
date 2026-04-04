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
      <form onSubmit={handleSubmit}>
        <label>Equipo</label>
        <select name="equipo" onChange={handleChange} value={data.equipo || ""}>
          <option value="">Seleccionar equipo</option>

          {equipos.map((equipo) => (
            <option key={equipo.idEquipo} value={equipo.idEquipo}>
              {equipo.nombre}
            </option>
          ))}
        </select>

        <label>Frecuencia Mantenimiento</label>
        <input
          type="number"
          name="frecuenciaMantenimiento"
          onChange={handleChange}
          value={data.frecuenciaMantenimiento || ""}
        />
        <label>Frecuencia Calibración</label>
        <input
          type="number"
          name="frecuenciaCalibracion"
          onChange={handleChange}
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

        <label>Proximo Mantenimiento</label>
        <input
          type="date"
          value={data.proximoMantenimiento || ""}
          name="proximoMantenimiento"
          onChange={handleChange}
        />

        <label>Proximo Calibracion</label>
        <input
          type="date"
          value={data.proximoCalibracion || ""}
          onChange={handleChange}
          name="proximoCalibracion"
        />
        <button>Actualizar Programacion</button>
      </form>
    </div>
  );
}
