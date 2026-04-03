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
    <div>
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          onChange={handleChange}
          value={data.nombre}
        />
        <input
          type="email"
          name="correo"
          placeholder="correo"
          onChange={handleChange}
          value={data.correo}
        />
        <input
          type="password"
          name="password"
          placeholder="contraseña"
          onChange={handleChange}
          value={data.password}
        />
        <select name="estado" onChange={handleChange} value={data.estado}>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
        <select name="rol" onChange={handleChange} value={data.rol}>
          <option value="">Seleccionar rol</option>
          <option value="ingenierobiomedico">Ingeniero Biomédico</option>
          <option value="tecnicobiomedico">Tecnico Biomédico</option>
          <option value="coordinador">Coordinador</option>
          <option value="administrador">Administrador</option>
          <option value="superadministrador">SuperAdministrador</option>
        </select>
        <button>Registrar</button>
      </form>
    </div>
  );
}
