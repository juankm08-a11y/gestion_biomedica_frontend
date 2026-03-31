import axios from "axios";

export const createMantemimiento = async () => {
  const response = await axios.post("/mantenimientos/");
  return response.data;
};

export const updateMantenimiento = async (id: number) => {
  const response = await axios.put("/mantenimientos/<int:pk>/");
  return response.data;
};

export const deleteMantenimiento = async (id: number) => {
  const response = await axios.delete("/mantenmientos/<int:pk>/");
};
