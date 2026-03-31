export const ROUTES = {
  equipos: {
    EQUIPOS: "/equipos",
    EQUIPO_CREAR: "/equipos/registro",
    EQUIPO_DETALLE: (id: number) => `/equipos/${id}`,
  },

  mantenimientos: {
    MANTENIMIENTO_CREAR: "/mantenimientos/registro_mantenimientos",
  },
  codigosQr: {
    CODIGOQR_GENERAR: "/codigosQr/",
  },
  reportes: {
    REPORTE_REGISTRAR: "/reportes/registro_reportes",
  },
  usuarios: {
    USUARIO_REGISTRAR: "/usuarios/registro_usuario",
    USUARIO_AUTENTICAR: "/usuarios/login_usuario",
  },
};
