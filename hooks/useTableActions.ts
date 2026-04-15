import { useRouter } from "next/navigation";
import { useAction } from "./useAction";

export function useTableActions(deleteService: Function, reload: Function) {
  const router = useRouter();

  const { execute: remove } = useAction(deleteService);

  const eliminar = async (id: number) => {
    if (!confirm("¿Deseas eliminar este registro?")) return;

    await remove(id);

    alert("Registro eliminado correctamente");

    reload();
  };

  const editar = (route: string) => {
    router.push(route);
  };

  const cancelar = (route: string) => {
    router.push(route);
  };

  return {
    eliminar,
    editar,
    cancelar,
  };
}
