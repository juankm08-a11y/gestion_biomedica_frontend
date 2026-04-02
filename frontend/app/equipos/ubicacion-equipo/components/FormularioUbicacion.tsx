"use client";

import { registrarUbicacion } from "@/app/api/equipos/ubicacion";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormularioUbicacion() {
  const [ubicacionData, setUbicacionData] = useState({
    sede: "",
    departamento: "",
    ciudad: "",
    area: "",
    detalle: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await registrarUbicacion(ubicacionData);

      alert("Ubicacion registrada correctamente");

      setUbicacionData({
        sede: "",
        departamento: "",
        ciudad: "",
        area: "",
        detalle: "",
      });

      console.log(response);
      router.push(ROUTES.equipos.EQUIPOS_VER);
    } catch (error) {
      console.error("error al registrar ubicacion: ", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUbicacionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancelar = () => {
    router.push(ROUTES.equipos.EQUIPOS_VER);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          REGISTRO DE HOJAS DE VIDA DE EQUIPOS BIOMEDICOS
        </h1>
        <div className="border border-gray-300 p-8">
          <h2 className="text-center font-semibold mb-6">
            FORMULARIO DE REGISTRO DE UBICACION
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
          >
            <label className="font-semibold text-gray-700">SEDE</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              name="sede"
              placeholder="sede"
              onChange={handleChange}
            />
            <label>DEPARTAMENTO</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              name="departamento"
              placeholder="departamento"
              onChange={handleChange}
            />
            <label>CIUDAD</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              name="ciudad"
              placeholder="ciudad"
              onChange={handleChange}
            />
            <label>AREA</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              name="area"
              placeholder="area"
              onChange={handleChange}
            />
            <label>DETALLE</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              name="detalle"
              placeholder="detalle"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
            >
              Registrar Ubicacion
            </button>
          </form>

          <button
            className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
            onClick={handleCancelar}
            type="button"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
            onClick={() => router.push(ROUTES.equipos.EQUIPO_CREAR)}
          >
            Regresar a Lista Equipos
          </button>
        </div>
      </div>
    </div>
  );
}
