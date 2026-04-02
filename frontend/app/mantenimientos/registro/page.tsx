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
    estado: "pendiente",
    responsable: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await registrarMantenimiento(mantenimientoData);

      alert("Mantenimiento registrado correctamente");

      console.log(response);

      setMantenimientoData({
        equipo: "",
        tipo: "",
        fechaInicio: "",
        fechaFin: "",
        estado: "pendiente",
        responsable: "",
      });

      router.push(ROUTES.mantenimientos.MANTENIMIENTOS_CONSULTAR);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = async (e: any) => {
    const { name, value } = e.target;

    setMantenimientoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
    >
      <label className="font-semibold text-gray-700">EQUIPO ID</label>
      <input
        type="number"
        name="equipo"
        onChange={handleChange}
        className="border p-2"
      />

      <label className="font-semibold text-gray-700">TIPO</label>
      <input name="tipo" onChange={handleChange} className="border p-2" />

      <label className="font-semibold text-gray-700">FECHA INICIO</label>
      <input
        type="date"
        name="fechaInicio"
        onChange={handleChange}
        className="border p-2"
      />

      <label className="font-semibold text-gray-700">FECHA FIN</label>
      <input
        type="date"
        name="fechaFin"
        onChange={handleChange}
        className="border p-2"
      />

      <label className="font-semibold text-gray-700">ESTADO</label>
      <select name="estado" onChange={handleChange} className="border p-2">
        <option value="pendiente">Pendiente</option>
        <option value="en_proceso">En proceso</option>
        <option value="finalizado">Finalizado</option>
      </select>

      <label className="font-semibold text-gray-700">RESPONSABLE ID</label>
      <input
        type="number"
        name="responsable"
        onChange={handleChange}
        className="border p-2"
      />

      <button className="border px-6 py-3 rounded-full col-span-2">
        Registrar mantenimiento
      </button>
    </form>
  );
}
