import { api } from "../api";

export const registrarSesion = async () => {
  const response = await api.post("/usuarios/registro/");
  return response.data;
};

export const inciarSesion = async (data: any) => {
  const response = await api.post("/usuarios/login/");
  return response.data;
};

export const cerrarSesion = async () => {
  const response = await api.post("/usuarios/logout/");
  return response.data;
};

export const recuperarCuenta = async () => {
  const response = await api.post("/usuarios/recuperar-cuenta/");
  return response.data;
};

export const recuperarContraseña = async () => {
  const response = await api.put("/usuarios/recuperar-contraseña/");
  return response.data;
};
