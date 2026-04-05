export const ROUTES = {
  dashboard: {
    DASHBOARD: "/dashboard",
  },

  equipos: {
    EQUIPO_VER: "/equipos/consulta-equipos",
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
    NOTIFICACIONES_CREAR: "/notificaciones/registro-notificacion",
    NOTIFICACIONES_CONSULTAR: "/notificaciones/consulta-notificacion",
  },

  programacionMantenimiento: {
    PROGRAMACIONMANTENIMIENTO_CONSULTAR:
      "/programacion-mantenimiento/consulta-programacion",
    PROGRAMACIONMANTENIMIENTO_CREAR:
      "/programacion-mantenimiento/registro-programacion",
    PROGRAMACIONMANTENIMIENTO_ACTUALIZAR: "/programacion-mantenimiento/[id]",
  },

  ordenServicio: {
    ORDENSERVICIO_CREAR: "/orden-servicio/registro-orden",
    ORDENSERVICIO_CONSULTAR: "/orden-servicio/consulta-orden",
    ORDENSERVICIO_ACTUALIZAR: "/orden-servicio/[id]",
  },

  certificados: {
    CERTIFICADOS_CREAR: "/certificados/registro-certificado",
    CERTIFICADOS_CONSULTAR: "/certificados/consulta-certificado",
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
    CODIGOQR_CONSULTAR: "/codigos-qr/[equipoId]",
  },
  reportes: {
    REPORTES: "/reportes",
  },

  archivosAdjuntos: {
    ARCHIVOSADJUNTOS: "/equipos/archivosadjuntos",
    ARCHIVOSADJUNTOS_CARGA:
      "/equipos/archivosadjuntos/carga-archivo/[equipoId]",
    ARCHIVOSADJUNTOS_CONSULTA:
      "/equipos/archivosadjuntos/consulta-archivo/[equipoId]",
  },

  supervisarMantenimiento: {
    SUPERVISAR_MANTENIMIENTO: "/supervisar-mantenimiento",
  },
};
