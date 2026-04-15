"use client";
import { registrarSesion } from "@/services/usuario.service";
import { useState } from "react";
import { RegistroUsuarioRequest } from "@/types/auth.type";
import PageContainer from "../ui/layout/PageContainer";
import FormularioBase from "../ui/form/FormularioBase";
import InputField from "../ui/input/InputField";
import SelectField from "../ui/input/SelectField";
import ButtonGrid from "../ui/layout/ButtonGrid";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/routes/routes";

export default function Register() {
  const router = useRouter();
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

      router.push(ROUTES.dashboard);
    } catch (error: any) {
      console.error("Error:", error.response);
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
    <PageContainer>
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
          type="password"
          value={data.password}
          onChange={handleChange}
        />
        <InputField
          label="Correo"
          name="correo"
          type="email"
          value={data.correo}
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
