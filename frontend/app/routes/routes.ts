export const ROUTES = {
  EQUIPOS: "/equipos",
  EQUIPO_CREAR: "/equipos/registro_equipos",
  EQUIPO_DETALLE: (id: number) => `/equipos/${id}`,
  MANTENIMIENTO_CREAR: "/mantenimientos/registro_mantenimientos/",
  CODIGOQR_GENERAR: "/codigosQr/",
  REPORTE_REGISTRAR: "/reportes/registro_reportes/",
  USUARIO_REGISTRAR: "/usuarios/registro_usuario/",
  USUARIO_AUTENTICAR: "/usuarios/login_usuario/",
};
