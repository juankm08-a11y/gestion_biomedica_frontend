"use client";

import { ROUTES } from "@/app/routes/routes";
import { listarEquipos } from "@/services/equipos.service";
import {
  actualizarMantenimiento,
  consultarMantenimiento,
} from "@/services/mantenimientos.service";
import { consultarUsuarios } from "@/services/usuario.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../ui/layout/PageContainer";
import FormularioBase from "../ui/form/FormularioBase";
import SelectField from "../ui/input/SelectField";
import InputField from "../ui/input/InputField";
import ButtonGrid from "../ui/layout/ButtonGrid";
import { useError } from "@/hooks/useError";
import { useFetch } from "@/hooks/useFetch";
import { UseForm } from "@/hooks/useForm";
import { MantenimientoRequest } from "@/types/Mantenimiento.type";
import { mantenimientoToForm } from "@/mappers/mantenimiento.mapper";

interface Props {
  idEquipo?: number;
  idMantenimiento: number;
}

export default function FormularioActualizarMantenimiento({
  idEquipo,
  idMantenimiento,
}: any) {
  const router = useRouter();

  const { handleError } = useError();

  const { data: equipos } = useFetch(listarEquipos, []);

  const { data: usuarios } = useFetch(consultarUsuarios, []);

  const { formData, setFormData, handleChange, resetForm } =
    UseForm<MantenimientoRequest>(mantenimientoToForm({} as any, idEquipo));

  useEffect(() => {
    if (!idMantenimiento) return;

    const cargar = async () => {
      try {
        const data = await consultarMantenimiento(idMantenimiento);
        setFormData(mantenimientoToForm(data, idEquipo));
      } catch (error) {
        handleError(error);
      }
    };

    cargar();
  }, [idMantenimiento]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await actualizarMantenimiento(idMantenimiento, formData);

      alert("Mantenimiento actualizado correctamente");

      resetForm();

      router.push(ROUTES.mantenimientos.LISTA);
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <PageContainer>
      <FormularioBase titulo="Actualizar Mantenimiento" onSubmit={handleSubmit}>
        <SelectField
          label="Equipo"
          name="equipo"
          onChange={handleChange}
          value={formData.equipo?.toString() || ""}
          options={(equipos ?? []).map((equipo: any) => ({
            value: equipo.idEquipo.toString(),
            label: equipo.nombre,
          }))}
        />

        <SelectField
          label="Tipo"
          name="tipo"
          value={formData.tipo || ""}
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
          value={formData.estado || ""}
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
          value={formData.fechaInicio || ""}
          onChange={handleChange}
        />
        <InputField
          label="Fecha Fin"
          name="fechaFin"
          type="date"
          value={formData.fechaFin || ""}
          onChange={handleChange}
        />
        <SelectField
          label="Responsable"
          name="responsable"
          value={formData.responsable?.toString()}
          onChange={handleChange}
          options={(usuarios ?? []).map((usuario: any) => ({
            value: usuario.idUsuario.toString(),
            label: usuario.nombre,
          }))}
        />

        <ButtonGrid>
          <button className="border border-gray-400 px-6 py-2 rounded-full">
            Actualizar Equipo
          </button>
          <button
            className="border px-6 py-2 rounded"
            type="button"
            onClick={() => router.push(ROUTES.mantenimientos.LISTA)}
          >
            Cancelar
          </button>
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
