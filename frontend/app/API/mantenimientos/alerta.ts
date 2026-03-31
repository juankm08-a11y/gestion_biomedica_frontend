import axios from "axios";

export const verificarAlertas = async () => {
  const response = await axios.get("/mantenimientos/verificar-alertas/");
  return response.data;
};
