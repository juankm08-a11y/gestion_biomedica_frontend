"use client";

import PageContainer from "../../ui/layout/PageContainer";
import DataTable, { Column } from "../../ui/table/DataTable";
import { consultarProgramacionMantenimiento } from "@/services/programacionMantenimiento.service";
import { useList } from "@/hooks/useList";
import { useError } from "@/hooks/useError";
import { ProgramacionMantenimientoResponse } from "@/types/ProgramacionMantenimiento.type";
import TableActions from "../../ui/table/TableActions";
import { ROUTES } from "@/app/routes/routes";

export default function HistorialProgramacion() {
  const { data: programaciones, loading } =
    useList<ProgramacionMantenimientoResponse>(
      consultarProgramacionMantenimiento,
    );

  const { error } = useError();

  if (loading) return <p>{error}</p>;

  const columns: Column<ProgramacionMantenimientoResponse>[] = [
    { key: "frecuenciaMantenimiento", label: "Frecuencia Mantenimiento" },
    { key: "frecuenciaCalibracion", label: "Frecuencia Calibración" },
    { key: "unidadFrecuencia", label: "Unidad Frecuencia" },
    { key: "proximoMantenimiento", label: "Próximo Mantenimiento" },
    { key: "proximoCalibracion", label: "Próximo Calibración" },
    {
      key: "actions",
      label: "Acciones",
      render: (programacion) => (
        <TableActions
          id={programacion.idProgramacion}
          editRoute={ROUTES.mantenimientos.ACTUALIZAR_PROGRAMACION(
            programacion.idProgramacion,
            programacion.mantenimiento,
          )}
          deleteService={() => {}}
          reload={() => {}}
        />
      ),
    },
  ];

  return (
    <PageContainer>
      <DataTable
        title="Historial de Programaciones"
        data={programaciones}
        columns={columns}
      />
    </PageContainer>
  );
}
