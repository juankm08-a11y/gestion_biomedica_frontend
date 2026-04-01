"use client";

import { registrarMantenimiento } from "@/app/api/mantenimientos/mantenimiento";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormularioMantenimiento() {
  const [mantenimientoData, setMantenimientoData] = useState({
    equipo: "",
    tipo: "",
    fechaInicio: "",
    fechaFin: "",
    estado: "",
    responsable: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const response = await registrarMantenimiento(mantenimientoData);

      alert("Mantenimiento registrado correctamente");
      console.log(response);

      router.push(ROUTES.dashboard.DASHBOARD);

      setMantenimientoData({
        equipo: "",
        tipo: "",
        fechaInicio: "",
        fechaFin: "",
        estado: "",
        responsable: "",
      });
    } catch (error) {
      console.error("Error al registrar mantenimiento: ", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setMantenimientoData({
      ...mantenimientoData,
      [name]: value,
    });
  };

  const handleCancelar = () => {
    router.push(ROUTES.dashboard.DASHBOARD);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-[900px] shadow-md border border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            FORMULARIO DE REGISTRO DE MANTENIMIENTOS
          </h1>
        </div>
        <div className="border border-gray-300 p-8">
          <h2 className="text-center font-semibold mb-6">
            Formulario de registro
          </h2>

          <form className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto">
            <label className="font-semibold text-gray-700">EQUIPO</label>
            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="text"
              name="equipo"
              onChange={handleChange}
              value={mantenimientoData.equipo}
              placeholder="Equipo"
            />
            <label className="font-semibold text-gray-700">TIPO</label>

            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="text"
              name="tipo"
              onChange={handleChange}
              value={mantenimientoData.tipo}
              placeholder="Tipo"
            />
            <label className="font-semibold text-gray-700">FECHA INICIO</label>
            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="text"
              name="fechaInicio"
              value={mantenimientoData.fechaInicio}
              onChange={handleChange}
              placeholder="fechaInicio"
            />
            <label className="font-semibold text-gray-700">FECHA FIN</label>
            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="text"
              name="fechaFin"
              value={mantenimientoData.fechaFin}
              onChange={handleChange}
              placeholder="fechaFin"
            />
            <label className="font-semibold text-gray-700">ESTADO</label>
            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="text"
              name="estado"
              value={mantenimientoData.estado}
              onChange={handleChange}
              placeholder="estado"
            />
            <label className="font-semibold text-gray-700">RESPONSABLE</label>
            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="text"
              name="responsable"
              value={mantenimientoData.responsable}
              onChange={handleChange}
              placeholder="responsable"
            />
            <button className="col-span-2 mx-auto mt-4 border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100">
              Registrar Mantenimiento
            </button>

            <button
              className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
              onClick={handleCancelar}
              type="button"
            >
              Cancelar
            </button>
            <button
              className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
              onClick={() => router.push(ROUTES.dashboard.DASHBOARD)}
            >
              Regresar a Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
