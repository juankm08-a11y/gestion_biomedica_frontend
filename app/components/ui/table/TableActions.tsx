"use client";

import { useTableActions } from "@/hooks/useTableActions";
import SecondaryButton from "../buttons/SecondaryButton";
import Icon from "../iconos/Icon";
import DangerButton from "../buttons/DangerButton";

interface Props {
  id: number;
  editRoute: string;
  deleteService: Function;
  reload: Function;
}

export default function TableActions({
  id,
  editRoute,
  deleteService,
  reload,
}: Props) {
  const { eliminar, editar } = useTableActions(deleteService, reload);

  return (
    <div className="flex gap-2">
      <SecondaryButton
        text="Editar"
        icon={<Icon name="editar" size={16} />}
        onClick={() => editar(editRoute)}
      />
      <DangerButton
        text="eliminar"
        icon={<Icon name="eliminar" size={16} />}
        onClick={() => eliminar(id)}
      />
    </div>
  );
}
