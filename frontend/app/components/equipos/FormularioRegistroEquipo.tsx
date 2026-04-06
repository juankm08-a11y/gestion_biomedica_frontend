"use client";

import { crearEquipo } from "@/services/equipos.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FormularioBase from "../form/FormularioBase";
import { ROUTES } from "../../routes/routes";
import InputField from "../ui/InputField";
import ButtonGrid from "../layout/ButtonGrid";

export default function FormularioRegistroEquipo() {
  const router = useRouter();

  const [equipoData, setEquipoData] = useState({
    idEquipo: 0,
    nombre: "",
    marca: "",
    modelo: "",
    serie: "",
    fabricante: "",
    tipoTecnologia: "",
    ubicacion: 0,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setEquipoData({
      ...equipoData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await crearEquipo(equipoData);

      alert("Equipo registrado correctamente");

      router.push(ROUTES.dashboard);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormularioBase
      titulo="CREAR HOJA DE VIDA DE EQUIPO"
      onSubmit={handleSubmit}
    >
      <InputField
        label="Nombre"
        name="nombre"
        value={equipoData.nombre || ""}
        onChange={handleChange}
      />

      <InputField
        label="Marca"
        name="marca"
        value={equipoData.marca || ""}
        onChange={handleChange}
      />

      <InputField
        label="Modelo"
        name="modelo"
        value={equipoData.modelo || ""}
        onChange={handleChange}
      />
      <InputField
        label="Serie"
        name="serie"
        value={equipoData.serie || ""}
        onChange={handleChange}
      />
      <InputField
        label="fabricante"
        name="fabricante"
        value={equipoData.fabricante || ""}
        onChange={handleChange}
      />
      <InputField
        label="Tipo Tecnología"
        name="tipoTecnologia"
        value={equipoData.tipoTecnologia || ""}
        onChange={handleChange}
      />
      <InputField
        label="Ubicacion"
        name="ubicacion"
        value={equipoData.ubicacion || ""}
        onChange={handleChange}
      />
      <ButtonGrid>
        <button className="border border-gray-400 px-6 py-2 rounded-full">
          Guardar Equipo
        </button>
        <button
          className="border px-6 py-2 rounded"
          type="button"
          onClick={() => router.push(ROUTES.dashboard)}
        >
          Cancelar
        </button>
      </ButtonGrid>
    </FormularioBase>
  );
}
