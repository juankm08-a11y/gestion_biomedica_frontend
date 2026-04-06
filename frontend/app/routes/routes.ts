export const ROUTES = {
  dashboard: "/dashboard",

  equipos: {
    LISTA: "/equipos",
    CREAR: "/equipos/registro",
    DETALLE: "/equipos/[id]",
    ACTUALIZAR: "/equipos/[id]/actualizar",
    QR: "/equipos/[id]/qr",
  },
  archivos: {
    SUBIR: "/equipos/[id]/archivos/subir",
    HISTORIAL: "/equipos/[id]/archivos/historial",
  },
  ubicaciones: {
    CREAR: "/equipos/ubicacion/registro",
    LISTA: "/equipos/ubicacion/[id]/actualizar",
  },
  mantenimientos: {
    CREAR: "/mantenimientos/registro",
    LISTA: "/mantenimientos",
    ACTUALIZAR: "/mantenimientos/[id]",
    SUPERVISAR: "/mantenimientos/supervisar",
    PROGRAMACION: "/mantenimientos/programacion",
    ACTUALIZAR_PROGRAMACION: "/mantenimientos/programacion/[id]/actualizar",
    CONSULTAR_PROGRAMACION: "/mantenimientos/programacion/consulta",
  },
  ordenSerivicio: {
    LISTA: "/mantenimientos/orden-servicio",
    CREAR: "/mantenimientos/orden-servicio/registro",
    DETALLE: "/mantenimientos/orden-servicio/[id]",
  },

  certificados: {
    LISTA: "/certificados",
    GENERAR: "/certificado/generar",
  },

  reportes: "/reportes",

  login: "/login",
  register: "/register",
  recuperarpassword: "/recuperar-password",
  recuperarCuenta: "recuperar-cuenta",
};
