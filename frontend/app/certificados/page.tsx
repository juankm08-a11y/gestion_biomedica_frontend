import ConsultaCertificado from "./consulta-certificado/page";
import RegistroCertificado from "./registro-certificado/page";

export default function CertificadosPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Certificado Metrologico</h1>
      <RegistroCertificado />
      <ConsultaCertificado />
    </div>
  );
}
