"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { inciarSesion } from "../../services/usuario.service.js";
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

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-[900px] shadow-md border border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
        </div>
      </div>
      <div className="border border-gray-300 p-8">
        <form
          className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
          onSubmit={handleSubmit}
        >
          <label className="font-semibold text-gray-700">EMAIL</label>
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
            onChange={handleChange}
          />
          <label className="font-semibold text-gray-700">PASSWORD</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
          >
            Iniciar Sesión
          </button>
        </form>
        <div>
          <a href={ROUTES.register}>¿No tienes cuenta?</a>
          <a href={ROUTES.recuperarpassword}>Olvidaste tu contraseña?</a>
          <a href={ROUTES.recuperarCuenta}>¿Olvidaste tu correo?</a>
        </div>
      </div>
    </div>
  );
}
