import { CertificadoMetrologicoRequest, CertificadoMetrologicoResponse } from "@/types/Certificado.type";

export function certificadoToForm(
    data?: Partial<CertificadoMetrologicoResponse> 
): CertificadoMetrologicoRequest {
    return {
        numeroCertificado: data?.numeroCertificado ?? 0,
        responsable: data?.responsable ?? 0,
        fecha: data?.fecha ?? "",
    }
}