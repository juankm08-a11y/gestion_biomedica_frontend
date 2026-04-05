"use client";

import { consultarEquipo } from "@/app/api/equipos/equipo";
import { crearProgramacion } from "@/app/api/programacionMantenimiento/programacion";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FormularioRegistroProgramacion() {
  const [equipos, setEquipos] = useState<any[]>([]);

  const router = useRouter();
  const [programaciones, setProgramaciones] = useState<any[]>([]);
  const [programacionData, setProgramacionData] = useState({
    equipo: "",
    frecuenciaMantenimiento: "",
    frecuenciaCalibracion: "",
    unidadFrecuencia: "dias",
  });

  useEffect(() => {
    const cargarEquipos = async () => {
      const response = await consultarEquipo();
      setEquipos(Array.isArray(response.data) ? response.data : []);
    };

    cargarEquipos();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setProgramacionData({
      ...programacionData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await crearProgramacion(programacionData);

    alert("Programacion registrada correctamente");

    router.push(
      ROUTES.programacionMantenimiento.PROGRAMACIONMANTENIMIENTO_CONSULTAR,
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <form onSubmit={handleSubmit}>
        <label>Equipo</label>
        <select
          name="equipo"
          onChange={handleChange}
          value={programacionData.equipo}
        >
          <option value="">Seleccionar equipo</option>

          {equipos.map((equipo) => (
            <option key={equipo.idEquipo} value={equipo.idEquipo}>
              {equipo.nombre}
            </option>
          ))}
        </select>

        <label>Frecuencia Mantenimiento</label>
        <input
          type="text"
          name="frecuenciaMantenimiento"
          onChange={handleChange}
          value={programacionData.frecuenciaMantenimiento}
        />
        <label>Frecuencia Calibración</label>
        <input
          type="text"
          name="frecuenciaCalibracion"
          onChange={handleChange}
          value={programacionData.frecuenciaCalibracion}
        />

        <select name="unidadFrecuencia" onChange={handleChange}>
          <option value="dias">Dias</option>
          <option value="meses">Meses</option>
          <option value="anios">Años</option>
        </select>
        <button>Registrar Programacion</button>
      </form>
    </div>
  );
}
