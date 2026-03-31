import axios from "axios";

export const crearOrden = async () => {
  const response = await axios.post("/mantenimientos/orden_servicio/");
  return response.data;
};

export const actualizarOrden = async (id: number) => {
  const response = await axios.put("/mantenimientos/orden_servicio/<int:pk>/");
  return response.data;
};

export const cerrarOrden = async (id: number) => {
  const response = await axios.patch(
    "/mantenimientos/orden_servicio/<int:pk>/",
  );
  return response.data;
};

export const verificarAlertas = async () => {
  const response = await axios.get("/mantenimientos/verificar-alertas/");
  return response.data;
};

export const supervisarMantenimiento = async () => {
  const response = await axios.get("/mantenimientos/programados/");
  return response.data;
};
