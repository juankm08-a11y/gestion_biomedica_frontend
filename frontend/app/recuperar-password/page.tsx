"use client";
import { useState } from "react";
import { recuperarContraseña } from "../../services/usuario.service.js";

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
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
            name="correo"
            placeholder="Correo"
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
          />
          <label className="font-semibold text-gray-700">
            NUEVA CONTRASEÑA
          </label>
          <input
            type="password"
            name="password"
            placeholder="Nueva contraseña"
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
          />
          <label className="font-semibold text-gray-700">
            CONFIRMA CONTRASEÑA
          </label>
          <input
            type="password"
            name="password"
            placeholder="Confirmar contraseña"
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full focus:outline focus:ring-2 focus:ring-red-400"
          />
          <button className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium">
            Actualizar contraseña
          </button>
        </form>
      </div>
    </div>
  );
}
