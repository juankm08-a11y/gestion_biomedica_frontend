import { ArchivoAdjuntoResponse } from "@/types/ArchivoAdjunto.type";

export function archivoToTable(data: ArchivoAdjuntoResponse) {
  return {
    nombre: data.nombre,
    url: data.archivo,
  };
}
