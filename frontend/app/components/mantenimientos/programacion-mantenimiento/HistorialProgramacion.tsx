"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../../layout/PageContainer";
import Table from "../../ui/Table";
import { consultarProgramacionMantenimiento } from "@/services/programacionMantenimiento.service";

export default function HistorialProgramacion() {
  const [programaciones, setProgramaciones] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    const cargarProgramaciones = async () => {
      const data = await consultarProgramacionMantenimiento();
      setProgramaciones(Array.isArray(data) ? data : []);
    };
    cargarProgramaciones();
  });

  const headers = [
    "Frecuencia Mantenimiento",
    "Frecuencia Calibración",
    "Unidad Frecuencia",
    "Próximo Mantenimiento",
    "Próximo Calibración",
    "Acciones",
  ];
  const rows = programaciones.map((programacion) => [
    programacion.frecuenciaMantenimiento,
    programacion.frecuenciaCalibracion,
    programacion.unidadFrecuencia,
    programacion.proximoMantenimiento,
    programacion.proximoCalibracion,
    <button
      onClick={() =>
        router.push(`/mantenimientos/${programacion.idProgramacion}`)
      }
      className="text-blue-500"
    >
      Actualizar Programacion
    </button>,
  ]);

  return (
    <PageContainer title="Consultar Programación Mantenimiento">
      <Table headers={headers} rows={rows} />
    </PageContainer>
  );
}
