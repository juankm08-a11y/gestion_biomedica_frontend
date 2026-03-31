"use client";

import axios from "axios";
import { useState } from "react";

export default function FormularioRegistro() {
  const [equipoData, setEquipoData] = useState({
    nombre: "",
    marca: "",
    modelo: "",
    serie: "",
    fabricante: "",
    tipoTecnologia: "",
    ubicacion: "",
  });

  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setEquipoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" placeholder="Nombre: " />
        <label>Marca:</label>
        <label>Modelo:</label>
        <label>Fabricante:</label>
        <label>TipoTecnologia</label>
        <label>Ubicacion:</label>
        <button>Registrar Ubicacion</button>
      </form>
      <button>Guardar Equipo</button>
      <button>Cancelar</button>
    </div>
  );
}
