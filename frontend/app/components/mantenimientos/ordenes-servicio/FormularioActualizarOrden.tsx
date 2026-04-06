"use client";

import { ROUTES } from "@/app/routes/routes";
import {
  actualizarOrden,
  consultarOrden,
} from "@/services/ordenesServicio.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../../layout/PageContainer";
import FormularioBase from "../../form/FormularioBase";
import InputField from "../../ui/InputField";
import SelectField from "../../ui/SelectField";
import ButtonGrid from "../../layout/ButtonGrid";
import PrimaryButton from "../../layout/PrimaryButton";

export default function FormularioActualizarOrden({ id }: any) {
  const router = useRouter();

  const [mantenimientos, setMantenimientos] = useState<any[]>([]);
  const [ordenData, setOrdenData] = useState({
    idOrdenServicio: 0,
    mantenimiento: 0,
    tipoServicio: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
    estado: "pendiente" as "aprobado" | "pendiente" | "ejecutado",
  });

  useEffect(() => {
    if (!id || isNaN(id)) return;

    const cargarDatos = async () => {
      try {
        const orden = await consultarOrden(id);
      } catch (error) {
        console.error("Error al cargar los datos", error);
      }
    };
    cargarDatos();
  }, [id]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setOrdenData({ ...ordenData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await actualizarOrden(id, ordenData);

      alert("Orden actualizada correctamente");
      router.push(ROUTES.ordenSerivicio.LISTA);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer title="Actualizar Ordende Servicio">
      <FormularioBase titulo="Actualizar Orden" onSubmit={handleSubmit}>
        <SelectField
          label="Mantenimientos"
          name="mantenimientos"
          value={ordenData.mantenimiento.toString()}
          onChange={handleChange}
          options={mantenimientos.map((m) => ({
            value: m.idMantenimiento,
            label: `Mantenimiento #${m.idMantenimiento}`,
          }))}
        />{" "}
        <InputField
          label="Tipo Servicio"
          name="tipoServicio"
          onChange={handleChange}
          value={ordenData.tipoServicio}
        />
        <InputField
          label="Descripción"
          name="descripcion"
          onChange={handleChange}
          value={ordenData.descripcion}
        />
        <InputField
          label="Fecha Inicio"
          name="fechaInicio"
          onChange={handleChange}
          value={ordenData.fechaInicio}
        />
        <InputField
          label="Fecha Fin"
          name="fechaFin"
          onChange={handleChange}
          value={ordenData.fechaFin}
        />
        <SelectField
          label="Estado"
          name="estado"
          onChange={handleChange}
          value={ordenData.estado}
          options={[
            { value: "pendiente", label: "Pendiente" },
            { value: "aprobado", label: "Aprobado" },
            { value: "ejecutado", label: "Ejecutado" },
          ]}
        />
        <ButtonGrid>
          <PrimaryButton text="Actualzar Orden" />
          <PrimaryButton
            text="Cancelar"
            onClick={() => router.push(ROUTES.ordenSerivicio.LISTA)}
          />
          <PrimaryButton
            text="Regresar a Dashboard"
            onClick={() => router.push(ROUTES.dashboard)}
          />
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
