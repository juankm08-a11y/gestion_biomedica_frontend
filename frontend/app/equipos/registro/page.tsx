"use client";

import { registrarEquipo } from "@/app/api/equipos/equipo";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormularioRegistro() {
  const [equipoData, setEquipoData] = useState({
    nombre: "",
    marca: "",
    modelo: "",
    serie: "",
    fabricante: "",
    tipoTecnologia: "",
    ubicacion: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await registrarEquipo(equipoData);

      alert("Equipo registrado correctamente");
      console.log(response);

      setEquipoData({
        nombre: "",
        marca: "",
        modelo: "",
        serie: "",
        fabricante: "",
        tipoTecnologia: "",
        ubicacion: "",
      });

      router.push(ROUTES.equipos.EQUIPOS_VER);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setEquipoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancelar = () => {
    router.push(ROUTES.dashboard.DASHBOARD);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-[900px] shadow-md border border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            REGISTRO DE HOJAS DE VIDA DE EQUIPOS BIOMEDICOS
          </h1>
        </div>
        <div className="border border-gray-300 p-8">
          <h2 className="text-center font-semibold mb-6">
            FORMULARIO DE REGISTRO
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
          >
            <label className="font-semibold text-gray-700">NOMBRE</label>
            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="text"
              placeholder="Nombre:"
              name="nombre"
              value={equipoData.nombre}
              onChange={handleChange}
            />
            <label className="font-semibold text-gray-700">MARCA</label>
            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="text"
              placeholder="Marca:"
              name="marca"
              onChange={handleChange}
              value={equipoData.marca}
            />
            <label className="font-semibold text-gray-700">MODELO</label>
            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="text"
              name="modelo"
              placeholder="Modelo:"
              value={equipoData.modelo}
              onChange={handleChange}
            />
            <label className="font-semibold text-gray-700">SERIE</label>
            <input
              type="text"
              name="serie"
              placeholder="Serie:"
              onChange={handleChange}
              value={equipoData.serie}
            />
            <label className="font-semibold text-gray-700">FABRICANTE</label>
            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="text"
              name="fabricante"
              placeholder="Fabricante:"
              value={equipoData.fabricante}
              onChange={handleChange}
            />
            <label className="font-semibold text-gray-700">
              TIPO TECNOLOGIA
            </label>
            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="text"
              name="tipoTecnologia"
              placeholder="tipo tecnologia: "
              onChange={handleChange}
              value={equipoData.tipoTecnologia}
            />
            <label className="font-semibold text-gray-700">UBICACION</label>
            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="number"
              name="ubicacion"
              onChange={handleChange}
              placeholder="ubicacion:"
              value={equipoData.ubicacion}
            />
            <button
              className="col-span-2 mx-auto mt-4 border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100"
              onClick={() => router.push(ROUTES.ubicaciones.UBICACION_CREAR)}
            >
              Actualizar Ubicacion
            </button>

            <button className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium">
              Guardar Equipo
            </button>
            <button
              className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
              onClick={handleCancelar}
              type="button"
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
