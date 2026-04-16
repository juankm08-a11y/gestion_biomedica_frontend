"use client";

import { listarEquipos } from "@/services/equipos.service";
import { useRouter } from "next/navigation";
import PageContainer from "../../ui/layout/PageContainer";
import FormularioBase from "../../ui/form/FormularioBase";
import SelectField from "../../ui/input/SelectField";
import InputField from "../../ui/input/InputField";
import { ROUTES } from "@/app/routes/routes";
import ButtonGrid from "../../ui/layout/ButtonGrid";
import { useError } from "@/hooks/useError";
import { useList } from "@/hooks/useList";
import { EquipoResponse } from "@/types/Equipo.type";
import { UseForm } from "@/hooks/useForm";
import { ProgramacionMantenimientoRequest } from "@/types/ProgramacionMantenimiento.type";
import { useAction } from "@/hooks/useAction";
import { crearProgramacionMantenimiento } from "@/services/programacionMantenimiento.service";
import { useHandle } from "@/hooks/useHandle";
import { programacionToForm } from "@/mappers/programacion.mapper";
import Card from "../../ui/cards/Card";

export default function FormularioRegistroProgramacion({
  idMantenimiento,
}: {
  idMantenimiento: number;
}) {
  const router = useRouter();

  const { error } = useError();

  const {handle} = useHandle();

  const { data: equipos } = useList<EquipoResponse>(listarEquipos);

  const {formData, handleChange} = 
  UseForm<ProgramacionMantenimientoRequest>(
    programacionToForm()
  )

  const {execute:crear,loading} = useAction(crearProgramacionMantenimiento)

  const handleSubmit = (e: any) => {
    e.preventDefault();

    handle(async () => {
      await crear(idMantenimiento, formData)

      alert("Programación registrada correctamente")

      router.push(
        ROUTES.mantenimientos.CONSULTAR_PROGRAMACION(
          idMantenimiento
        )
      )
    })
  };

  return (
    <PageContainer>
     <Card variant="form">
       <FormularioBase titulo="Registrar Programacion" onSubmit={handleSubmit}>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <SelectField
          label="Equipo"
          onChange={handleChange}
          value={formData.equipo.toString()}
          name="equipo"
          options={equipos.map((equipo) => ({
            value: equipo.idEquipo.toString(),
            label: equipo.nombre,
          }))}
        />
        <InputField
          label="Frecuencia Calibración"
          name="frecuenciaCalibracion"
          value={formData.frecuenciaCalibracion.toString()}
          onChange={handleChange}
          type="number"
        />
        <InputField
          label="Frecuencia Mantenimiento"
          name="frecuenciaMantenimiento"
          onChange={handleChange}
          value={formData.frecuenciaMantenimiento.toString()}
          type="number"
        />
        <SelectField
          label="Unidad de Frecuencia"
          name="unidadFrecuencia"
          value={formData.unidadFrecuencia}
          onChange={handleChange}
          options={[
            { value: "dias", label: "Dias" },
            { value: "meses", label: "Meses" },
            { value: "anios", label: "Anios" },
          ]}
        />
        <InputField
          label="Proximo Mantenimiento"
          name="proximoMantenimiento"
          onChange={handleChange}
          value={formData.proximoMantenimiento.toString()}
          type="date"
        />
        <InputField
          label="Proximo Calibracion"
          name="proximoCalibracion"
          onChange={handleChange}
          value={formData.proximoCalibracion.toString()}
          type="date"
        />
        <ButtonGrid>
          <button
            type="submit"
            disabled={loading}
            className="border border-gray-400 px-6 py-2 rounded-full disabled:opacity-50"
          >
            {loading ? "Registrando..." : "Registrar Programación"}
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
     </Card>
    </PageContainer>
  );
}
