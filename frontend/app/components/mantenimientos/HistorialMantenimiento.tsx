"use client";

import { useAction } from "@/hooks/useAction";
import { useError } from "@/hooks/useError";
import { useFiltered } from "@/hooks/useFiltered";
import { useList } from "@/hooks/useList";
import { useSearch } from "@/hooks/useSearch";
import { aprobarMantenimiento, consultarMantenimientos, eliminarMantenimiento } from "@/services/mantenimientos.service";
import { consultarUsuarios } from "@/services/usuario.service";
import { MantenimientoResponse } from "@/types/Mantenimiento.type";
import { UsuarioResponse } from "@/types/Usuario.type";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DataTable, { Column } from "../ui/table/DataTable";
import SecondaryButton from "../ui/buttons/SecondaryButton";
import Icon from "../ui/iconos/Icon";
import { ROUTES } from "@/app/routes/routes";
import DangerButton from "../ui/buttons/DangerButton";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import PageContainer from "../ui/layout/PageContainer";
import Card from "../ui/cards/Card";
import ButtonGrid from "../ui/layout/ButtonGrid";
import SearchInput from "../ui/input/SearchInput";
import SelectField from "../ui/input/SelectField";

export default function HistorialMantenimiento() {
  const router = useRouter();

  const { data: mantenimientos, reload } = useList<MantenimientoResponse>(
    consultarMantenimientos,
  );

  const { data: usuarios } = useList<UsuarioResponse>(consultarUsuarios);

  const { execute: remove } = useAction(eliminarMantenimiento);

  const { execute: aprobar } = useAction(aprobarMantenimiento);

  const {search,setSearch} = useSearch();

  const [modalAprobar, setModalAprobar] = useState<number | null>(null);
  const [usuarioFirma, setUsuarioFirma] = useState("");

  const {error,handleError} = useError();

  const filtered = useFiltered(mantenimientos, search, "tipo");

  const handleEliminar = async (id:number) => {
    try {
      if (!confirm("Seguro que deseas eliminar este mantenimiento")) return;

      await remove(id)
    } catch (err) {
      handleError(err)
    }
  } 

  const handleAprobar = async () => {
    try {
      if (!modalAprobar || !usuarioFirma) return;

    await aprobar(modalAprobar, Number(usuarioFirma));

    setModalAprobar(null);

    reload();
    } catch (err) {
      handleError(err)
    }
  };

  

  const columns: Column<MantenimientoResponse>[] = [
    {
      key: "equipo",
      label: "Equipo",
    },
    {
      key: "tipo",
      label: "Tipo",
    },
    {
      key: "estado",
      label: "Estado",
    },
    {
      key: "fechaInicio",
      label: "Fecha Inicio",
    },
    {
      key: "fechaFin",
      label: "Fecha Fin",
    },
    {
      key: "responsable",
      label: "Responsable",
    },
    {
      key: "actions",
      label: "Acciones",
      render: (mantenimiento) => (
        <div className="flex gap-2 flex-wrap">
          <SecondaryButton
            text="Editar"
            icon={<Icon name="editar" size={16} />}
            onClick={() =>
              router.push(
                ROUTES.mantenimientos.ACTUALIZAR(mantenimiento.idMantenimiento),
              )
            }
          />
          <DangerButton
            text="Orden"
            icon={<Icon name="agregar" size={16} />}
            onClick={() =>
              router.push(
                ROUTES.mantenimientos.REGISTRAR_PROGRAMACION(
                  mantenimiento.idMantenimiento,
                ),
              )
            }
          />
          <PrimaryButton
            text="Aprobar"
            icon={<Icon name="guardar" size={16} />}
            onClick={() =>
              router.push(
                ROUTES.mantenimientos.REGISTRAR_PROGRAMACION(
                  mantenimiento.idMantenimiento,
                ),
              )
            }
          />
          <SecondaryButton
            text="Supervisar"
            icon={<Icon name="medico" size={16} />}
            onClick={() =>
              router.push(
                ROUTES.mantenimientos.SUPERVISAR(mantenimiento.idMantenimiento),
              )
            }
          />
        </div>
      ),
    },
  ];

  return (
    <PageContainer>
      <Card variant="table">
       <div className="flex items-center gap-4 mb-6">
        <ButtonGrid>
          <SearchInput value={search} onChange={setSearch} placeholder="Buscar mentenimiento..."
          />
          <PrimaryButton text="Registrar Mantenimiento" icon={<Icon name="agregar"/>} onClick={() => router.push(ROUTES.mantenimientos.CREAR)} />
          
        </ButtonGrid>
       </div>
       {error && <p className="text-red-500 mb-4">
       {error}
        </p>}
         <DataTable title="Historial de Mantenimientos" data={filtered ?? []}
        columns={columns} />
      </Card>

      {modalAprobar && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-[400px]">
            <h2 className="text-lg font-bold mb-4">
              Aprobar Mantenimiento
            </h2>
            <SelectField label="Reponsable" name="usuario" value={usuarioFirma} onChange={(e) => setUsuarioFirma(e.target.value)}
            options={(usuarios ?? []).map((u) => ({
              value:u.id.toString(),
              label: u.nombre,
            }))}
            />
            <div className="flex justify-end gap-3">
              <SecondaryButton
              text="Cancelar"
              icon={<Icon name="cancelar" size={16} />} 
              onClick={() => setModalAprobar(null)}/>
              <PrimaryButton text="Firmar y Aprobar" icon={<Icon name="guardar" size={16} />} />
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}
