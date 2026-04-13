"use client";

import { listarEquipos } from "@/services/equipos.service";
import { actualizarProgramacion } from "@/services/programacionMantenimiento.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../../layout/PageContainer";
import FormularioBase from "../../form/FormularioBase";
import SelectField from "../../ui/SelectField";
import InputField from "../../ui/InputField";
import { ROUTES } from "@/app/routes/routes";
import ButtonGrid from "../../layout/ButtonGrid";

export default function FormularioRegistroProgramacion({ id }: any) {
  const [equipos, setEquipos] = useState<any[]>([]);
  const [programacionData, setProgramacionData] = useState({
    idProgramacion: 0,
    equipo: 0,
    frecuenciaMantenimiento: 0,
    frecuenciaCalibracion: 0,
    unidadFrecuencia: "dias",
    proximoMantenimiento: "",
    proximoCalibracion: "",
  });

  const router = useRouter();

  useEffect(() => {
    const cargarEquipos = async () => {
      const response = await listarEquipos();
      setEquipos(Array.isArray(response.data) ? response.data : []);
    };
    cargarEquipos();
  }, [id]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setProgramacionData({ ...programacionData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await actualizarProgramacion(id, programacionData);
      alert("Programación actualizada correctamente");
      router.push(ROUTES.mantenimientos.PROGRAMACION);
    } catch (error) {
      console.error("Error al actualizar la programación", error);
    }
  };

  return (
    <PageContainer title="Registrar Programacion">
      <FormularioBase titulo="Registrar Programacion" onSubmit={handleSubmit}>
        <SelectField
          label="Equipo"
          onChange={handleChange}
          value={programacionData.equipo.toString()}
          name="equipo"
          options={equipos.map((equipo) => ({
            value: equipo.idEquipo.toString(),
            label: equipo.nombre,
          }))}
        />
        <InputField
          label="Frecuencia Calibración"
          name="frecuenciaCalibracion"
          value={programacionData.frecuenciaCalibracion.toString()}
          onChange={handleChange}
          type="number"
        />
        <InputField
          label="Frecuencia Mantenimiento"
          name="frecuenciaMantenimiento"
          onChange={handleChange}
          value={programacionData.frecuenciaMantenimiento.toString()}
          type="number"
        />
        <SelectField
          label="Unidad de Frecuencia"
          name="unidadFrecuencia"
          value={programacionData.unidadFrecuencia.toString()}
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
          value={programacionData.proximoMantenimiento.toString()}
          type="number"
        />
        <InputField
          label="Proximo Calibracion"
          name="proximoCalibracion"
          onChange={handleChange}
          value={programacionData.proximoCalibracion.toString()}
          type="number"
        />
        <ButtonGrid>
          <button className="border border-gray-400 px-6 py-2 rounded-full">
            Registrar Programacion
          </button>
          <button
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
