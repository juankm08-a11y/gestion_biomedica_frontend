"use client";

import {
  cerrarOrden,
  consultarOrdenes,
} from "@/services/ordenesServicio.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../../ui/layout/PageContainer";
import Table, { Column } from "../../ui/table/DataTable";
import { ROUTES } from "@/app/routes/routes";
import { useHandle } from "@/hooks/useHandle";
import { useList } from "@/hooks/useList";
import { OrdenResponse } from "@/types/OrdenServicio.type";
import { useSearch } from "@/hooks/useSearch";
import { useAction } from "@/hooks/useAction";
import { useFiltered } from "@/hooks/useFiltered";
import SecondaryButton from "../../ui/buttons/SecondaryButton";
import Icon from "../../ui/iconos/Icon";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import Card from "../../ui/cards/Card";
import ButtonGrid from "../../ui/layout/ButtonGrid";
import SearchInput from "../../ui/input/SearchInput";
import DataTable from "../../ui/table/DataTable";

export default function HistorialOrdenes() {
  const router = useRouter();

  const {handle} = useHandle()

  const {data:ordenes,reload} = useList<OrdenResponse>(consultarOrdenes)

  const {search,setSearch} = useSearch()
  
  const {execute:cerrar} = useAction(cerrarOrden)

  const filtered = 
  useFiltered(ordenes,search,"tipoServicio")
  
  const handleCerrar = (idOrden:number) => {
    if (!confirm("¿Deseas cerrar esta orden")) return;

    handle(async() => {
      await cerrar(idOrden);
      reload()
      alert("Orden cerrada correctamente")
    })
  }

  const columns: Column<OrdenResponse>[] = [
    {
      key:"idOrden",
      label:"ID",
    },
    {
      key:"tipoServicio",
      label: "Tipo Servicio",
    },
    {
      key:"fechaInicio",
      label: "Fecha Inicio",
    },
    {
      key:"fechaFin",
      label:"Fecha Fin"
    },
    {
      key:"estado",
      label:"Estado"
    },{
      key:"actions",
      label:"Acciones",
      render:(orden) => (
        <div className="flex gap-2">
          <SecondaryButton text="Editar" icon={<Icon name="editar" size={16} />} onClick={() => router.push(ROUTES.ordenSerivicio.ACTUALIZAR(orden.idOrden))} />
          <PrimaryButton text="Cerrar" icon={<Icon name="guardar" size={16} />} onClick={() => handleCerrar(orden.idOrden)}  /> 
        </div>
      )
    }
  ]
  return (
    <PageContainer>
      <Card variant="table">
        <div className="flex items-center gap-4 mb-6">
          <ButtonGrid>
            <SearchInput value={search} onChange={setSearch} placeholder="Buscar orden..."/>
            <PrimaryButton text="Registrar Orden" icon={<Icon name="agregar" />} onClick={() => router.push(ROUTES.ordenSerivicio.CREAR)} />

          
          </ButtonGrid>
        </div>
        <DataTable title="Lista de Ordenes" data={filtered} columns={columns} />
      </Card>
    </PageContainer>
  );
}
