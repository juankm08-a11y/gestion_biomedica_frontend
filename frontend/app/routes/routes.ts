export const ROUTES = {
  dashboard: {
    DASHBOARD: "/dashboard",
  },

  equipos: {
    EQUIPOS: "/equipos",
    EQUIPOS_VER: "/equipos/consultar",
    EQUIPO_CREAR: "/equipos/registro",
    EQUIPO_ACTUALIZAR: "/equipos/[id]",
    EQUIPO_DETALLE: (id: number) => `/equipos/${id}`,
  },

  ubicaciones: {
    UBICACION_CREAR: "/equipos/ubicaciones",
  },

  mantenimientos: {
    MANTENIMIENTO_CREAR: "/mantenimientos/registro",
  },
  codigosQr: {
    CODIGOQR_GENERAR: "/codigos-qr",
  },
  reportes: {
    REPORTE_REGISTRAR: "/reportes/registro",
  },
  usuarios: {
    USUARIO_REGISTRAR: "/usuarios/registro",
    USUARIO_AUTENTICAR: "/usuarios/login",
  },
};
