"use client";

import { registrarCertificado } from "@/services/certificados.service";
import { consultarUsuarios } from "@/services/usuario";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
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

    router.push(ROUTES.dashboard.DASHBOARD);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-[900px] shadow-md border border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            REGISTRAR CERTIFICADO
          </h1>
        </div>
        <div className="border boder gray-300 p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
          >
            <label className="font-semibold text-gray-700">
              Numero Certificado
            </label>
            <input
              className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
              type="number"
              name="numeroCertificado"
              value={data.numeroCertificado || ""}
              onChange={handleChange}
            />
            <label className="font-semibold text-gray-700">Responsable</label>
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
        </div>
      </div>
    </div>
  );
}
