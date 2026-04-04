"use client";

import { consultarMantenimiento } from "@/app/api/mantenimientos/mantenimiento";
import { crearOrden } from "@/app/api/ordenes-servicio/ordenesServicio";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FormularioRegistroOrden() {
  const [mantenimientos, setMantenimientos] = useState<any[]>([]);
  const [ordenData, setOrdenData] = useState({
    mantenimiento: "",
    tipoServicio: "",
    descripcion: "",
    estado: "pendiente",
  });

  const router = useRouter();

  useEffect(() => {
    const cargar = async () => {
      const data = await consultarMantenimiento();
      setMantenimientos(Array.isArray(data) ? data : []);
    };
    cargar();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setOrdenData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      ...ordenData,
      mantenimiento: Number(ordenData.mantenimiento),
    };

    await crearOrden(payload);

    alert("Orden registrada correctamente");

    console.log("ORDEN:", payload);

    router.push(ROUTES.dashboard.DASHBOARD);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Mantenimiento</label>
      <select
        name="mantenimiento"
        onChange={handleChange}
        value={ordenData.mantenimiento || ""}
      >
        <option value="">Seleccionar mantenimiento</option>
        {mantenimientos.map((mantenimiento) => (
          <option
            key={mantenimiento.idMantenimiento}
            value={mantenimiento.idMantenimiento}
          >
            {mantenimiento.idMantenimiento}
          </option>
        ))}
      </select>

      <label>Tipo Servicio</label>
      <input
        type="text"
        name="tipoServicio"
        value={ordenData.tipoServicio}
        onChange={handleChange}
        placeholder="Tipo Servicio"
      />

      <label>Descripcion</label>
      <input
        type="text"
        name="descripcion"
        value={ordenData.descripcion || ""}
        placeholder="Descripcion"
        onChange={handleChange}
      />

      <select
        name="estado"
        value={ordenData.estado || ""}
        onChange={handleChange}
      >
        <option value="aprobado">aprobado</option>
        <option value="pendiente">pendiente</option>
        <option value="ejecutado">ejecutado</option>
      </select>

      <button>Guardar Orden</button>
    </form>
  );
}
