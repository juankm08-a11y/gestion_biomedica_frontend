"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { inciarSesion } from "@/services/usuario.service";
import { ROUTES } from "@/app/routes/routes";
import PageContainer from "../layout/PageContainer";
import FormularioBase from "../form/FormularioBase";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import ButtonGrid from "../layout/ButtonGrid";
import PrimaryButton from "../layout/PrimaryButton";

export default function Login() {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    nombre: "",
    correo: "",
    estado: "activo",
    password: "",
    rol: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await inciarSesion(loginData);

      console.log(response);

      localStorage.setItem("access", response.access);
      localStorage.setItem("refresh", response.refresh);
      localStorage.setItem("rol", response.rol);
      localStorage.setItem("usuario", response.usuario);

      document.cookie = `access=${response.access}; path=/`;
      document.cookie = `rol=${response.rol} path=/`;

      alert("Inicio de sesión exitoso");

      router.push(ROUTES.dashboard);
    } catch (error: any) {
      console.error("Error al iniciar sesión: ", error.response?.data);
      alert("Credenciales incorrectas");
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
    <PageContainer title="Login">
      <FormularioBase titulo="Iniciar Sesion" onSubmit={handleSubmit}>
        <InputField
          label="Nombre"
          name="nombre"
          value={loginData.nombre}
          onChange={handleChange}
        />
        <InputField
          label="Contraseña"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <SelectField
          label="Estado"
          name="estado"
          onChange={handleChange}
          value={loginData.estado}
          options={[
            { value: "activo", label: "Activo" },
            { value: "inactivo", label: "Inactivo" },
          ]}
        />
        <SelectField
          label="Rol"
          name="rol"
          value={loginData.rol}
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
