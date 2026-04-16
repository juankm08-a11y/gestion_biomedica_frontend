"use client";

import { ROUTES } from "@/app/routes/routes";
import {
  actualizarOrden,
  consultarOrden,
} from "@/services/ordenesServicio.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../../ui/layout/PageContainer";
import FormularioBase from "../../ui/form/FormularioBase";
import InputField from "../../ui/input/InputField";
import SelectField from "../../ui/input/SelectField";
import ButtonGrid from "../../ui/layout/ButtonGrid";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import {
  consultarMantenimiento,
  consultarMantenimientos,
} from "@/services/mantenimientos.service";
import { useHandle } from "@/hooks/useHandle";
import { useFetch } from "@/hooks/useFetch";
import { OrdenRequest, OrdenResponse } from "@/types/OrdenServicio.type";
import { useList } from "@/hooks/useList";
import { MantenimientoResponse } from "@/types/Mantenimiento.type";
import { UseForm } from "@/hooks/useForm";
import { ordenToForm } from "@/mappers/orden.mapper";
import { useAction } from "@/hooks/useAction";

export default function FormularioActualizarOrden({
  idOrden,
}: {
  idOrden: number;
}) {
  const router = useRouter();

  const {handle} = useHandle();

  const {data:orden} = useFetch<OrdenResponse>(
    () => consultarOrden(idOrden),
    [idOrden]
  )

  const {data:mantenimientos} =
  useList<MantenimientoResponse>(consultarMantenimientos)

  const {formData,handleChange,setFormData} = 
  UseForm<OrdenRequest>(ordenToForm())

  const {execute: updateOrden,loading} = 
  useAction(actualizarOrden)

  if (orden && formData.mantenimiento === 0) {
    setFormData(ordenToForm(orden))
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()

    handle(async () => {
      await updateOrden(idOrden, formData);

      alert("Orden actualizada correctamente")

      router.push(ROUTES.ordenSerivicio.LISTA)
    })
  }

  return (
    <PageContainer>
      <FormularioBase titulo="Actualizar Orden" onSubmit={handleSubmit}>
        <SelectField
          label="Mantenimientos"
          name="mantenimiento"
          value={formData.mantenimiento.toString()}
          onChange={handleChange}
          options={(mantenimientos ?? []).map((m) => ({
            value: m.idMantenimiento.toString(),
            label: `Mantenimiento ${m.idMantenimiento}`,
          }))}
        />{" "}
        <InputField
          label="Tipo Servicio"
          name="tipoServicio"
          onChange={handleChange}
          value={formData.tipoServicio}
        />
        <InputField
          label="Descripción"
          name="descripcion"
          onChange={handleChange}
          value={formData.descripcion}
        />
        <InputField
          label="Fecha Inicio"
          name="fechaInicio"
          onChange={handleChange}
          value={formData.fechaInicio}
        />
        <InputField
          label="Fecha Fin"
          name="fechaFin"
          onChange={handleChange}
          value={formData.fechaFin}
        />
        <SelectField
          label="Estado"
          name="estado"
          onChange={handleChange}
          value={formData.estado}
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
