export const ROUTES = {
  dashboard: {
    DASHBOARD: "/dashboard",
  },

  equipos: {
    EQUIPOS: "/equipos",
    EQUIPOS_VER: "/equipos/consultar",
    EQUIPO_CREAR: "/equipos/registro",
    EQUIPO_ACTUALIZAR: "/equipos/[id]",
  },

  ubicaciones: {
    UBICACION_CREAR: "/equipos/ubicaciones",
    UBICACION_ACTUALIZAR: "/equipos/ubicaciones",
  },

  mantenimientos: {
    MANTENIMIENTO_CREAR: "/mantenimientos/registro",
    MANTENIMIENTOS_CONSULTAR: "/mantenimientos/consultar",
    MANTENIMIENTO_ACTUALIZAR: "/mantenimientos/[id]",
    MANTENIMIENTO_ARCHIIVOSADJUNTOS: "/mantenimientos/archivosadjuntos",
    MANTENIMIENTO_CERTIFICADOS: "/mantenimientos/certificados",
    MANTENIMIENTO_ORDENSERVICIO: "/mantenimientos/orden-servicio",
    MANTENIMIENTO_REGISTRO: "/mantenimientos/registro",
    MANTENIMIENTO_SUPERVISIO: "/mantenimientos/supervision",
  },

  login: {
    LOGIN: "/login",
  },

  register: {
    REGISTER: "/register",
  },

  recoverypassword: {
    RECOVERYPASSWORD: "/recuperar-password",
  },

  recoryaccount: {
    RECOVERYACCOUNT: "/recuperar-cuenta",
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
