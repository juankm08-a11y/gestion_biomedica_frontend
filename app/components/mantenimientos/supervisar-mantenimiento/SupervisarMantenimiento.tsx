"use client";

import { useEffect, useState } from "react";
import Table, { Column } from "../../ui/table/DataTable";
import { supervisarMantenimiento } from "@/services/mantenimientos.service";
import { useList } from "@/hooks/useList";
import { ProgramacionMantenimientoResponse } from "@/types/ProgramacionMantenimiento.type";
import PageContainer from "../../ui/layout/PageContainer";
import Card from "../../ui/cards/Card";
import DataTable from "../../ui/table/DataTable";

export default function SupervisarMantenimiento({
  idMantenimiento,
}: {
  idMantenimiento: number;
}) {
  const {data:programaciones} = useList<ProgramacionMantenimientoResponse>(() => 
  supervisarMantenimiento(idMantenimiento))

  const columns: Column<ProgramacionMantenimientoResponse>[] = [
    {
      key:"equipo",
      label:"Equipo",
    },
    {
      key:"proximoMantenimiento",
      label:"Proximo Mantenimiento"
    },
    {
      key:"proximoCalibracion",
      label:"Próxima Calibración"
    }
  ]
  return (
    <PageContainer>
      <Card variant="table">
        <DataTable title="Supervisión de Mantenimiento"
        data={programaciones ?? []}
        columns={columns} />
      </Card>
    </PageContainer>
  );
}
