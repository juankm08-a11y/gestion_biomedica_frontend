"use client";

import { useEffect, useState } from "react";
import Table from "../../ui/table/DataTable";
import { supervisarMantenimiento } from "@/services/mantenimientos.service";

export default function SupervisarMantenimiento({
  idMantenimiento,
}: {
  idMantenimiento: number;
}) {
  const [programaciones, setProgramaciones] = useState<any[]>([]);

  const cargarProgramaciones = async () => {
    const response = await supervisarMantenimiento(idMantenimiento);

    setProgramaciones(response.data);
  };

  useEffect(() => {
    cargarProgramaciones();
  }, [idMantenimiento]);

  const headers = ["Equipo", "Próximo Mantenimiento", "Próxima Calibración"];
  const rows = programaciones?.map((p) => [
    p.equipo,
    p.proximoMantenimiento,
    p.proximoCalibracion,
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
