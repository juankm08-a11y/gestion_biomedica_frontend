"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "../routes/routes";
import { cerrarSesion } from "../api/usuarios/usuario";

export default function Dashboard() {
  const router = useRouter();

  // const handleVerificar = async () => {
  //   const response = await verificarAlertas();
  //   alert(response.message);
  // };

  // const handleLogOut = async () => {
  //   const refresh = localStorage.getItem("refresh");

  //   await cerrarSesion();

  //   localStorage.removeItem("access");
  //   localStorage.removeItem("refresh");

  //   router.push(ROUTES.login.LOGIN);
  // };
  return (
    <div>
      <button
        onClick={() =>
          router.push(ROUTES.notificaciones.NOTIFICACIONES_CONSULTAR)
        }
      >
        Consultar Notificacion
      </button>
      <button
        onClick={() => router.push(ROUTES.notificaciones.NOTIFICACIONES_CREAR)}
      >
        Registrar Notificacion
      </button>
      {/* <button
        onClick={() => router.push(ROUTES.certificados.CERTIFICADOS_CONSULTAR)}
      >
        Consultar Certificados
      </button> */}
      {/* <button
        onClick={() => router.push(ROUTES.certificados.CERTIFICADOS_CREAR)}
      >
        Crear certificado
      </button>
      <button
        onClick={() =>
          router.push(`/equipos/archivosadjuntos/carga-archivo/${1}`)
        }
      >
        Subir archivo
      </button>
      <button
        onClick={() =>
          router.push(`/equipos/archivosadjuntos/consulta-archivo/${1}`)
        }
      >
        Consulta archivos
      </button>
      {/* <button */}
      {/* onClick={() => router.push(ROUTES.ordenServicio.ORDENSERVICIO_CREAR)}
      >
        Crear Orden
      </button>
      <button
        onClick={() =>
          router.push(ROUTES.ordenServicio.ORDENSERVICIO_ACTUALIZAR)
        }
      >
        Actualizar Orden
      </button>
      <button
        onClick={() =>
          router.push(ROUTES.ordenServicio.ORDENSERVICIO_CONSULTAR)
        }
      >
        Consultar Orden
      </button>

      <button onClick={handleVerificar}>Verificar alertas</button>

      <button
        onClick={() =>
          router.push(ROUTES.supervisarMantenimiento.SUPERVISAR_MANTENIMIENTO)
        }
      >
        Supervisar Mantenimientos
      // </button> */}
      {/* <button onClick={() => router.push(ROUTES.equipos.EQUIPO_CREAR)}>
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
        onClick={() =>
          router.push(
            ROUTES.programacionMantenimiento.PROGRAMACIONMANTENIMIENTO_CREAR,
          )
        }
      >
        Registrar Programacion
      </button>

      <button
        onClick={() =>
          router.push(
            ROUTES.programacionMantenimiento
              .PROGRAMACIONMANTENIMIENTO_ACTUALIZAR,
          )
        }
      >
        Actualizar Programacion Mantenimiento
      </button>

      <button
        onClick={() =>
          router.push(
            ROUTES.programacionMantenimiento
              .PROGRAMACIONMANTENIMIENTO_CONSULTAR,
          )
        }
      >
        Consultar Programacion Mantenimiento
      </button>

      <button
        onClick={() =>
          router.push(
            ROUTES.programacionMantenimiento
              .PROGRAMACIONMANTENIMIENTO_ACTUALIZAR,
          )
        }
      >
        Actualizar Programacion
      </button> */}
      {/* 
      <button onClick={handleLogOut}></button> */}
    </div>
  );
}
