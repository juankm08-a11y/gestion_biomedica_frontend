import { api } from "@/app/api/api";
import { CertificadoMetrologicoRequest, CertificadoMetrologicoResponse } from "@/types/Certificado.type";

export const registrarCertificado = async (data: CertificadoMetrologicoRequest): Promise<CertificadoMetrologicoResponse> => {
  const response = await api.post("/certificados/", data);
  return response.data;
};

export const consultarCertificados = async (): Promise<CertificadoMetrologicoResponse[]> => {
  const response = await api.get(`/certificados/`);
  return response.data;
};

export const consultarCertificado = async (idCertificado: number): Promise<CertificadoMetrologicoResponse> => {
  const response = await api.get(`/certificados/${idCertificado}/`);
  return response.data;
};
