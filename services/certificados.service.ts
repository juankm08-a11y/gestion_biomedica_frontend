import { api } from "@/app/api/api";
import { CertificadoMetrologico } from "@/types/Certificado.type";

export const registrarCertificado = async (data: CertificadoMetrologico) => {
  const response = await api.post("/certificados/", data);
  return response.data;
};

export const consultarCertificados = async () => {
  const response = await api.get(`/certificados/`);
  return response.data;
};

export const consultarCertificado = async (idCertificado: number) => {
  const response = await api.get(`/certificados/${idCertificado}/`);
  return response.data;
};
