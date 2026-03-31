import axios from "axios";

export const cargarArchivoAdjunto = async () => {
  const response = await axios.post("/mantenimientos/archivo_adjunto");
  return response.data;
};

export const verArchivoAdjunto = async () => {
  const response = await axios.get("/mantenimientos/archivo_adjunto/<int:pk>/");
  return response.data;
};
