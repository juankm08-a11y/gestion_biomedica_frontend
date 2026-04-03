"use client";

import { registrarCertificado } from "@/app/api/certificados/certificado";
import { consultarUsuarios } from "@/app/api/usuarios/usuario";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FormularioRegistroCertificado() {
  const [usuarios, setUsuarios] = useState<any[]>([]);

  const [data, setData] = useState({
    numeroCertificado: "",
    responsable: "",
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

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      numeroCertificado: Number(data.numeroCertificado),
      responsable: Number(data.responsable),
    };

    await registrarCertificado(payload);

    alert("Certificado registrado correctamente");

    router.push(ROUTES.certificados.CERTIFICADOS);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Numero Certificado</label>
      <input
        type="number"
        name="numeroCertificado"
        value={data.numeroCertificado || ""}
        onChange={handleChange}
      />
      <label>Responsable</label>
      <select
        name="responsable"
        onChange={handleChange}
        value={data.responsable || ""}
      >
        <option value="">Seleccionar responsable</option>

        {usuarios.map((usuario) => (
          <option key={usuario.idUsuario} value={usuario.idUsuario}>
            {usuario.nombre}
          </option>
        ))}
      </select>
    </form>
  );
}
