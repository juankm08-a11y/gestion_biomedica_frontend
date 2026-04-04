"use client";

import { useState } from "react";
import { recuperarCuenta } from "../api/usuarios/usuario";
import { ROUTES } from "../routes/routes";
import { useRouter } from "next/navigation";

export default function RecuperarCuentaPage() {
  const router = useRouter();

  const [correo, setCorreo] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await recuperarCuenta();
      alert("Si la cuenta existe se enviarán instrucciones");

      router.push(ROUTES.login.LOGIN);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Recuperar cuenta</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          name="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <button>Recuperar</button>
      </form>
    </div>
  );
}
