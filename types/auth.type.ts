export interface LoginRequest {
  correo: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  rol: string;
  usuario: string;
}

export interface RegistroUsuarioRequest {
  nombre: string;
  correo: string;
  password: string;
  rol:
    | "superadministrador"
    | "administrador"
    | "coordinador"
    | "ingenierobiomedico"
    | "tecnicobiomedico";
  estado: "activo" | "inactivo";
}

export interface RecuperarCuentaRequest {
  correo: string;
}

export interface ResetPasswordRequest {
  uid: string;
  nuevaPassword: string;
  token: string;
}
