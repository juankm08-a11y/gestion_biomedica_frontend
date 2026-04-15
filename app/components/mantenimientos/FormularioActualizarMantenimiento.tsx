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

interface Props {
  idEquipo?: number;
  idMantenimiento: number;
}

export default function FormularioActualizarMantenimiento({
  idEquipo,
  idMantenimiento,
}: any) {
  const [equipos, setEquipos] = useState<any[]>([]);
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [mantenimientoData, setMantenimientoData] = useState({
    idMantenimiento: 0,
    equipo: idEquipo ?? 0,
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
        setUsuarios(Array.isArray(usuariosResponse) ? usuariosResponse : []);
      } catch (error) {
        console.error("Error al cargar los datos");
      }
    };
    cargarDatos();
  }, []);

  useEffect(() => {
    if (!idMantenimiento || isNaN(idMantenimiento)) return;

    const cargarMantenimiento = async () => {
      try {
        const response = await consultarMantenimiento(idMantenimiento);
        setMantenimientoData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    cargarMantenimiento();
  }, [idMantenimiento]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await actualizarMantenimiento(
        idMantenimiento,
        mantenimientoData,
      );
      alert("Mantenimiento actualizado correctamente");

      console.log(response);
      setMantenimientoData({
        idMantenimiento: 0,
        equipo: idEquipo ?? 0,
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
    const { name, value } = e.target;

    setMantenimientoData({
      ...mantenimientoData,
      [name]:
        name === "equipo" || name === "responsable" ? Number(value) : value,
    });
  };

  return (
    <PageContainer>
      <FormularioBase titulo="Actualizar Mantenimiento" onSubmit={handleSubmit}>
        <SelectField
          label="Equipo"
          name="equipo"
          onChange={handleChange}
          value={mantenimientoData?.equipo?.toString() || ""}
          options={equipos.map((equipo) => ({
            value: equipo.idEquipo.toString(),
            label: equipo.nombre,
          }))}
        />

        <SelectField
          label="Tipo"
          name="tipo"
          value={mantenimientoData?.tipo || ""}
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
          value={mantenimientoData?.estado || ""}
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
          value={mantenimientoData?.fechaInicio || ""}
          onChange={handleChange}
        />
        <InputField
          label="Fecha Fin"
          name="fechaFin"
          type="date"
          value={mantenimientoData?.fechaFin || ""}
          onChange={handleChange}
        />
        <SelectField
          label="Responsable"
          name="responsable"
          value={mantenimientoData?.responsable?.toString()}
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
            onClick={() => router.push(ROUTES.mantenimientos.LISTA)}
          >
            Cancelar
          </button>
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
