"use client";

import { consultarCertificados } from "@/services/certificados.service";
import { useEffect, useState } from "react";
import PageContainer from "../ui/layout/PageContainer";
import Table from "../ui/table/DataTable";

export default function HistorialCertificados() {
  const [certificados, setCertificados] = useState<any[]>([]);

  const cargar = async () => {
    const response = await consultarCertificados();
    setCertificados(response.data || []);
  };

  useEffect(() => {
    cargar();
  }, []);

  const headers = ["ID", "Numero Certificado", "Fecha", "Responsable"];
  const rows = certificados.map((cert) => [
    cert.idCertificado,
    cert.numeroCertificado,
    cert.responsable,
  ]);

  return (
    <PageContainer title="Consultar Certificados">
      <Table headers={headers} rows={rows} />
    </PageContainer>
  );
}
