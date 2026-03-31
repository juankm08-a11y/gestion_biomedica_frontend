import axios from "axios";

export const generarNotificacion = async () => {
  const response = await axios.post("/mantenimientos/notificacion/");
  return response.data;
};

export const verNotificacion = async () => {
  const response = await axios.get("/mantenimientos/<int:pk>/");
  return response.data;
};
