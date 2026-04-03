"use client";

import { consultarCertificados } from "@/app/api/certificados/certificado";
import { useEffect, useState } from "react";

export default function HistorialCertificados() {
  const [certificados, setCertificados] = useState<any[]>([]);

  const cargar = async () => {
    const response = await consultarCertificados();

    setCertificados(response.data || []);
  };

  useEffect(() => {
    cargar();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Numero Certificado</th>
          <th>Fecha</th>
          <th>Responsable</th>
        </tr>
      </thead>
      <tbody>
        {certificados.map((cert) => (
          <tr key={cert.idCertificado}>
            <td>{cert.idCertificado}</td>
            <td>{cert.numeroCertificado}</td>
            <td>{cert.fecha}</td>
            <td>{cert.responsable}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
