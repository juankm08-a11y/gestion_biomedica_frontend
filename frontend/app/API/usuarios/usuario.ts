import axios from "axios";

export const registrarSesion = async () => {
  const response = await axios.post("/usuarios/registro/");
  return response.data;
};

export const inciarSesion = async () => {
  const response = await axios.post("/usuarios/login/");
  return response.data;
};

export const cerrarSesion = async () => {
  const response = await axios.post("/usuarios/logout/");
  return response.data;
};

export const recuperarCuenta = async () => {
  const response = await axios.post("/usuarios/recuperar-cuenta/");
  return response.data;
};

export const recuperarContraseña = async () => {
  const response = await axios.put("/usuarios/recuperar-contraseña/");
  return response.data;
};
