"use client";

import { consultarEquipo } from "@/app/api/equipos/equipo";
import {
  actualizarMantenimiento,
  consultarMantenimiento,
} from "@/app/api/mantenimientos/mantenimiento";
import { consultarUsuarios } from "@/app/api/usuarios/usuario";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FormularioActualizarMantenimiento({ id }: any) {
  if (!id || isNaN(id)) {
    return <p>Cargando Mantenimiento...</p>;
  }

  const [equipos, setEquipos] = useState<any[]>([]);
  const [usuarios, setUsuarios] = useState<any[]>([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const equiposResponse = await consultarEquipo();
        const usuariosResponse = await consultarUsuarios();

        setEquipos(
          Array.isArray(equiposResponse.data) ? equiposResponse.data : [],
        );
        setUsuarios(Array.isArray(usuariosResponse) ? usuariosResponse : []);
      } catch (error) {
        console.error("Error al cargando datos");
      }
    };
    cargarDatos();
  }, []);

  const [mantenimientoData, setMantenimientoData] = useState({
    equipo: "",
    tipo: "",
    estado: "pendiente",
    fechaInicio: "",
    fechaFin: "",
    responsable: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (!id || isNaN(id)) return;

    const cargarMantenimiento = async () => {
      try {
        const response = await consultarMantenimiento();
        setMantenimientoData(response);
      } catch (error) {
        console.error(error);
      }
    };

    cargarMantenimiento();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await actualizarMantenimiento(id, mantenimientoData);

      alert("Mantenimiento actualizado correctamente");

      console.log(response);

      setMantenimientoData({
        equipo: "",
        tipo: "",
        estado: "pendiente",
        fechaInicio: "",
        fechaFin: "",
        responsable: "",
      });
      router.push(ROUTES.mantenimientos.MANTENIMIENTOS_CONSULTAR);
    } catch (error) {
      console.error("Error al actualizar el mantenimiento: ", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setMantenimientoData({ ...mantenimientoData, [name]: value });
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
          <label>EQUIPO</label>
          <input
            type="text"
            name="equipo"
            value={mantenimientoData.equipo || ""}
            onChange={handleChange}
          />
          <label>TIPO</label>
          <select
            name="equipo"
            onChange={handleChange}
            value={mantenimientoData.equipo || ""}
            className="border p-2"
          >
            <option value="">Seleccionar equipo</option>
            {equipos.map((equipo) => (
              <option key={equipo.idEquipo} value={equipo.idEquipo}>
                {equipo.nombre}
              </option>
            ))}
          </select>

          <label>TIPO</label>
          <input
            type="text"
            value={mantenimientoData.tipo || ""}
            name="tipo"
            placeholder="Tipo"
            className="border p-2"
            onChange={handleChange}
          />
          <label>ESTADO</label>
          <select
            name="estado"
            value={mantenimientoData.estado || ""}
            onChange={handleChange}
          >
            <option value="aprobado">aprobado</option>
            <option value="pendiente">pendiente</option>
            <option value="ejecutado">ejecutado</option>
          </select>

          <label>FECHA INICIO</label>
          <input
            type="date"
            name="fechaInicio"
            onChange={handleChange}
            value={mantenimientoData.fechaInicio || ""}
          />

          <label>FECHA FIN</label>
          <input
            type="date"
            name="fechaFin"
            onChange={handleChange}
            value={mantenimientoData.fechaFin || ""}
          />

          <label>RESPONSABLE</label>
          <select
            name="responsable"
            onChange={handleChange}
            value={mantenimientoData.responsable || ""}
          >
            <option value="">Seleccionar responsable</option>
            {usuarios.map((usuario) => (
              <option key={usuario.idUsuario} value={usuario.idUsuario}>
                {usuario.nombre}
              </option>
            ))}
          </select>

          <button>Actualizar Mantenimiento</button>
        </form>
      </div>
    </div>
  );
}
