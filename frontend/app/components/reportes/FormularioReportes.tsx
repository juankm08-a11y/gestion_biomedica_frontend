"use client";

import { registrarReporte } from "@/services/reportes.service";
import { useState } from "react";

export default function RegistrarReporte() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [falla, setFalla] = useState("");
  const [archivo, setArchivo] = useState<File | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("falla", falla);

    if (archivo) {
      formData.append("archivo", archivo);
    }

    await registrarReporte();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del reporte"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <textarea
        placeholder="Descripción de la falla"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <input
        type="text"
        placeholder="Tipo de falla"
        value={falla}
        onChange={(e) => setFalla(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setArchivo(e.target.files?.[0] || null)}
      />

      <button type="submit">Reportar falla</button>
    </form>
  );
}
