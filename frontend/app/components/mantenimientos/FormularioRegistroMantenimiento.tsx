"use client";

import { registrarMantenimiento } from "@/services/mantenimientos.service";
import { consultarUsuarios } from "@/services/usuario.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../ui/layout/PageContainer";
import FormularioBase from "../ui/form/FormularioBase";
import InputField from "../ui/input/InputField";
import SelectField from "../ui/input/SelectField";
import { listarEquipos } from "@/services/equipos.service";
import { ROUTES } from "@/app/routes/routes";
import ButtonGrid from "../ui/layout/ButtonGrid";
import { useHandle } from "@/hooks/useHandle";
import { useList } from "@/hooks/useList";
import { UsuarioResponse } from "@/types/Usuario.type";
import { EquipoResponse } from "@/types/Equipo.type";
import { UseForm } from "@/hooks/useForm";
import { MantenimientoRequest } from "@/types/Mantenimiento.type";
import { mantenimientoToForm } from "@/mappers/mantenimiento.mapper";
import { useAction } from "@/hooks/useAction";


export default function FormularioRegistro({idEquipo}:{idEquipo:number}) {
  const router = useRouter();

  const {handle} = useHandle();

  const {data: usuarios } = useList<UsuarioResponse>(consultarUsuarios);

  const {data:equipos} = useList<EquipoResponse>(listarEquipos);

  const {formData,handleChange} = UseForm<MantenimientoRequest>(mantenimientoToForm(undefined,idEquipo))

  const {execute: crearMantenimiento,loading} = 
  useAction(registrarMantenimiento)
  
  const handleSubmit = (e:any) => {
    e.preventDefault()

    handle(async () => {
      await crearMantenimiento(formData)

      alert("Mantenimiento registrado correctamente")

      router.push(ROUTES.mantenimientos.LISTA)
    })
  }
  return (
    <PageContainer>
      <FormularioBase titulo="Registrar Mantenimiento" onSubmit={handleSubmit}>
        <SelectField
          label="Equipo"
          name="equipo"
          value={formData.equipo.toString()}
          onChange={handleChange}
          options={(equipos ?? []).map((equipo) => ({
            value: equipo.idEquipo.toString(),
            label: equipo.nombre,
          }))}
        />

        <SelectField
          label="Tipo"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          options={[
            { value: "mantenimiento", label: "Mantenimiento" },
            { value: "calibracion", label: "Calibracion" },
            { value: "falla", label: "Falla" },
            { value: "sistema", label: "Sistema" },
          ]}
        />

        <SelectField
          label="Estado"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          options={[
            { value: "pendiente", label: "Pendiente" },
            { value: "aprobado", label: "Aprobado" },
            { value: "ejecutado", label: "Ejecutado" },
          ]}
        />
        <InputField
          label="Fecha Inicio"
          name="fechaInicio"
          type="date"
          value={formData.fechaInicio}
          onChange={handleChange}
        />
        <InputField
          label="Fecha Fin"
          name="fechaFin"
          type="date"
          value={formData.fechaFin}
          onChange={handleChange}
        />
        <SelectField
          label="Responsable"
          name="responsable"
          value={formData.responsable.toString()}
          onChange={handleChange}
          options={(usuarios ?? []).map((usuario) => ({
            value: usuario.id.toString(),
            label: usuario.nombre,
          }))}
        />
        <ButtonGrid>
          <button className="border border-gray-400 px-6 py-2 rounded-full">
            Guard mantenimiento
          </button>
          <button
            className="border border-gray-400 px-6 py-2 rounded-full"
            onClick={() => router.push(ROUTES.mantenimientos.LISTA)}
          >
            Registrar Mantenimiento
          </button>
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
