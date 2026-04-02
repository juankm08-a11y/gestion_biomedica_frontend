"use client";

import { useState } from "react";
import { recuperarCuenta } from "../api/usuarios/usuario";

export default function RecuperarCuentaPage() {
  const [correo, setCorreo] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await recuperarCuenta();
      alert("Si la cuenta existe se enviarán instrucciones");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Recuperar cuenta</h1>

        <input type="email" placeholder="Correo" name="correo" value={correo} />
        <button>Recuperar</button>
      </form>
    </div>
  );
}
