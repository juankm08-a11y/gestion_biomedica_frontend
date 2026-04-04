"use client";

import { consultarEquipo } from "@/app/api/equipos/equipo";
import {
  actualizarMantenimiento,
  consultarMantenimiento,
} from "@/app/api/mantenimientos/mantenimiento";
import { consultarUsuarios } from "@/app/api/usuarios/usuario";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FormularioActualizarMantenimiento({ id }: any) {
  if (!id || isNaN(id)) {
    return <p>Cargando Mantenimiento...</p>;
  }

  const [equipos, setEquipos] = useState<any[]>([]);
  const [usuarios, setUsuarios] = useState<any[]>([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const equiposResponse = await consultarEquipo();
        const usuariosResponse = await consultarUsuarios();

        setEquipos(
          Array.isArray(equiposResponse.data) ? equiposResponse.data : [],
        );
        setUsuarios(Array.isArray(usuariosResponse) ? usuariosResponse : []);
      } catch (error) {
        console.error("Error al cargando datos");
      }
    };
    cargarDatos();
  }, []);

  const [mantenimientoData, setMantenimientoData] = useState({
    equipo: "",
    tipo: "",
    estado: "pendiente",
    fechaInicio: "",
    fechaFin: "",
    responsable: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (!id || isNaN(id)) return;

    const cargarMantenimiento = async () => {
      try {
        const response = await consultarMantenimiento();
        setMantenimientoData(response);
      } catch (error) {
        console.error(error);
      }
    };

    cargarMantenimiento();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await actualizarMantenimiento(id, mantenimientoData);

      alert("Mantenimiento actualizado correctamente");

      console.log(response);

      setMantenimientoData({
        equipo: "",
        tipo: "",
        estado: "pendiente",
        fechaInicio: "",
        fechaFin: "",
        responsable: "",
      });
      router.push(ROUTES.mantenimientos.MANTENIMIENTOS_CONSULTAR);
    } catch (error) {
      console.error("Error al actualizar el mantenimiento: ", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setMantenimientoData({ ...mantenimientoData, [name]: value });
  };

  const handleCancelar = () => {
    router.push(ROUTES.mantenimientos.MANTENIMIENTOS_CONSULTAR);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-[900px] shadow-md border border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            ACTUALIZAR MANTENIMIENTO
          </h1>
        </div>
      </div>
      <div className="order border-gray-300 p-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
        >
          <label className="font-semibold text-gray-700">EQUIPO</label>
          <input
            type="text"
            name="equipo"
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
            value={mantenimientoData.equipo || ""}
            onChange={handleChange}
          />
          <label className="font-semibold text-gray">TIPO</label>
          <select
            name="equipo"
            onChange={handleChange}
            value={mantenimientoData.equipo || ""}
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
          >
            <option value="">Seleccionar equipo</option>
            {equipos.map((equipo) => (
              <option key={equipo.idEquipo} value={equipo.idEquipo}>
                {equipo.nombre}
              </option>
            ))}
          </select>

          <label className="font-semibold text-gray-700">TIPO</label>
          <input
            type="text"
            value={mantenimientoData.tipo || ""}
            name="tipo"
            placeholder="Tipo"
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
            onChange={handleChange}
          />
          <label className="text-gray-700">ESTADO</label>
          <select
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
            name="estado"
            value={mantenimientoData.estado || ""}
            onChange={handleChange}
          >
            <option value="aprobado" className="p-3">
              aprobado
            </option>
            <option value="pendiente" className="p-3">
              pendiente
            </option>
            <option value="ejecutado" className="p-3">
              ejecutado
            </option>
          </select>

          <label className="font-semibold text-gray-700">FECHA INICIO</label>
          <input
            type="date"
            name="fechaInicio"
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
            onChange={handleChange}
            value={mantenimientoData.fechaInicio || ""}
          />

          <label>FECHA FIN</label>
          <input
            type="date"
            name="fechaFin"
            onChange={handleChange}
            value={mantenimientoData.fechaFin || ""}
          />

          <label>RESPONSABLE</label>
          <select
            name="responsable"
            onChange={handleChange}
            value={mantenimientoData.responsable || ""}
          >
            <option value="">Seleccionar responsable</option>
            {usuarios.map((usuario) => (
              <option key={usuario.idUsuario} value={usuario.idUsuario}>
                {usuario.nombre}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
          >
            Actualizar Mantenimiento
          </button>
        </form>
        <button
          type="button"
          className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
        >
          Cancelar
        </button>
        <button
          className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
          onClick={() => router.push(ROUTES.dashboard.DASHBOARD)}
        >
          Regresar a Dashboard
        </button>
      </div>
    </div>
  );
}
