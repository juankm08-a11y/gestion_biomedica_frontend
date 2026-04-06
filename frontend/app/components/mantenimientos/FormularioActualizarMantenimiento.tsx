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
import PageContainer from "../layout/PageContainer";
import FormularioBase from "../form/FormularioBase";
import SelectField from "../ui/SelectField";
import InputField from "../ui/InputField";
import ButtonGrid from "../layout/ButtonGrid";

interface Props {
  equipoId?: number;
}

export default function FormularioActualizarMantenimiento({
  equipoId,
  mantenimiendoId,
}: any) {
  const [equipos, setEquipos] = useState<any[]>([]);
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [mantenimientoData, setMantenimientoData] = useState({
    idMantenimiento: 0,
    equipo: equipoId ?? 0,
    tipo: "mantenimiento" as
      | "mantenimiento"
      | "calibracion"
      | "falla"
      | "sistema",
    estado: "pendiente" as "aprobado" | "pendiente" | "ejecutado",
    fechaInicio: "",
    fechaFin: "",
    responsable: 0,
  });

  const router = useRouter();

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const equiposResponse = await listarEquipos();
        const usuariosResponse = await consultarUsuarios();

        setEquipos(
          Array.isArray(equiposResponse.data) ? equiposResponse.data : [],
        );
        setUsuarios(
          Array.isArray(usuariosResponse.data) ? usuariosResponse.data : [],
        );
      } catch (error) {
        console.error("Error al cargar los datos");
      }
    };
    cargarDatos();
  }, []);

  useEffect(() => {
    if (!equipoId || isNaN(equipoId)) return;

    const cargarMantenimiento = async () => {
      try {
        const response = await consultarMantenimiento(mantenimiendoId);
        setMantenimientoData(response);
      } catch (error) {
        console.error(error);
      }
    };
    cargarMantenimiento();
  }, [mantenimiendoId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await actualizarMantenimiento(
        mantenimiendoId,
        mantenimientoData,
      );
      alert("Mantenimiento actualizado correctamente");

      console.log(response);
      setMantenimientoData({
        idMantenimiento: 0,
        equipo: equipoId ?? 0,
        tipo: "mantenimiento" as
          | "mantenimiento"
          | "calibracion"
          | "falla"
          | "sistema",
        estado: "pendiente" as "aprobado" | "pendiente" | "ejecutado",
        fechaInicio: "",
        fechaFin: "",
        responsable: 0,
      });
      router.push(ROUTES.mantenimientos.LISTA);
    } catch (error) {
      console.error("Error al actualizar el mantenimiento", error);
    }
  };

  const handleChange = (e: any) => {
    router.push(ROUTES.mantenimientos.LISTA);
  };

  return (
    <PageContainer title="Actualizar Mantenimiento">
      <FormularioBase titulo="Actualizar Mantenimiento" onSubmit={handleSubmit}>
        <SelectField
          label="Equipo"
          name="equipo"
          onChange={handleChange}
          value={mantenimientoData.equipo.toString() || ""}
          options={equipos.map((equipo) => ({
            value: equipo.idEquipo.toString(),
            label: equipo.nombre,
          }))}
        />

        <SelectField
          label="Tipo"
          name="tipo"
          value={mantenimientoData.tipo}
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
          name="Estado"
          value={mantenimientoData.estado}
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
          value={mantenimientoData.fechaInicio}
          onChange={handleChange}
        />
        <InputField
          label="Fecha Fin"
          name="fechaFin"
          type="date"
          value={mantenimientoData.fechaFin}
          onChange={handleChange}
        />
        <SelectField
          label="Responsable"
          name="Responsable"
          value={mantenimientoData.responsable.toString()}
          onChange={handleChange}
          options={usuarios.map((usuario) => ({
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
            onClick={() => router.push(ROUTES.dashboard)}
          >
            Cancelar
          </button>
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
