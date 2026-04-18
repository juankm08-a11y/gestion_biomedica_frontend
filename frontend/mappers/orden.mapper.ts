import { OrdenRequest, OrdenResponse } from "@/types/OrdenServicio.type";

export function ordenToForm(
    data?: Partial<OrdenResponse>
): OrdenRequest {
    return {
        mantenimiento: data?.mantenimiento ?? 0,
        tipoServicio: data?.tipoServicio ?? "",
        descripcion: data?.descripcion ?? "",
        fechaInicio: data?.fechaInicio ?? "",
        fechaFin: data?.fechaFin ?? "",
        estado: data?.estado ?? "pendiente",
    }
}