export const ROUTES = {
  dashboard: "/dashboard",

  equipos: {
    LISTA: "/equipos",
    CREAR: "/equipos/registro",
    DETALLE: (equipoId: number) => `/equipos/${equipoId}`,
    ACTUALIZAR: (equipoId: number) => `/equipos/${equipoId}/actualizar`,
    QR: (equipoId: number) => `/equipos/${equipoId}/qr`,
  },
  archivos: {
    SUBIR: (equipoId: number) => `/equipos/${equipoId}/archivos/subir`,
    HISTORIAL: (equipoId: number) => `/equipos/${equipoId}/archivos/historial`,
  },

  mantenimientos: {
    CREAR: "/mantenimientos/registro",
    LISTA: "/mantenimientos",
    ACTUALIZAR: (mantenimientoId: number) =>
      `/mantenimientos/${mantenimientoId}/actualizar`,
    SUPERVISAR: (mantenimientoId: number) =>
      `/mantenimientos/${mantenimientoId}/supervisar`,
    REGISTRAR_PROGRAMACION: (mantenimientoId: number) =>
      `/mantenimientos/${mantenimientoId}/programacion/registro`,
    ACTUALIZAR_PROGRAMACION: (
      programacionId: number,
      mantenimientoId: number,
    ) =>
      `/mantenimientos/${mantenimientoId}/programacion/${programacionId}/actualizar`,
    CONSULTAR_PROGRAMACION: (mantenimientoId: number) =>
      `/mantenimientos/${mantenimientoId}/programacion`,
  },
  ordenSerivicio: {
    LISTA: "/mantenimientos/orden-servicio",
    CREAR: "/mantenimientos/orden-servicio/registro",
    DETALLE: (ordenId: number) => `/mantenimientos/orden-servicio/${ordenId}`,
    ACTUALIZAR: (ordenId: number) =>
      `/mantenimientos/orden-servicio/${ordenId}/actualizar`,
  },

  certificados: {
    LISTA: "/certificados",
    GENERAR: "/certificado/generar",
  },

  reportes: "/reportes",

  alertas: {
    PANEL: "/alertas",
  },

  login: "/login",
  register: "/register",
  recuperarpassword: "/recuperar-password",
  recuperarCuenta: "recuperar-cuenta",
};
