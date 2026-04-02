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
    frecuenciaCalibracion: "",
    unidadFrecuencia: "",
    proximoMantenimiento: "",
    proximoCalibracion: "",
  });

  const router = useRouter();

  useEffect(() => {
    const cargarEquipos = async () => {
      const response = await consultarEquipo();

      setEquipos(Array.isArray(response) ? response : []);
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

    await actualizarProgramacion(id);

    alert("Programación actualizada correctamente");

    router.push(ROUTES.programacion.PROGRAMACION_CONSULTAR);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Equipo</label>
      <select name="equipo" onChange={handleChange} value={data.equipo}>
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
        value={data.frecuenciaMantenimiento}
      />
      <label>Frecuencia Calibración</label>
      <input
        type="text"
        name="frecuenciaCalibracion"
        onChange={handleChange}
        value={data.frecuenciaCalibracion}
      />

      <select name="unidadFrecuencia" onChange={handleChange}>
        <option value="dias">Dias</option>
        <option value="meses">Meses</option>
        <option value="anios">Años</option>
      </select>
      <button>Actualizar Programacion</button>
    </form>
  );
}
