import { eliminarEquipo, listarEquipos } from "@/services/equipos.service";
import { useEffect, useState } from "react";
import { Equipo } from "@/types/Equipo.type";

export function useEquipos() {
  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [loading, setLoading] = useState(true);

  const cargarEquipos = async () => {
    const response = await listarEquipos();

    setEquipos(response.data);

    setLoading(false);
    console.log("Equipos:", equipos);
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
