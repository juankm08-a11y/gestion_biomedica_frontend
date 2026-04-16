"use client";

import { listarArchivos } from "@/services/archivos.service";
import PageContainer from "../ui/layout/PageContainer";
import DataTable, { Column } from "../ui/table/DataTable";
import { useFetch } from "@/hooks/useFetch";
import { ArchivoAdjuntoResponse } from "@/types/ArchivoAdjunto.type";

export default function HistorialArchivo({ equipoId }: { equipoId: number }) {
  const { data: archivos } = useFetch<ArchivoAdjuntoResponse[]>(
    () => listarArchivos(equipoId),
    [equipoId],
  );

  const columns: Column<ArchivoAdjuntoResponse>[] = [
    {
      key: "nombre",
      label: "Nombre",
    },
    {
      key: "archivo",
      label: "Archivo",
      render: (archivo) => (
        <a
          href={archivo.archivo}
          target="_blank"
          className="text-blue-600 underline"
        >
          Ver
        </a>
      ),
    },
  ];

  return (
    <PageContainer>
      <DataTable data={archivos ?? []} columns={columns} />
    </PageContainer>
  );
}
