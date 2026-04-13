import { api } from "@/app/api/api";

export const registrarCertificado = async (data: any) => {
  const response = await api.post("/certificados/", data);
  return response.data;
};

export const consultarCertificados = async () => {
  const response = await api.get(`/certificados/`);
  return response.data;
};

export const consultarCertificado = async (id: number) => {
  const response = await api.get(`/certificados/${id}/`);
  return response.data;
};
