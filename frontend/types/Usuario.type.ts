export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol:
    | "superadministrador"
    | "administrador"
    | "coordinador"
    | "ingenierobiomedico"
    | "tecnicobiomedico";
  estado: "activo" | "inactivo";
}
