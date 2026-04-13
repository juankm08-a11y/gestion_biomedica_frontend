"use client";
import { ROUTES } from "@/app/routes/routes";
import { registrarUbicacion } from "@/services/ubicaciones.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PageContainer from "../layout/PageContainer";
import FormularioBase from "../form/FormularioBase";
import InputField from "../ui/InputField";
import ButtonGrid from "../layout/ButtonGrid";

export default function FormularioRegistroUbicacion() {
  const router = useRouter();

  const [ubicacionData, setUbicacionData] = useState({
    idUbicacion: 0,
    sede: "",
    departamento: "",
    ciudad: "",
    area: "",
    detalle: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUbicacionData({
      ...ubicacionData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await registrarUbicacion(ubicacionData);

    alert("Ubicacion registrada corectamente");

    router.push(ROUTES.dashboard);
  };
  return (
    <PageContainer title="Registro de Ubicación">
      <FormularioBase onSubmit={handleSubmit} titulo="Formulario de Ubicación">
        <InputField
          label="Sede"
          name="Sede"
          value={ubicacionData.sede || ""}
          onChange={handleChange}
        />
        <InputField
          label="Departamento"
          name="departamento"
          value={ubicacionData.departamento || ""}
          onChange={handleChange}
        />
        <InputField
          label="Ciudad"
          name="iciudad"
          value={ubicacionData.ciudad || ""}
          onChange={handleChange}
        />
        <InputField
          label="Área"
          name="area"
          value={ubicacionData.area || ""}
          onChange={handleChange}
        />
        <InputField
          label="Detalle"
          name="detalle"
          value={ubicacionData.detalle || ""}
          onChange={handleChange}
        />
        <ButtonGrid>
          <button className="border px-6 py-2 rounded">Guardar</button>
          <button
            type="button"
            onClick={() => router.push(ROUTES.dashboard)}
            className="border px-6 py-2 rounded"
          >
            Cancelar
          </button>
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
