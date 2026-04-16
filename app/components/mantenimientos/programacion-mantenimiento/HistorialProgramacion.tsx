"use client";

import PageContainer from "../../ui/layout/PageContainer";
import DataTable, { Column } from "../../ui/table/DataTable";
import { consultarProgramacionMantenimiento } from "@/services/programacionMantenimiento.service";
import { useList } from "@/hooks/useList";
import { useError } from "@/hooks/useError";
import { ProgramacionMantenimientoResponse } from "@/types/ProgramacionMantenimiento.type";
import TableActions from "../../ui/table/TableActions";
import { ROUTES } from "@/app/routes/routes";
import { useRouter } from "next/router";
import { useSearch } from "@/hooks/useSearch";
import { useFiltered } from "@/hooks/useFiltered";
import Card from "../../ui/cards/Card";
import ButtonGrid from "../../ui/layout/ButtonGrid";
import SearchInput from "../../ui/input/SearchInput";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import Icon from "../../ui/iconos/Icon";

export default function HistorialProgramacion({idMantenimiento}:{idMantenimiento:number}) {

  const router = useRouter();


  const { data: programaciones, reload } =
    useList<ProgramacionMantenimientoResponse>(
      () => consultarProgramacionMantenimiento(idMantenimiento)
    );

  const { error } = useError();

  const {search,setSearch} = useSearch();

  const filtered = useFiltered(programaciones, search,"unidadFrecuencia")

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
   <Card variant="table">
    <div className="flx items-center gap-4 mb-6">
      <ButtonGrid>
        <SearchInput value={search} onChange={setSearch} placeholder="Buscar programacion..." />
        <PrimaryButton text="Registrar Programación" icon={<Icon name="agregar" />} onClick={() => router.push(ROUTES.mantenimientos.REGISTRAR_PROGRAMACION(0))} />

      </ButtonGrid>
    </div>
    {error && (
      <p className="text-red-500 mb-4">
        {error}
      </p>
    )}

       <DataTable
        title="Historial de Programaciones"
        data={filtered}
        columns={columns}
      />
   </Card>
    </PageContainer>
  );
}
