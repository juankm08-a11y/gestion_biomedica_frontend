export interface ArchivoRequest {
  equipo: number;
  nombre: string;
  archivo: File;
}

export interface ArchivoAdjuntoResponse {
  idArchivo: number;
  equipo: number;
  nombre: string;
  archivo: string;
  extension: string;
  tamano: string;
  tipo: string;
  ruta?: string | null;
}
