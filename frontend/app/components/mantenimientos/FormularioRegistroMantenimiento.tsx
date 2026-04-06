"use client";

import { registrarMantenimiento } from "@/services/mantenimientos.service";
import { consultarUsuarios } from "@/services/usuario.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../layout/PageContainer";
import FormularioBase from "../form/FormularioBase";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import { listarEquipos } from "@/services/equipos.service";

interface Props {
  equipoId?: number;
}

export default function FormularioRegistro({ equipoId }: Props) {
  const router = useRouter();

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

  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [equipos, setEquipos] = useState<any[]>([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const usuariosResponse = await consultarUsuarios();
        const equiposResponse = await listarEquipos();

        setUsuarios(Array.isArray(usuariosResponse) ? usuariosResponse : []);
        setEquipos(Array.isArray(equiposResponse) ? equiposResponse : []);
      } catch (error) {
        console.error("Error cargando datos", error);
      }
    };

    cargarDatos();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setMantenimientoData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await registrarMantenimiento(mantenimientoData);
      alert("Mantenimiento registrado correctamente");
    } catch (error) {
      console.error("Error al registrar el mantenimiento", error);
    }
  };

  return (
    <PageContainer title="Mantenimientos">
      <FormularioBase titulo="Registrar Mantenimiento" onSubmit={handleSubmit}>
        <SelectField
          label="Equipo"
          name="equipo"
          value={mantenimientoData.equipo.toString()}
          onChange={handleChange}
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
        <button className="border border-gray-400 px-6 py-2 rounded-full">
          Guard mantenimiento
        </button>
      </FormularioBase>
    </PageContainer>
  );
}
