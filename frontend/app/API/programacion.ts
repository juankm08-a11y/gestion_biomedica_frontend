import axios from "axios";

export const crearProgramacion = async () => {
  const response = await axios.post(
    "/mantenimientos/programacion_mantenimiento/",
  );

  return response.data;
};

export const actualizarProgramacion = async (id: number) => {
  const response = await axios.put(
    "/mantenimientos/programacion_mantenmiento/<int:pk>/",
  );
  return response.data;
};

export const generarNotificacion = async () => {
  const response = await axios.post("/mantenimientos/notificacion/");
  return response.data;
};

export const verNotificacion = async () => {
  const response = await axios.get("/mantenimientos/<int:pk>/");
  return response.data;
};
