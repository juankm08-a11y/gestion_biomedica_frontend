import axios from "axios";

export const registrarCertificado = async () => {
  const response = await axios.post("/mantenimientos/certificado_metrologico");
  return response.data;
};

export const verCertificado = async (id: number) => {
  const response = await axios.get(
    "/mantenimientos/certificado_metrologico/<int:pk>/",
  );
  return response.data;
};
