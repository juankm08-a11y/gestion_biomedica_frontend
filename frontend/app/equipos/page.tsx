"use client";
import { Equipo, listarEquipos } from "@/services/equipos.service";
import { useEffect, useState } from "react";
import ProtectedRoute from "../components/equipos/ProtectedRoute";
import { useRouter } from "next/navigation";
import Table from "../components/Table";

export const dynamic = "force-dynamic";

export default function EquiposPage() {
  const [equipos, setEquipos] = useState<Equipo[]>([]);

  const router = useRouter();

  const cargarEquipos = async () => {
    try {
      const response = await listarEquipos();

      setEquipos(response.data);
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
  ];
  const rows = equipos.map((equipo) => [
    equipo.nombre,
    equipo.marca,
    equipo.modelo,
    equipo.serie,
    equipo.fabricante,
    equipo.tipoTecnologia,
    equipo.ubicacion,
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
