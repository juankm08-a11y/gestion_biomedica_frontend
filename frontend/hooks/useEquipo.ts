import { eliminarEquipo, listarEquipos } from "@/services/equipos.service";
import { useFetch } from "./useFetch";
import { useEffect, useState } from "react";
import { Equipo } from "@/types/Equipo.type";

export function useEquipos() {
  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [loading, setLoading] = useState(true);

  const cargarEquipos = async () => {
    const response = await listarEquipos();

    setEquipos(Array.isArray(response.data) ? response.data : []);

    setLoading(false);
  };

  useEffect(() => {
    cargarEquipos();
  }, []);

  const eliminar = async (id: number) => {
    await eliminarEquipo(id);

    cargarEquipos();
  };

  return {
    equipos,
    loading,
    eliminar,
  };
}
