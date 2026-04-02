"use client";

import { consultarEquipo } from "@/app/api/equipos/equipo";
import { registrarMantenimiento } from "@/app/api/mantenimientos/mantenimiento";
import { consultarUsuarios } from "@/app/api/usuarios/usuario";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FormularioRegistroMantenimiento() {
  const [mantenimientoData, setMantenimientoData] = useState({
    equipo: "",
    tipo: "",
    estado: "pendiente",
    fechaInicio: "",
    fechaFin: "",
    responsable: "",
  });

  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [equipos, setEquipos] = useState<any[]>([]);

  const router = useRouter();

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
        console.error("Error cargando datos");
      }
    };
    cargarDatos();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await registrarMantenimiento(mantenimientoData);

      alert("Mantenimiento registrado correctamente");

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
      console.error("Error al registrar el mantenimiento");
    }
  };

  const handleChange = async (e: any) => {
    const { name, value } = e.target;

    setMantenimientoData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-x-10 gap-y-6 items-center max-w-xl mx-auto"
    >
      <label className="font-semibold text-gray-700">EQUIPO</label>
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

      <label className="font-semibold text-gray-700">TIPO</label>
      <input
        name="tipo"
        value={mantenimientoData.tipo || ""}
        onChange={handleChange}
        className="border p-2"
        placeholder="Tipo"
      />

      <label className="font-semibold text-gray-700">ESTADO</label>
      <select
        value={mantenimientoData.estado || ""}
        name="estado"
        onChange={handleChange}
        className="border p-2"
      >
        <option value="aprobado">aprobado</option>
        <option value="pendiente">pendiente</option>
        <option value="ejecutado">ejecutado</option>
      </select>

      <label className="font-semibold text-gray-700">FECHA INICIO</label>
      <input
        type="date"
        value={mantenimientoData.fechaInicio || ""}
        name="fechaInicio"
        onChange={handleChange}
        className="border p-2"
      />

      <label className="font-semibold text-gray-700">FECHA FIN</label>
      <input
        type="date"
        value={mantenimientoData.fechaFin || ""}
        name="fechaFin"
        onChange={handleChange}
        className="border p-2"
      />

      <label className="font-semibold text-gray-700">RESPONSABLE</label>
      <select
        name="responsable"
        onChange={handleChange}
        value={mantenimientoData.responsable || ""}
        className="border p-2"
      >
        <option value="">Seleccionar responsable</option>
        {usuarios.map((usuario) => (
          <option key={usuario.idUsuario} value={usuario.idUsuario}>
            {usuario.nombre}
          </option>
        ))}
      </select>

      <button className="border px-6 py-3 rounded-full col-span-2">
        Registrar mantenimiento
      </button>
    </form>
  );
}
