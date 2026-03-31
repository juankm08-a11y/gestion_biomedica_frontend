import axios from "axios";

export const registroUsuario = async () => {
  const response = await axios.post("/usuarios/registro/");
  return response.data;
};

export const loginUsuario = async () => {
  const response = await axios.post("/usuarios/login/");
  return response.data;
};

export const logOut = async () => {
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
