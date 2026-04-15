"use client";
import { listarEquipos } from "@/services/equipos.service";
import { actualizarProgramacion } from "@/services/programacionMantenimiento.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../../ui/layout/PageContainer";
import FormularioBase from "../../ui/form/FormularioBase";
import SelectField from "../../ui/input/SelectField";
import InputField from "../../ui/input/InputField";
import ButtonGrid from "../../ui/layout/ButtonGrid";
import { ROUTES } from "@/app/routes/routes";
import {
  ProgramacionMantenimientoResponse,
  ProgramacionMantenimientoRequest,
} from "../../../../types/ProgramacionMantenimiento.type";
import { useError } from "@/hooks/useError";
import { useList } from "@/hooks/useList";
import { EquipoResponse } from "@/types/Equipo.type";
import { UseForm } from "@/hooks/useForm";
import { useAction } from "@/hooks/useAction";

export default function FormularioActualizarProgramacion<
  ProgramacionMantenimientoResponse,
>({ idProgramacion }: { idProgramacion: number }) {
  const router = useRouter();
  const { error, handleError } = useError();

  const { data: equipos } = useList<EquipoResponse>(listarEquipos);

  const { formData, handleChange } = UseForm<ProgramacionMantenimientoRequest>({
    equipo: 0,
    frecuenciaMantenimiento: 0,
    frecuenciaCalibracion: 0,
    unidadFrecuencia: "dias",
    proximoMantenimiento: "",
    proximoCalibracion: "",
  });

  const { execute: updateProgramacion, loading } = useAction(
    actualizarProgramacion,
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await updateProgramacion(idProgramacion, formData);

      alert("Programacion actualizada correctamente");

      router.push(ROUTES.mantenimientos.CONSULTAR_PROGRAMACION(idProgramacion));
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <PageContainer>
      <FormularioBase titulo="Actualizar Programación" onSubmit={handleSubmit}>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <SelectField
          label="Equipo"
          name="equipo"
          value={formData.equipo.toString()}
          onChange={handleChange}
          options={equipos.map((equipo) => ({
            value: equipo.idEquipo.toString(),
            label: equipo.nombre,
          }))}
        />
        <InputField
          label="Frecuencia Mantenimiento"
          name="frecuenciaMantenimiento"
          value={formData.frecuenciaMantenimiento.toString()}
          onChange={handleChange}
          type="number"
        />
        <InputField
          label="Frecuencia Calibración"
          name="frecuenciaCalibracion"
          value={formData.frecuenciaCalibracion.toString()}
          onChange={handleChange}
          type="number"
        />
        <SelectField
          label="Unidad de Frecuencia"
          name="unidadFrecuencia"
          value={formData.unidadFrecuencia}
          onChange={handleChange}
          options={[
            { value: "dias", label: "Días" },
            { value: "meses", label: "Meses" },
            { value: "anios", label: "Años" },
          ]}
        />
        <InputField
          label="Proximo Mantenimiento"
          name="proximoMantenimiento"
          value={formData.proximoMantenimiento.toString()}
          onChange={handleChange}
          type="date"
        />
        <InputField
          label="Proximo Calibración"
          name="proximoCalibracion"
          value={formData.proximoCalibracion.toString()}
          onChange={handleChange}
          type="date"
        />
        <ButtonGrid>
          <button
            type="submit"
            disabled={loading}
            className="border border-gray-400 px-6 py-2 rounded-full"
          >
            {loading ? "Actualizando..." : "Actualizar Programación"}
          </button>
          <button
            type="button"
            onClick={() => router.push(ROUTES.dashboard)}
            className="border border-gray-400 px-6 py-2 rounded-full"
          >
            Cancelar
          </button>
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
