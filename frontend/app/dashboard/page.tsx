"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "../routes/routes";

export default function Dashboard() {
  const router = useRouter();
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
      <button onClick={() => router.push(ROUTES.codigosQr.CODIGOQR_GENERAR)}>
        Generar Codigo QR
      </button>
    </div>
  );
}
