"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { eliminarEquipo, listarEquipos } from "@/services/equipos.service";
import { ROUTES } from "../../routes/routes";
import { useEquipos } from "@/hooks/useEquipo";
import { useSearch } from "@/hooks/useSearch";

export const dynamic = "force-dynamic";

export default function TablaEquipos() {
  const router = useRouter();

  const { equipos, eliminar } = useEquipos();

  const { search, setSearch, filtered } = useSearch(equipos, "nombre");

  const handleEliminar = async (id: number) => {
    if (!confirm("¿Deseas eliminar este equipo?")) return;
    await eliminar(id);

    alert("Equipo eliminado correctamente");
  };
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {filtered.map((equipo) => (
        <div key={equipo.idEquipo}>
          {equipo.nombre}

          <button onClick={() => router.push(`/equipos/${equipo.idEquipo}`)}>
            Editar
          </button>
          <button onClick={() => handleEliminar(equipo.idEquipo)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}
