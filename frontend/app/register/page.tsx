"use client";

import { useState } from "react";
import { registrarSesion } from "../api/usuarios/usuario";

export default function RegisterUsuarioPage() {
  const [data, setData] = useState({
    nombre: "",
    correo: "",
    estado: "",
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
      await registrarSesion();

      alert("Usuario creado correctamente");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Registro de usuario</div>
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
          onChange={handleChange}
          value={data.correo}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={data.password}
        />
        <input
          type="text"
          name="estado"
          onChange={handleChange}
          value={data.estado}
        />
        <input
          type="text"
          name="rol"
          onChange={handleChange}
          value={data.rol}
        />
        <button>Registrar</button>
      </form>
    </div>
  );
}
