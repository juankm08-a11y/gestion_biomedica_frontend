"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { inciarSesion } from "../api/usuarios/usuario";
import { ROUTES } from "../routes/routes";

export default function LoginPage() {
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

      localStorage.setItem("token", response.data);
      localStorage.setItem("rol", response.rol);
      localStorage.setItem("usuario", response.usuario);

      alert("Inicio de sesión exitoso");

      router.push(ROUTES.dashboard.DASHBOARD);
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center justify-gray-100">
      <form
        className="bg-white p-10 border border border-gray-300 w-[400px]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>

        <input
          type="email"
          name="correo"
          placeholder="Correo"
          className="border w-full p-2 mb-4"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="border w-full p-2 mb-4"
          onChange={handleChange}
        />
        <button className="border px-6 py-2 w-full hover:bg-gray-100">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
