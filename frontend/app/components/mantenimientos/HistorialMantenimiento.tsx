"use client";

import {
  consultarMantenimientos,
  eliminarMantenimiento,
} from "@/services/mantenimientos.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../layout/PageContainer";
import Table from "../ui/Table";

export default function HistorialMantenimiento() {
  const [mantenimientos, setMantenimientos] = useState<any[]>([]);
  const [buscar, setBuscar] = useState("");
  const router = useRouter();

  const cargarMantenimiento = async () => {
    try {
      const response = await consultarMantenimientos();
      setMantenimientos(Array.isArray(response) ? response : []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarMantenimiento();
  }, []);

  const handleEliminar = async (id: number) => {
    if (!confirm("Seguro que deseas eliminar este mantenimiento")) return;

    await eliminarMantenimiento(id);
    cargarMantenimiento();
  };

  const mantenimientosFiltrados = mantenimientos.filter(
    (m) =>
      String(m.equipoNombre ?? "")
        .toLowerCase()
        .includes(buscar.toLowerCase()) ||
      String(m.tipo ?? "")
        .toLowerCase()
        .includes(buscar.toLowerCase()) ||
      String(m.estado ?? "")
        .toLowerCase()
        .includes(buscar.toLowerCase()),
  );

  const headers = [
    "Equipo",
    "Tipo",
    "Estado",
    "Fecha Inicio",
    "Fecha Fin",
    "Responsable",
    "Acciones",
  ];

  const rows = mantenimientosFiltrados.map((mantenimiento) => [
    mantenimiento.equipoNombre ?? mantenimiento.equipo,
    mantenimiento.tipo,
    mantenimiento.estado,
    mantenimiento.fechaInicio,
    mantenimiento.fechaFin,
    mantenimiento.responsableNombre ?? mantenimiento.responsable,
    <div className="flex gap-2">
      <button
        onClick={() =>
          router.push(
            `/mantenimientos/${mantenimiento.idMantenimiento}/actualizar`,
          )
        }
        className="border px-4 py-2 rounded"
      >
        Editar
      </button>
      <button
        onClick={() => handleEliminar(mantenimiento.idMantenimiento)}
        className="border px-4 py-2 rounded"
      >
        Eliminar
      </button>
    </div>,
  ]);
  return (
    <PageContainer title="Mantenimientos">
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar mantenimiento..."
          className="border p-2 flex-1 text-base"
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
        />
        <button className="border px-4 py-2">Buscar</button>
      </div>
      <Table headers={headers} rows={rows} />
    </PageContainer>
  );
}
