import { obtenerQrEquipo } from "@/services/qr.service";
import { useFetch } from "./useFetch";

export function useQr(equipoId: number) {
  const { data, loading, error } = useFetch(
    () => obtenerQrEquipo(equipoId),
    [equipoId],
  );

  return {
    qr: data,
    loading,
    error,
  };
}
