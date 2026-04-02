export const ROUTES = {
  dashboard: {
    DASHBOARD: "/dashboard",
  },

  equipos: {
    EQUIPOS: "/equipos",
    EQUIPOS_VER: "/equipos/consulta-equipos",
    EQUIPO_CREAR: "/equipos/registro-equipos",
    EQUIPO_ACTUALIZAR: "/equipos/[id]",
  },

  ubicaciones: {
    UBICACION_CREAR: "/equipos/ubicacion-equipo",
    UBICACION_ACTUALIZAR: "/equipos/ubicacion-equipo/[id]",
  },

  mantenimientos: {
    MANTENIMIENTO_CREAR: "/mantenimientos/registro",
    MANTENIMIENTOS_CONSULTAR: "/mantenimientos/consultar",
    MANTENIMIENTO_ACTUALIZAR: "/mantenimientos/[id]",
  },

  notificaciones: {
    NOTIFICACIONES: "/notificaciones",
  },

  programacionMantenimiento: {
    PROGRMACIONMANTENIMIENTO_CONSULTAR:
      "/programacion-mantenimiento/consulta-programacion",
    PROGRAMACIONMANTENIMIENTO_CREAR:
      "/programacion-mantenimiento/registro-programacion",
    PROGRAMACIONMANTENIMIENTO_ACTUALIZAR: "/programacion-mantenimiento/[id]",
  },

  ordenServicio: {
    ORDENSERVICIO: "/orden-servicio",
  },

  certificados: {
    CERTIFICADOS: "/certificados",
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

  archivosAdjuntos: {
    ARCHIVOSADJUNTOS: "/archivos-adjuntos",
  },

  supervisarMantenimiento: {
    SUPERVISAR_MANTENIMIENTO: "/supervisar-mantenimiento",
  },
};
