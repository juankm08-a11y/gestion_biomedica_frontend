import axios from "axios";

export const registrarMantenimiento = async () => {
  const response = await axios.post("/mantenimientos/");
  return response.data;
};

export const actualizarMantenimiento = async (id: number) => {
  const response = await axios.put("/mantenimientos/<int:pk>/");
  return response.data;
};

export const eliminarMantenimiento = async (id: number) => {
  const response = await axios.delete("/mantenmientos/<int:pk>/");
  return response.data;
};
