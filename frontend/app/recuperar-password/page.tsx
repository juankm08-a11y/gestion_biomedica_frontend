"use client";
import { useState } from "react";
import { recuperarContraseña } from "../api/usuarios/usuario";

export default function RecuperarPasswordPage() {
  const [data, setData] = useState({
    correo: "",
    password: "",
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
      await recuperarContraseña(data);

      alert("Contraseña actualizada correctamente");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Nueva Contraseña</h1>
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Nueva contraseña"
          onChange={handleChange}
        />
        <button>Actualizar contraseña</button>
      </form>
    </div>
  );
}
