"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/routes/routes";
import { cerrarSesion } from "@/app/api/usuarios/usuario";
import { verificarAlertas } from "@/app/api/alertas/alerta";

export default function Dashboard() {
  const router = useRouter();

  const handleVerificar = async () => {
    const response = await verificarAlertas();
    alert(response.message);
  };

  const handleLogOut = async () => {
    const refresh = localStorage.getItem("refresh");

    await cerrarSesion(refresh);

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("rol");
    localStorage.removeItem("usuario");

    document.cookie = "access=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "rol=;path=/;";

    router.push(ROUTES.login);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white w-full w-[1600px] shadow-md  border border-gray-300 p-10">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <div className="mb-6">
          <div className="flex justify-between mt-8">
            <button onClick={() => router.push(ROUTES.equipos.CREAR)}>
              Registrar Equipo
            </button>
            <button onClick={() => router.push(ROUTES.equipos.LISTA)}>
              Consultar Equipo
            </button>
            <button onClick={() => router.push(ROUTES.mantenimietos.CREAR)}>
              Registrar Mantenimiento
            </button>
            <button onClick={() => router.push(ROUTES.mantenimietos.LISTA)}>
              Consultar Mantenimiento
            </button>
          </div>
          <div className="flex justify-between mt-8">
            <button onClick={() => router.push(ROUTES.programacion.CREAR)}>
              Registrar Programacion
            </button>
            <button onClick={() => router.push(ROUTES.programacion.LISTA)}>
              Consultar Programacion
            </button>
            <button onClick={() => router.push(ROUTES.certificados.CREAR)}>
              Registrar Certificado
            </button>
            <button onClick={() => router.push(ROUTES.certificados.LISTA)}>
              Consultar Certificado
            </button>
            <button onClick={() => router.push(ROUTES.reportes)}>
              Consultar Reporte general
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
