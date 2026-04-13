"use client";
import { registrarSesion } from "@/services/usuario.service";
import { useState } from "react";
import { RegistroUsuarioRequest } from "@/types/auth.type";
import PageContainer from "../layout/PageContainer";
import FormularioBase from "../form/FormularioBase";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import ButtonGrid from "../layout/ButtonGrid";
import PrimaryButton from "../layout/PrimaryButton";

export default function Register() {
  const [data, setData] = useState<RegistroUsuarioRequest>({
    nombre: "",
    correo: "",
    estado: "activo",
    password: "",
    rol: "administrador",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await registrarSesion(data);

      alert("Usuario creado correctamente");
    } catch (error) {
      console.error(error);
    }
  };

  const roles = [
    { value: "ingenierobiomedico", label: "Ingeniero Biomédico" },
    { value: "tecnicobiomedico", label: "Tecnico Biomédico" },
    { value: "coordinador", label: "Coordinador" },
    { value: "administrador", label: "Administrador" },
    { value: "superadministrador", label: "SuperAdministrador" },
  ];

  return (
    <PageContainer title="Registro">
      <FormularioBase titulo="Registro Usuario" onSubmit={handleSubmit}>
        <InputField
          label="Nombre"
          name="nombre"
          value={data.nombre}
          onChange={handleChange}
        />
        <InputField
          label="Contraseña"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <SelectField
          label="Estado"
          name="estado"
          onChange={handleChange}
          value={data.estado}
          options={[
            { value: "activo", label: "Activo" },
            { value: "inactivo", label: "Inactivo" },
          ]}
        />
        <SelectField
          label="Rol"
          name="rol"
          value={data.rol}
          onChange={handleChange}
          options={roles}
        />
        <ButtonGrid>
          <PrimaryButton text="Registrar" />
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
