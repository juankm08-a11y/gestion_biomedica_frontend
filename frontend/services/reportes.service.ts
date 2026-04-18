import { api } from "@/app/api/api";
import { ReporteRequest, ReporteResponse } from "@/types/Reporte.type";

export const consultarReporte = async () => {
  const response = await api.get("/reportes/generar-reporte/");
  return response.data;
};

export const generarReporte = async (data:ReporteRequest): Promise<ReporteResponse> => {

  const formData = new FormData()

  if (data.equipo) formData.append("equipo",data.equipo.toString());
  formData.append("nombre",data.nombre)
  formData.append("tipo",data.tipo)

  if (data.descripcion) formData.append("descripcion",data.descripcion)
  if (data.falla) formData.append("falla",data.falla)
  if (data.archivo) formData.append("archivo",data.archivo)

  const response = await api.post("/reportes/generar-reporte/",
    formData,
    {
      headers: {
        "Content-Type":"multipart/form/data",
      }
    }
  )
  return response.data
}