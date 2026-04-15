export interface ArchivoAdjunto {
  equipo: number;
  nombre: string;
  archivo: File;
  extension: string;
  tamano: string;
  tipo: string;
  ruta?: string | null;
}
