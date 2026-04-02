"use client";

import { registrarCertificado } from "@/app/api/mantenimientos/certificado";
import { useState } from "react";

export default function FormularioCertificado() {
  const [certificadoData, setCertificadoData] = useState({
    numeroCertificado: "",
    fecha: "",
    responsable: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCertificadoData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await registrarCertificado(certificadoData);

    alert("Certificado registrado correctamente");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-x-10 gap-y-6 bg-white border border p-8"
    >
      <label>NUMERO CERTIFICADO</label>
      <input
        type="number"
        name="numeroCertificado"
        className="border p-2"
        onChange={handleChange}
      />

      <label>FECHA</label>
      <input type="date" name="fecha" className="border p-2" />

      <label>RESPONSABLE</label>
      <input type="number" name="responsable" className="border p-2" />
    </form>
  );
}
