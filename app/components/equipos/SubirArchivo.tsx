"use client";
import { subirArchivo } from "@/services/archivos.service";
import PageContainer from "../ui/layout/PageContainer";
import FormularioBase from "../ui/form/FormularioBase";
import ButtonGrid from "../ui/layout/ButtonGrid";
import { useError } from "@/hooks/useError";
import { useRouter } from "next/router";
import { UseForm } from "@/hooks/useForm";
import { ArchivoRequest } from "@/types/ArchivoAdjunto.type";
import { useAction } from "@/hooks/useAction";
import Card from "../ui/cards/Card";
import { useHandle } from "@/hooks/useHandle";
import { ROUTES } from "@/app/routes/routes";

export default function SubirArchivo({ equipoId }: { equipoId: number }) {
  const router = useRouter();
  const { error, handleError } = useError();

  const {handle} = useHandle();

  const { formData, setField } = UseForm<ArchivoRequest>({
    equipo: equipoId,
    nombre: "",
    archivo: undefined as any,
  });

  const { execute: uploadArchivo, loading } = useAction(
    (data: ArchivoRequest) => subirArchivo(data.equipo, data.archivo),
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();

    handle(async () => {
      if (!formData.archivo) {
        alert("Seleccione un archivo");
        return;
      }

      await uploadArchivo(formData)

      alert("Archivo subido correctamente")

      router.push(ROUTES.equipos.LISTA)
    })
  };
  return (
    <PageContainer>
      <Card variant="form">
        <FormularioBase titulo="Subir Archivo" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <label>Archivo</label>
          <input
            type="file"
            onChange={(e: any) => setField("archivo", e.target.files)}
          />
          <ButtonGrid>
            <button
              type="submit"
              disabled={loading}
              className="border px-6 py-2 rounded"
            >
              {loading ? "Subiendo..." : "Subir"}
            </button>
          </ButtonGrid>
        </FormularioBase>
      </Card>
    </PageContainer>
  );
}
