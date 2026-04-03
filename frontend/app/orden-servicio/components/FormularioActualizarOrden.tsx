"use client";

import { consultarEquipo } from "@/app/api/equipos/equipo";
import { actualizarMantenimiento } from "@/app/api/mantenimientos/mantenimiento";
import { consultarOrden } from "@/app/api/ordenes-servicio/ordenesServicio";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FormularioActualizarOrden({ id }: any) {
  if (!id || isNaN(id)) {
    return <p>Cargando Orden...</p>;
  }

  const [mantenimientos, setMantenimientos] = useState<any[]>([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const mantenimientosResponse = await consultarEquipo();

        setOrdenData(
          Array.isArray(mantenimientosResponse.data)
            ? mantenimientosResponse.data
            : [],
        );
      } catch (error) {
        console.error("Error al cargando datos");
      }
    };
    cargarDatos();
  }, []);

  const [ordenData, setOrdenData] = useState({
    mantenimiento: "",
    tipoServicio: "",
    fechaInicio: "",
    fechaFin: "",
    descripcion: "",
    estado: "pendiente",
  });

  const router = useRouter();

  useEffect(() => {
    if (!id || isNaN(id)) return;

    const cargarOrden = async () => {
      try {
        const response = await consultarOrden();
        setOrdenData(response);
      } catch (error) {
        console.error(error);
      }
    };

    cargarOrden();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await actualizarMantenimiento(id, ordenData);

      alert("Mantenimiento actualizado correctamente");

      console.log(response);

      setOrdenData({
        mantenimiento: "",
        tipoServicio: "",
        fechaInicio: "",
        fechaFin: "",
        descripcion: "",
        estado: "pendiente",
      });
      router.push(ROUTES.mantenimientos.MANTENIMIENTOS_CONSULTAR);
    } catch (error) {
      console.error("Error al actualizar el mantenimiento: ", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setOrdenData({ ...ordenData, [name]: value });
  };

  const handleCancelar = () => {
    router.push(ROUTES.mantenimientos.MANTENIMIENTOS_CONSULTAR);
  };

  return (
    <div>
      <div>
        <div>
          <h1></h1>
        </div>
      </div>
      <div>
        <h2></h2>
        <form onSubmit={handleSubmit}>
          <label>MANTENIMIENTO</label>
          <select
            name="mantenimiento"
            onChange={handleChange}
            value={ordenData.mantenimiento || ""}
            className="border p-2"
          >
            <option value="">Seleccionar mantenimiento</option>
            {mantenimientos.map((mantenimiento) => (
              <option
                key={mantenimiento.idMantenimiento}
                value={mantenimiento.idMantenimiento}
              >
                {mantenimiento.nombre}
              </option>
            ))}
          </select>

          <label>TIPO SERVICIO</label>
          <input
            type="text"
            value={ordenData.tipoServicio || ""}
            name="tipoServicio"
            placeholder="tipoServicio"
            className="border p-2"
            onChange={handleChange}
          />

          <label>FECHA INICIO</label>
          <input
            type="date"
            name="fechaInicio"
            onChange={handleChange}
            value={ordenData.fechaInicio || ""}
          />

          <label>FECHA FIN</label>
          <input
            type="date"
            name="fechaFin"
            onChange={handleChange}
            value={ordenData.fechaFin || ""}
          />

          <label>DESCRIPCION</label>
          <input
            type="text"
            value={ordenData.descripcion || ""}
            name="descripcion"
            placeholder="descripcion"
            className="border p-2"
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

          <button>Actualizar Orden</button>
        </form>
      </div>
    </div>
  );
}
