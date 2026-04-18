import { EquipoRequest, EquipoResponse } from "@/types/Equipo.type";

export function equipoToForm(data?: Partial<EquipoResponse>): EquipoRequest {
  return {
    nombre: data?.nombre ?? "",
    marca: data?.marca ?? "",
    modelo: data?.modelo ?? "",
    serie: data?.serie ?? "",
    fabricante: data?.fabricante ?? "",
    tipoTecnologia: data?.tipoTecnologia ?? "",
    ubicacion: data?.ubicacion ?? 0,
  };
}
