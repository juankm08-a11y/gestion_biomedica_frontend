export interface EquipoRequest {
  nombre: string;
  marca: string;
  modelo: string;
  serie: string;
  fabricante: string;
  tipoTecnologia: string;
  ubicacion: number;
}

export interface EquipoResponse {
  idEquipo: number;
  nombre: string;
  marca: string;
  modelo: string;
  serie: string;
  fabricante: string;
  tipoTecnologia: string;
  ubicacion: number;
}
