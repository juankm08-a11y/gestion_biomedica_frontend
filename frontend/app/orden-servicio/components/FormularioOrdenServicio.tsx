"use client";

import { crearOrden } from "@/app/api/ordenes-servicio/ordenesServicio";
import { useState } from "react";

export default function FormularioOrdenServicio() {
  const [ordenData, setOrdenData] = useState({
    mantenimiento: "",
    tipoServicio: "",
    fechaInicio: "",
    fechaFin: "",
    estado: "pendiente",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setOrdenData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await crearOrden(ordenData);

      alert("Orden registrada correctamente");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-x-10 gap-y-6 items-center"
    >
      <label>ID MANTENIMIENTO</label>
      <input
        type="number"
        name="mantenimiento"
        className="border p-2"
        onChange={handleChange}
      />
      <label>TIPO SERVICIO</label>
      <input
        type="text"
        name="tipoServicio"
        className="border p-2"
        onChange={handleChange}
      />
      <label>FECHA INICIO</label>
      <input
        type="date"
        name="fechaInicio"
        className="border p-2"
        onChange={handleChange}
      />
      <label>FECHA FIN</label>
      <input
        type="date"
        name="fechaFin"
        className="border p-2"
        onChange={handleChange}
      />
      <label>ESTADO</label>
      <select name="estado" className="border p-2" onChange={handleChange}>
        <option value="pendiente">Pendiente</option>
        <option value="aprobado">Aprobado</option>
      </select>

      <button className="border px-6 py-3 rounded-full col-span-2">
        Registrar Orden
      </button>
    </form>
  );
}
