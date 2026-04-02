"use client";

import { cargarArchivoAdjunto } from "@/app/api/archivosAdjuntos/archivoAdjunto";
import { useState } from "react";

export default function ArchivosAdjuntosPanel() {
  const [equipoId, setEquipoId] = useState("");
  const [archivo, setArchivo] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!archivo) return;

    const formData = new FormData();

    await cargarArchivoAdjunto(formData);

    alert("Archivo subido correctamente");
  };

  return (
    <div>
      <h1>Archivos Adjuntos</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="ID del equipo"
          value={equipoId}
          onChange={(e) => setEquipoId(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setArchivo(e.target.files[0]);
            }
          }}
        />

        <button>Subir Archivo</button>
      </form>
    </div>
  );
}
