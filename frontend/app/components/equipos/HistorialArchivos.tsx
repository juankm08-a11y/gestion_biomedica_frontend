"use client";

import { listarArchivos } from "@/services/archivos.service";
import { useEffect, useState } from "react";
import PageContainer from "../layout/PageContainer";
import Table from "../ui/Table";

export default function HistorialArchivo({ equipoId }: { equipoId: number }) {
  const [archivos, setArchivos] = useState<any[]>([]);

  useEffect(() => {
    cargarArchivos();
  }, []);

  const cargarArchivos = async () => {
    const res = await listarArchivos(equipoId);
    setArchivos(res);
  };

  const headers = ["Nombre", "Archivo"];

  const rows = archivos.map((archivo) => [
    archivo.nombre,
    <a href={archivo.archivo}>Ver</a>,
  ]);

  return (
    <PageContainer title="Historial de Archivos">
      <Table headers={headers} rows={rows} />
    </PageContainer>
  );
}
