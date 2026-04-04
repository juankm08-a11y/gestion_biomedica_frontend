import { api } from "../api";

export const registrarSesion = async (data: any) => {
  const response = await api.post("/usuarios/registro/", data);
  return response.data;
};

export const inciarSesion = async (data: any) => {
  const response = await api.post("/usuarios/login/", data);
  return response.data;
};

export const cerrarSesion = async (refresh: any) => {
  const response = await api.post("/usuarios/logout/", {
    refresh: refresh,
  });
  return response.data;
};

export const recuperarCuenta = async () => {
  const response = await api.post("/usuarios/recuperar-cuenta/");
  return response.data;
};

export const recuperarContraseña = async (data: any) => {
  const response = await api.put("/usuarios/recuperar-contraseña/", data);
  return response.data;
};

export const consultarUsuarios = async () => {
  const response = await api.get("/usuarios/ver-usuarios/");
  return response.data;
};
