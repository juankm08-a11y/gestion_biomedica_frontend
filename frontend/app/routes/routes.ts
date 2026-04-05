export const ROUTES = {
  dashboard: {
    DASHBOARD: "/dashboard",
  },

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
  mantenimietos: {
    CREAR: "/mantenimientos/registro",
    LISTA: "/mantenimientos",
    ACTUALIZAR: "/mantenimientos/[id]",
  },
  programacion: {
    CREAR: "/programacion-mantenimiento/registro",
    LISTA: "/programacion-mantenimiento",
  },
  ordenServicio: {
    CREAR: "/orden-servicio/registro",
    LISTA: "/orden-servicio",
  },
  certificados: {
    CREAR: "/certificados/registro",
    LISTA: "/certificados",
  },
  reportes: "/reportes",

  login: "/login",
  register: "/register",
  recuperarassword: "/recuperar-password",
  recuperarCuenta: "recuperar-cuenta",
};
