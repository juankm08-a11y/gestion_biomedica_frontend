"use client";

import { ROUTES } from "@/app/routes/routes";
import { actualizarEquipo, listarEquipos } from "@/services/equipos.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../layout/PageContainer";
import FormularioBase from "../form/FormularioBase";
import InputField from "../ui/InputField";
import ButtonGrid from "../layout/ButtonGrid";

export default function FormularioActualizarEquipo({ id }: any) {
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

  useEffect(() => {
    if (!id || isNaN(id)) return;

    const cargarEquipo = async () => {
      try {
        const response = await listarEquipos();
        setEquipoData(response);
      } catch (error) {
        console.error(error);
      }
    };
    cargarEquipo();
  }, [id]);

  if (!id || isNaN(id)) {
    return <p>Cargando equipo...</p>;
  }

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
      await actualizarEquipo(id, equipoData);

      alert("Equipo actualizado correctmente");

      router.push(ROUTES.dashboard);
    } catch (error) {
      console.error("Error al actualizar equipo: ", error);
    }
  };
  return (
    <PageContainer title="Actualizar Equipo Biomedico">
      <FormularioBase
        titulo="Formulario Actualización Equipo"
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
          label="Fabricante"
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
          label="Ubicación"
          name="ubicación"
          value={equipoData.ubicacion || ""}
          onChange={handleChange}
        />
        <ButtonGrid>
          <button className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium">
            Actualizar Equipo
          </button>
          <button
            type="button"
            onClick={() => router.push(ROUTES.dashboard)}
            className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={() => router.push(ROUTES.dashboard)}
            className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
          >
            Actualizar Ubicacion
          </button>
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
