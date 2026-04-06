"use client";
import { ROUTES } from "@/app/routes/routes";
import { actualizarUbicacion } from "@/services/ubicaciones.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PageContainer from "../layout/PageContainer";
import FormularioBase from "../form/FormularioBase";
import InputField from "../ui/InputField";
import ButtonGrid from "../layout/ButtonGrid";

export default function ActualizarUbicacion({ id }: any) {
  const router = useRouter();

  const [ubicacionData, setUbicacionData] = useState({
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

    await actualizarUbicacion(id, ubicacionData);

    alert("Ubicación actualizada");

    router.push(ROUTES.dashboard);
  };

  return (
    <PageContainer title="Actualizar Ubicación">
      <FormularioBase titulo="Actualizar Ubicación" onSubmit={handleSubmit}>
        <InputField
          label="Sede"
          name="sede"
          value={ubicacionData.sede}
          onChange={handleChange}
        />
        <InputField
          label="Departamento"
          name="departamento"
          value={ubicacionData.departamento}
          onChange={handleChange}
        />
        <InputField
          label="Ciudad"
          name="ciudad"
          value={ubicacionData.ciudad}
          onChange={handleChange}
        />
        <InputField
          label="Área"
          name="area"
          value={ubicacionData.area}
          onChange={handleChange}
        />
        <InputField
          label="Detalle"
          name="detalle"
          value={ubicacionData.detalle}
          onChange={handleChange}
        />
        <ButtonGrid>
          <button className="border px-6 py-2 rounded">Actualizar</button>
          <button
            className="border px-6 py-2 rounded"
            type="button"
            onClick={() => router.push(ROUTES.dashboard)}
          >
            Cancelar
          </button>
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
