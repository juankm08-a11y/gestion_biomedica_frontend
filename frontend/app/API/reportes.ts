import axios from "axios";

export const consultarReporte = async () => {
  const response = await axios.get("/reportes/");
  return response.data;
};
