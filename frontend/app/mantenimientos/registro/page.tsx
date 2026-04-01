"use client";

import { registrarMantenimiento } from "@/app/api/mantenimientos/mantenimiento";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormularioMantenimiento() {
  const [mantenimientoData, setMantenimientoData] = useState({
    equipo: "",
    tipo: "",
    fechaInicio: "",
    fechaFin: "",
    estado: "",
    responsable: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const response = await registrarMantenimiento(mantenimientoData);

      alert("Mantenimiento registrado correctamente");
      console.log(response);

      router.push(ROUTES.dashboard.DASHBOARD);

      setMantenimientoData({
        equipo: "",
        tipo: "",
        fechaInicio: "",
        fechaFin: "",
        estado: "",
        responsable: "",
      });
    } catch (error) {
      console.error("Error al registrar mantenimiento: ", error);
    }

    const handleChange = (e: any) => {
      const { name, value } = e.target;

      setMantenimientoData({
        ...mantenimientoData,
        [name]: value,
      });
    };

    const handleCancelar = () => {
      router.push(ROUTES.dashboard.DASHBOARD);
    };
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <h1>FORMULARIO DE REGISTRO DE MANTENIMIENTOS</h1>
      <div>
        <h2>Formulario de registro</h2>

        <form></form>
      </div>
    </div>
  );
}
