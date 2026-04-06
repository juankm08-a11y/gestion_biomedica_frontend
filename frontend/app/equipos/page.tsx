"use client";
import { eliminarEquipo, listarEquipos } from "@/services/equipos.service";
import { useEffect, useState } from "react";
import ProtectedRoute from "../components/equipos/ProtectedRoute";
import { useRouter } from "next/navigation";
import Table from "../components/ui/Table";

export const dynamic = "force-dynamic";

export default function EquiposPage() {
  const [equipos, setEquipos] = useState<any[]>([]);
  const [mantenimientoData, setMantenimientoData] = useState({});

  const router = useRouter();

  const cargarEquipos = async () => {
    try {
      const response = await listarEquipos();

      setEquipos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEliminar = async (id: number) => {
    const confirmar = confirm("¿Seguro que deseas eliminar este equipo?");
    if (!confirmar) return;

    try {
      await eliminarEquipo(id);
      cargarEquipos();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarEquipos();
  }, []);

  const headers = [
    "Nombre",
    "Marca",
    "Modelo",
    "Serie",
    "Fabricante",
    "Tipo Tecnologia",
    "Ubicacion",
    "Acciones",
  ];
  const rows = equipos.map((equipo) => [
    equipo.nombre,
    equipo.marca,
    equipo.modelo,
    equipo.serie,
    equipo.fabricante,
    equipo.tipoTecnologia,
    equipo.ubicacion,
    <div className="flex gap-2">
      <button
        onClick={() => router.push(`/equipos/${equipo.idEquipo}`)}
        className="px-2 py-1 bg-blue-500 text-white text-xs"
      >
        Ver
      </button>
      <button
        onClick={() => router.push(`/equipos/{${equipo.idEquipo}/actualizar`)}
        className="px-2 py-1 bg-blue-500 text-white text-xs"
      >
        Editar
      </button>
      <button
        onClick={() => handleEliminar(equipo.idEquipo)}
        className="px-2 py-1 bg-blue-500 text-white text-xs"
      >
        Eliminar
      </button>
    </div>,
  ]);

  const actions = (
    <button
      onClick={() => router.push("/equipos/registro-equipos")}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Registrar Equipo
    </button>
  );

  return (
    <ProtectedRoute
      roles={["superadministrador", "administrador", "ingenierobiomedico"]}
    >
      <Table headers={headers} rows={rows} actions={actions} />
    </ProtectedRoute>
  );
}
