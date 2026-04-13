"use client";

import { useEffect, useState } from "react";
import Table from "../../ui/Table";
import { supervisarMantenimiento } from "@/services/mantenimientos.service";

export default function SupervisarMantenimiento() {
  const [programaciones, setProgramaciones] = useState<any[]>([]);

  const cargarProgrmaciones = async () => {
    const response = await supervisarMantenimiento();
    setProgramaciones(response.data);
  };

  useEffect(() => {
    cargarProgrmaciones();
  }, []);

  const headers = [
    "Equipo",
    "Próximo Mantenimiento",
    "Próxima Calibración",
    "Estado",
  ];
  const rows = programaciones.map((p) => [
    p.equipo,
    p.proximoMantenimiento,
    p.proximoCalibracion,
    p.estado,
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <div className="bg-white w-full max-w-[1200px] shadow-md border border-gray-300 rounded-sm p-8">
        <h2 className="bg-white w-full max-w-[1200px] shadow-md border border-gray-300 rounded-sm p-8">
          Supervisión Mantenimiento
        </h2>
        <Table headers={headers} rows={rows} />
      </div>
    </div>
  );
}
