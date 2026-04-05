import { api } from "@/app/api/api";

export const subirArchivo = async (equipoId: number, archivo: File) => {
  const formData = new FormData();

  formData.append("archivo", archivo);

  const response = await api.post(
    `/mantenimientos/archivo_adjunto/${equipoId}/`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};

export const listarArchivos = async (equipoId: number) => {
  const response = await api.get(
    `/mantenimientos/archivo_adjunto/${equipoId}/`,
  );
  return response.data;
};
