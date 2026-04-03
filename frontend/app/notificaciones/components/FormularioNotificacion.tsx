"use client";

import { crearNotificacion } from "@/app/api/notificaciones/notificacion";
import { useState } from "react";

export default function FormularioNotificaciones() {
  const [data, setData] = useState({
    mensaje: "",
    tipo: "",
    destinatario: "",
    estado: "pendiente",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    await crearNotificacion(data);

    alert("Notificación creada correctamente");

    setData({
      mensaje: "",
      tipo: "",
      destinatario: "",
      estado: "pendiente",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="mensaje"
        placeholder="mensaje"
        value={data.mensaje}
        onChange={handleChange}
      />
      <select name="estado" value={data.estado || ""} onChange={handleChange}>
        <option value="">Seleciona estado </option>
        <option value="pendiente">PENDIENTE</option>
        <option value="aprobado">APROBADO</option>
        <option value="ejecutado">EJECUTADO</option>
      </select>

      <select name="tipo" value={data.tipo || ""} onChange={handleChange}>
        <option value="">Seleciona tipo </option>
        <option value="mantenimiento">MANTENIMIENTO</option>
        <option value="calibracion">CALIBRACION</option>
        <option value="falla">FALLA</option>
        <option value="sistema">SISTEMA</option>
      </select>
      <input
        type="email"
        name="destinatario"
        placeholder="Destinatario"
        value={data.destinatario}
        onChange={handleChange}
      />

      <button>Crear notificacion</button>
    </form>
  );
}
