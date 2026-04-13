import { api } from "@/app/api/api";
import {
  LoginRequest,
  LoginResponse,
  RecuperarCuentaRequest,
  RegistroUsuarioRequest,
  ResetPasswordRequest,
} from "@/types/auth.type";
import { Usuario } from "@/types/Usuario.type";

export const registrarSesion = async (
  data: RegistroUsuarioRequest,
): Promise<Usuario> => {
  const response = await api.post("/usuarios/registro/", data);
  return response.data;
};

export const inciarSesion = async (
  data: LoginRequest,
): Promise<LoginResponse> => {
  const response = await api.post("/usuarios/login/", data);
  return response.data;
};

export const cerrarSesion = async (refresh: string): Promise<void> => {
  const response = await api.post("/usuarios/logout/", {
    refresh: refresh,
  });
  return response.data;
};

export const recuperarCuenta = async (
  data: RecuperarCuentaRequest,
): Promise<void> => {
  const response = await api.post("/usuarios/recuperar-cuenta/", data);
  return response.data;
};

export const recuperarContraseña = async (
  data: ResetPasswordRequest,
): Promise<void> => {
  const response = await api.put("/usuarios/recuperar-contraseña/", data);
  return response.data;
};

export const consultarUsuarios = async (): Promise<Usuario[]> => {
  const response = await api.get("/usuarios/ver-usuarios/");
  return response.data;
};
