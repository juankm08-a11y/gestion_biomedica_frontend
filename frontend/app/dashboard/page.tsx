"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "../routes/routes";
import { cerrarSesion } from "../api/usuarios/usuario";

export default function Dashboard() {
  const router = useRouter();

  // const handleLogOut = async () => {
  //   const refresh = localStorage.getItem("refresh");

  //   await cerrarSesion();

  //   localStorage.removeItem("access");
  //   localStorage.removeItem("refresh");

  //   router.push(ROUTES.login.LOGIN);
  // };
  return (
    <div>
      <button onClick={() => router.push(ROUTES.equipos.EQUIPO_CREAR)}>
        Registrar Equipo
      </button>

      <button onClick={() => router.push(ROUTES.equipos.EQUIPOS_VER)}>
        Ver Lista de Equipos
      </button>

      <button
        onClick={() => router.push(ROUTES.mantenimientos.MANTENIMIENTO_CREAR)}
      >
        Registrar Mantenimiento
      </button>

      <button
        onClick={() => router.push(ROUTES.programacion.PROGRAMACION_CREAR)}
      >
        Registrar Programacion
      </button>
      {/* 
      <button onClick={handleLogOut}></button> */}
    </div>
  );
}
