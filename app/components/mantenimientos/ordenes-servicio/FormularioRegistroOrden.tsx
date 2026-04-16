"use client";

import { ROUTES } from "@/app/routes/routes";
import { consultarMantenimientos } from "@/services/mantenimientos.service";
import { crearOrden } from "@/services/ordenesServicio.service";
import { useRouter } from "next/navigation";
import FormularioBase from "../../ui/form/FormularioBase";
import SelectField from "../../ui/input/SelectField";
import InputField from "../../ui/input/InputField";
import ButtonGrid from "../../ui/layout/ButtonGrid";
import { useHandle } from "@/hooks/useHandle";
import { useList } from "@/hooks/useList";
import { MantenimientoResponse } from "@/types/Mantenimiento.type";
import { UseForm } from '../../../../hooks/useForm';
import { OrdenRequest } from "@/types/OrdenServicio.type";
import { ordenToForm } from "@/mappers/orden.mapper";
import { useAction } from "@/hooks/useAction";

export default function FormularioRegistrarOrden() {
  const router = useRouter()

  const {handle} = useHandle();

  const {data:mantenimientos} = 
  useList<MantenimientoResponse>(consultarMantenimientos)

  const {formData,handleChange} = 
  UseForm<OrdenRequest>(ordenToForm())

  const {execute:crear,loading} = 
  useAction(crearOrden)

  const handleSubmit = (e:any) => {
    e.preventDefault();

    handle(async() => {
      await crear(formData);

      alert("Orden registrada correctamente")

      router.push(ROUTES.ordenSerivicio.LISTA)
    })
  }

  return (
    <FormularioBase titulo="Registrar Orden" onSubmit={handleSubmit}>
      <SelectField
        label="Mantenimiento"
        name="mantenimiento"
        value={formData.mantenimiento.toString()}
        onChange={handleChange}
        options={(mantenimientos ?? []).map((m) => ({
          value: m.idMantenimiento.toString(),
          label: `Mantenimiento ${m.idMantenimiento}`,
        }))}
      />
      <InputField
        label="Tipo Servicio"
        name="tipoServicio"
        value={formData.tipoServicio}
        onChange={handleChange}
      />
      <InputField
        label="Descripcion"
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
      />
      <SelectField
        label="Estado"
        name="estado"
        value={formData.estado}
        onChange={handleChange}
        options={[
          { value: "aprobado", label: "Aprobado" },
          { value: "pendiente", label: "Pendiente" },
          { value: "ejecutado", label: "Ejecutado" },
        ]}
      />
      <ButtonGrid>
        <button
          type="submit"
          className="px-8 py-3 rounded-full bg-blue-500 text-white"
        >
          Guardar Orden
        </button>
        <button
          type="button"
          className="px-8 py-3 rounded-full bg-gray-500 text-white"
          onClick={() => router.push(ROUTES.ordenSerivicio.LISTA)}
        >
          Cancelar
        </button>
        <button
          type="button"
          onClickCapture={() => router.push(ROUTES.dashboard)}
          className="px-8 py-3 rounded-full bg-gray-500 text-white"
        >
          Regresar a Dashboard
        </button>
      </ButtonGrid>
    </FormularioBase>
  );
}
