"use client";

import { consultarCertificados } from "@/services/certificados.service";
import PageContainer from "../ui/layout/PageContainer";
import { useFetch } from "@/hooks/useFetch";
import { CertificadoMetrologicoResponse } from "@/types/Certificado.type";
import DataTable, { Column } from '../ui/table/DataTable';

export default function HistorialCertificados() {
   const {data:certificados} = useFetch<CertificadoMetrologicoResponse[]>(
    consultarCertificados,
    []
   )

   const columns: Column<CertificadoMetrologicoResponse>[] = [
    {
      key:"idCertificado",
      label:"ID",
    },
    {
      key:"numeroCertificado",
      label:"Numero Certificado",
    },
    {
      key:"fecha",
      label:"Fecha",
    },
    {
      key:"responsable",
      label:"Responsable",
    }
   ]

  return (
    <PageContainer>
      <DataTable data={certificados ?? []}columns={columns} />
    </PageContainer>
  );
}
