"use client";

import { useState } from "react";
import { recuperarCuenta } from "../../services/usuario.service.js";
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <h1>Recuperar cuenta</h1>
      <div>
        <div></div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
        >
          <label className="font-semibold text-gray-700">CORREO</label>
          <input
            type="email"
            placeholder="Correo"
            name="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
          />
          <button className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium">
            Recuperar
          </button>
        </form>
      </div>
    </div>
  );
}
