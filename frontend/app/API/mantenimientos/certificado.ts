import { api } from "../api";

export const registrarCertificado = async (data: any) => {
  const response = await api.post(
    "/mantenimientos/certificado_metrologico",
    data,
  );
  return response.data;
};

export const verCertificado = async (id: number) => {
  const response = await api.get(
    `/mantenimientos/certificado_metrologico/${id}/`,
  );
  return response.data;
};
