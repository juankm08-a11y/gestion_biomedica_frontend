import { api } from "../api";

export const registrarCertificado = async (data: any) => {
  const response = await api.post(
    "/mantenimientos/certificado_metrologico",
    data,
  );
  return response.data;
};

export const consultarCertificados = async () => {
  const response = await api.get(`/mantenimientos/certificado_metrologico/`);
  return response.data;
};

export const consultarCertificado = async (id: number) => {
  const response = await api.get(
    `/mantenimientos/certificado_metrologico/${id}/`,
  );
  return response.data;
};
