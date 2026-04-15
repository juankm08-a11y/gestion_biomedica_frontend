"use client";
import { subirArchivo } from "@/services/archivos.service";
import { useState } from "react";
import PageContainer from "../ui/layout/PageContainer";
import FormularioBase from "../ui/form/FormularioBase";
import ButtonGrid from "../ui/layout/ButtonGrid";

export default function SubirArchivo({ equipoId }: { equipoId: number }) {
  const [archivo, setArchivo] = useState<File | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!archivo) {
      alert("Seleccione un archivo");
      return;
    }

    await subirArchivo(equipoId, archivo);
    alert("Archivo subido correctamente");
  };
  return (
    <PageContainer>
      <FormularioBase titulo="Subir Archivo" onSubmit={handleSubmit}>
        <label>Archivo</label>
        <input
          type="file"
          onChange={(e: any) => setArchivo(e.target.files[0])}
        />
        <ButtonGrid>
          <button className="border px-6 py-2 rounded">Subir</button>
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
