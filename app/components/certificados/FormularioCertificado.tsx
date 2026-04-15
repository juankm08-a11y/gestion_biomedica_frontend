"use client";

import { ROUTES } from "@/app/routes/routes";
import { registrarCertificado } from "@/services/certificados.service";
import { consultarUsuarios } from "@/services/usuario.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormularioBase from "../ui/form/FormularioBase";
import InputField from "../ui/input/InputField";
import SelectField from "../ui/input/SelectField";
import ButtonGrid from "../ui/layout/ButtonGrid";

export default function FormularioRegistroCertificado() {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [certificadoData, setCertificadoData] = useState({
    idCertificado: 0,
    numeroCertificado: 0,
    responsable: 0,
    fecha: "",
  });

  const router = useRouter();

  useEffect(() => {
    const cargarUsuarios = async () => {
      const response = await consultarUsuarios();
      setUsuarios(Array.isArray(response) ? response : []);
    };
    cargarUsuarios();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setCertificadoData({
      ...certificadoData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      idCertificado: Number(certificadoData.idCertificado),
      numeroCertificado: Number(certificadoData.numeroCertificado),
      responsable: Number(certificadoData.responsable),
      fecha: String(certificadoData.fecha),
    };

    await registrarCertificado(payload);

    alert("Certificado registrado correctamente");

    router.push(ROUTES.certificados.LISTA);
  };

  return (
    <FormularioBase titulo="Registrar Certificado" onSubmit={handleSubmit}>
      <InputField
        label="Id Certificado"
        name="idCertificado"
        value={certificadoData.idCertificado}
        onChange={handleChange}
        type="number"
      />

      <InputField
        label="Numero Certificado"
        name="numeroCertificado"
        value={certificadoData.numeroCertificado}
        onChange={handleChange}
        type="number"
      />
      <SelectField
        label="Responsable"
        name="responsable"
        value={certificadoData.responsable.toString()}
        onChange={handleChange}
        options={usuarios.map((usuario) => ({
          value: usuario.idUsuario,
          label: usuario.nombre,
        }))}
      />
      <ButtonGrid>
        <button
          type="submit"
          className="px-8 py-3 rounded-full bg-blue-500 text-white"
        >
          Registrar Certificado
        </button>
        <button
          type="button"
          className="px-8 py-3 rounded-full bg-blue-500 text-white"
          onClick={() => router.push(ROUTES.certificados.LISTA)}
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={() => router.push(ROUTES.dashboard)}
          className="px-8 py-3 rounded-full bg-blue-500 text-white"
        >
          Regresar a Dashboard
        </button>
      </ButtonGrid>
    </FormularioBase>
  );
}
