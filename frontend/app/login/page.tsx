"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ROUTES } from "../routes/routes";
import { inciarSesion } from "@/services/usuario.service";

export default function Login() {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
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
}
