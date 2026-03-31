import axios from "axios";

export const createOrden = async () => {
  const response = await axios.post("/mantenimientos/orden_servicio/");
  return response.data;
};

export const updateOrden = async (id: number) => {
  const response = await axios.put("/mantenimientos/orden_servicio/<int:pk>/");
  return response.data;
};

export const patchOrden = async (id: number) => {
  const response = await axios.patch(
    "/mantenimientos/orden_servicio/<int:pk>/",
  );
  return response.data;
};
