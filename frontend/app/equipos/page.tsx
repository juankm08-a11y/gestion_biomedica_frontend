"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "../routes/routes";

export default function Equipos() {
  const router = useRouter();
  return (
    <main>
      <h1>HOJA DE VIDA DE EQUIPOS</h1>
      <button onClick={() => router.push(ROUTES.EQUIPO_CREAR)}>
        Formulario para Registrar Equipos
      </button>
    </main>
  );
}
