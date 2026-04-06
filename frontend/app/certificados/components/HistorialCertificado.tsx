"use client";

import { consultarCertificados } from "@/services/certificados.service";
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-full w-[1600px] shadow-md  border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">Consultar Certificados</h1>
        </div>
        <div className="border border-gray-300 overflow-x-auto">
          <table className="w-full min-w-[1200px] text-base">
            <thead className="border-b bg-gray-100">
              <tr>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Numero Certificado</th>
                <th className="p-4 text-left">Fecha</th>
                <th className="p-4 text-left">Responsable</th>
              </tr>
            </thead>
            <tbody>
              {certificados.map((cert) => (
                <tr key={cert.idCertificado} className="border-b">
                  <td className="p-3">{cert.idCertificado}</td>
                  <td className="p-3">{cert.numeroCertificado}</td>
                  <td className="p-3">{cert.fecha}</td>
                  <td className="p-3">{cert.responsable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
