"use client";

import { consultarMantenimiento } from "@/services/mantenimientos.service";
import { crearOrden } from "@/services/ordenesServicio.service";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FormularioRegistroOrden() {
  const [mantenimientos, setMantenimientos] = useState<any[]>([]);
  const [ordenData, setOrdenData] = useState({
    mantenimiento: "",
    tipoServicio: "",
    descripcion: "",
    estado: "pendiente",
  });

  const router = useRouter();

  useEffect(() => {
    const cargar = async () => {
      const data = await consultarMantenimiento();
      setMantenimientos(Array.isArray(data) ? data : []);
    };
    cargar();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setOrdenData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      ...ordenData,
      mantenimiento: Number(ordenData.mantenimiento),
    };

    await crearOrden(payload);

    alert("Orden registrada correctamente");

    router.push(ROUTES.dashboard.DASHBOARD);
  };

  const handleCancelar = (e: any) => {
    router.push(ROUTES.dashboard.DASHBOARD);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-[900px] shadow-md border border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Registrar Orden</h1>
        </div>
      </div>
      <div className="border border-gray-300 p-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
        >
          <label className="font-semibold text-gray-700">Mantenimiento</label>
          <select
            name="mantenimiento"
            onChange={handleChange}
            value={ordenData.mantenimiento || ""}
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
          >
            <option value="" className="px-2 text-left">
              Seleccionar mantenimiento
            </option>
            {mantenimientos.map((mantenimiento) => (
              <option
                key={mantenimiento.idMantenimiento}
                value={mantenimiento.idMantenimiento}
              >
                {mantenimiento.idMantenimiento}
              </option>
            ))}
          </select>

          <label className="font-semibold text-gray-700">Tipo Servicio</label>
          <input
            type="text"
            name="tipoServicio"
            value={ordenData.tipoServicio}
            onChange={handleChange}
            placeholder="Tipo Servicio"
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
          />

          <label className="font-semibold text-gray-700">Descripcion</label>
          <input
            type="text"
            name="descripcion"
            value={ordenData.descripcion || ""}
            placeholder="Descripcion"
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
          />

          <select
            name="estado"
            value={ordenData.estado || ""}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
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
            Guardar Orden
          </button>
          <button
            type="button"
            className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
          >
            Cancelar
          </button>
          <button
            onClick={() => router.push(ROUTES.dashboard.DASHBOARD)}
            type="button"
            className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
          >
            Regresar a Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
