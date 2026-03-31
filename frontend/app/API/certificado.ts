import axios from "axios";

export const createCertificado = async () => {
  const response = await axios.post("/mantenimientos/certificado_metrologico");
  return response.data;
};

export const getCertificado = async (id: number) => {
  const response = await axios.get(
    "/mantenimientos/certificado_metrologico/<int:pk>/",
  );
  return response.data;
};

export const cargarArchivoAdjunto = async () => {
  const response = await axios.post("/mantenimientos/archivo_adjunto");
  return response.data;
};

export const getArchivoAdjunto = async () => {
  const response = await axios.get("/mantenimientos/archivo_adjunto/<int:pk>/");
  return response.data;
};
