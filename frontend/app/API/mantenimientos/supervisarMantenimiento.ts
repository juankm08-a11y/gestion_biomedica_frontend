import axios from "axios";

export const supervisarMantenimiento = async () => {
  const response = await axios.get("/mantenimientos/programados/");
  return response.data;
};
