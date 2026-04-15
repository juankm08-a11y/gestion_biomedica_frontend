"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { inciarSesion } from "@/services/usuario.service";
import { ROUTES } from "@/app/routes/routes";
import PageContainer from "../ui/layout/PageContainer";
import FormularioBase from "../ui/form/FormularioBase";
import InputField from "../ui/input/InputField";
import SelectField from "../ui/input/SelectField";
import ButtonGrid from "../ui/layout/ButtonGrid";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import { LoginRequest } from "@/types/auth.type";

export default function Login() {
  const router = useRouter();

  const [loginData, setLoginData] = useState<LoginRequest>({
    correo: "",
    password: "",
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
          label="Contraseña"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <InputField
          label="Correo"
          name="correo"
          value={loginData.correo}
          onChange={handleChange}
        />

        <ButtonGrid>
          <PrimaryButton text="Iniciar Sesion" />
        </ButtonGrid>
        <div className="flex flex-col items-center gap-2 mt-4">
          <button
            type="button"
            className="text-blue-500 hover:underline text-sm"
            onClick={() => router.push(ROUTES.recuperarpassword)}
          >
            ¿Olvidaste tu contraseña?
          </button>
          <button
            type="button"
            className="text-blue-500 hover:underline text-sm"
            onClick={() => router.push(ROUTES.register)}
          >
            ¿Aún no tienes cuenta?
          </button>
          <button
            type="button"
            className="text-blue-500 hover:underline text-sm"
            onClick={() => router.push(ROUTES.recuperarCuenta)}
          >
            No puedes acceder a tu cuenta?
          </button>
        </div>
      </FormularioBase>
    </PageContainer>
  );
}
