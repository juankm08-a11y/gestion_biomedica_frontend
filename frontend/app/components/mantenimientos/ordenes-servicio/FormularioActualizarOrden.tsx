"use client";

import { consultarEquipo } from "@/app/api/equipos/equipo";
import { actualizarMantenimiento } from "@/services/mantenimientos.service";
import { consultarOrden } from "@/services/ordenesServicio.service";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FormularioActualizarOrden({ id }: any) {
  if (!id || isNaN(id)) {
    return <p>Cargando Orden...</p>;
  }

  const [mantenimientos, setMantenimientos] = useState<any[]>([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const mantenimientosResponse = await consultarEquipo();

        setOrdenData(
          Array.isArray(mantenimientosResponse.data)
            ? mantenimientosResponse.data
            : [],
        );
      } catch (error) {
        console.error("Error al cargando datos");
      }
    };
    cargarDatos();
  }, []);

  const [ordenData, setOrdenData] = useState({
    mantenimiento: "",
    tipoServicio: "",
    fechaInicio: "",
    fechaFin: "",
    descripcion: "",
    estado: "pendiente",
  });

  const router = useRouter();

  useEffect(() => {
    if (!id || isNaN(id)) return;

    const cargarOrden = async () => {
      try {
        const response = await consultarOrden();
        setOrdenData(response);
      } catch (error) {
        console.error(error);
      }
    };

    cargarOrden();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await actualizarMantenimiento(id, ordenData);

      alert("Mantenimiento actualizado correctamente");

      console.log(response);

      setOrdenData({
        mantenimiento: "",
        tipoServicio: "",
        fechaInicio: "",
        fechaFin: "",
        descripcion: "",
        estado: "pendiente",
      });
      router.push(ROUTES.dashboard.DASHBOARD);
    } catch (error) {
      console.error("Error al actualizar el mantenimiento: ", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setOrdenData({ ...ordenData, [name]: value });
  };

  const handleCancelar = () => {
    router.push(ROUTES.mantenimientos.MANTENIMIENTOS_CONSULTAR);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-full w-[1600px] shadow-md  border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">Actualizar Orden</h1>
        </div>
      </div>
      <div className="border border-gray-300 p-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
        >
          <label className="font-semibold text-gray-700">MANTENIMIENTO</label>
          <select
            name="mantenimiento"
            onChange={handleChange}
            value={ordenData.mantenimiento || ""}
            className="border p-2"
          >
            <option value="">Seleccionar mantenimiento</option>
            {mantenimientos.map((mantenimiento) => (
              <option
                key={mantenimiento.idMantenimiento}
                value={mantenimiento.idMantenimiento}
              >
                {mantenimiento.nombre}
              </option>
            ))}
          </select>

          <label className="font-semibold text-gray-700">TIPO SERVICIO</label>
          <input
            type="text"
            value={ordenData.tipoServicio || ""}
            name="tipoServicio"
            placeholder="tipoServicio"
            className="border p-2"
            onChange={handleChange}
          />

          <label className="font-semibold text-gray-700">FECHA INICIO</label>
          <input
            type="date"
            name="fechaInicio"
            onChange={handleChange}
            value={ordenData.fechaInicio || ""}
          />

          <label className="font-semibold text-gray-700">FECHA FIN</label>
          <input
            type="date"
            name="fechaFin"
            onChange={handleChange}
            value={ordenData.fechaFin || ""}
          />

          <label className="font-semibold text-gray-700">DESCRIPCION</label>
          <input
            type="text"
            value={ordenData.descripcion || ""}
            name="descripcion"
            placeholder="descripcion"
            className="border p-2"
            onChange={handleChange}
          />

          <select
            name="estado"
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
            value={ordenData.estado || ""}
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

          <button
            type="submit"
            className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
          >
            Actualizar Orden
          </button>
          <button
            type="button"
            className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
