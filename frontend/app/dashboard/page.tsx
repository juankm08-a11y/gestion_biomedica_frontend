"use client";

import { useState } from "react";
import FormularioRegistro from "../equipos/registro/page";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/equipos/registro")}>
        Registrar Equipo
      </button>
    </div>
  );
}
