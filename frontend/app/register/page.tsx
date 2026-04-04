"use client";

import { useState } from "react";
import { registrarSesion } from "../api/usuarios/usuario";

export default function RegisterUsuarioPage() {
  const [data, setData] = useState({
    nombre: "",
    correo: "",
    estado: "activo",
    password: "",
    rol: "",
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

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-[900px] shadow-md border border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Registro</h1>
        </div>
      </div>
      <div className="border border-gray-300 p-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
        >
          <label className="font-semibold text-gray-700">NOMBRE</label>
          <input
            type="text"
            placeholder="nombre"
            name="nombre"
            onChange={handleChange}
            value={data.nombre}
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
          />
          <label className="font-semibold text-gray-700">EMAIL</label>
          <input
            type="email"
            name="correo"
            placeholder="correo"
            onChange={handleChange}
            value={data.correo}
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
          />
          <label className="font-semibold text-gray-700">CONTRASEÑA</label>
          <input
            type="password"
            name="password"
            placeholder="contraseña"
            onChange={handleChange}
            value={data.password}
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
          />
          <label className="font-semibold text-gray-700">ESTADO</label>
          <select
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
            name="estado"
            onChange={handleChange}
            value={data.estado}
          >
            <option value="activo" className="p-3">
              Activo
            </option>
            <option value="inactivo" className="p-3">
              Inactivo
            </option>
          </select>
          <label className="font-semibold text-gray-700">ROL</label>
          <select
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
            name="rol"
            onChange={handleChange}
            value={data.rol}
          >
            <option value="" className="p-3">
              Seleccionar rol
            </option>
            <option value="ingenierobiomedico" className="p-3">
              Ingeniero Biomédico
            </option>
            <option value="tecnicobiomedico" className="p-3">
              Tecnico Biomédico
            </option>
            <option value="coordinador" className="p-3">
              Coordinador
            </option>
            <option value="administrador" className="p-3">
              Administrador
            </option>
            <option value="superadministrador" className="p-3">
              SuperAdministrador
            </option>
          </select>
          <button
            className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
            type="submit"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
