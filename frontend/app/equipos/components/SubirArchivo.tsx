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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-[900px] shadow-md border border border-gray-300 p-10">
        <h1 className="text-2xl font-bold text-gray-800">ADJUNTAR ARCHIVOS</h1>
        <div className="border border-gray-300 p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
          >
            <label className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400">
              Subir archivo
            </label>
            <input type="file" onChange={handleChange} />
            <button>Enviar archivo</button>
          </form>
        </div>
      </div>
    </div>
  );
}
