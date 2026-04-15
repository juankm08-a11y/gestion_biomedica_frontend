"use client";

import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";
import { ROUTES } from "@/app/routes/routes";
import { useList } from "@/hooks/useList";
import { eliminarEquipo, listarEquipos } from "@/services/equipos.service";
import { useFiltered } from "@/hooks/useFiltered";
import { EquipoResponse } from "../../../types/Equipo.type";
import PageContainer from "../ui/layout/PageContainer";
import ButtonGrid from "../ui/layout/ButtonGrid";
import Icon from "../ui/iconos/Icon";
import SearchInput from "../ui/input/SearchInput";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import Card from "../ui/cards/Card";
import TableActions from "../ui/table/TableActions";
import DataTable, { Column } from "../ui/table/DataTable";

export const dynamic = "force-dynamic";

export default function TablaEquipos() {
  const router = useRouter();

  const { data: equipos, reload } = useList<EquipoResponse>(listarEquipos);

  const { search, setSearch } = useSearch();

  const filtered = useFiltered(equipos, search, "nombre");

  const columns: Column<EquipoResponse>[] = [
    { key: "nombre", label: "Nombre" },
    { key: "marca", label: "Marca" },
    { key: "modelo", label: "Modelo" },
    { key: "serie", label: "Serie" },
    {
      key: "actions",
      label: "Acciones",
      render: (equipo: EquipoResponse) => (
        <TableActions
          id={equipo.idEquipo}
          editRoute={ROUTES.equipos.ACTUALIZAR(equipo.idEquipo)}
          deleteService={eliminarEquipo}
          reload={reload}
        />
      ),
    },
  ];

  return (
    <PageContainer>
      <Card variant="table">
        <div className="flex items-center gap-4 mb-6">
          <ButtonGrid>
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Buscar equipo..."
            />
            <PrimaryButton
              text="Registrar Equipo"
              icon={<Icon name="agregar" />}
              onClick={() => router.push(ROUTES.equipos.CREAR)}
            />
            <PrimaryButton
              text="Registrar Mantenimiento"
              icon={<Icon name="agregar" />}
              onClick={() => router.push(ROUTES.mantenimientos.CREAR)}
            />
          </ButtonGrid>
        </div>
        <DataTable title="Lista de equipos" data={filtered} columns={columns} />
      </Card>
    </PageContainer>
  );
}
