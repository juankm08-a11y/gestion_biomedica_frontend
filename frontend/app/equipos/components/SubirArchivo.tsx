"use client";

import { subirArchivo } from "@/app/api/archivosAdjuntos/archivoAdjunto";
import { useState } from "react";

export default function SubirArchivo({ equipoId }: { equipoId: number }) {
  const [archivo, setArchivo] = useState<File | null>(null);

  const handleChange = (e: any) => {
    setArchivo(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("ID Del equipo: ", equipoId);
    if (!archivo) {
      alert("Selecciona un archivo");
      return;
    }

    await subirArchivo(equipoId, archivo);

    alert("Archivo subido correctamente");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      <button>Enviar archivo</button>
    </form>
  );
}
