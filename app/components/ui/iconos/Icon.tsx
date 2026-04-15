"use client";

import {
  Pencil,
  Trash2,
  Plus,
  Search,
  Save,
  X,
  Bell,
  QrCode,
  Printer,
  Download,
  ArrowLeft,
} from "lucide-react";

import { FaUserMd, FaHospital } from "react-icons/fa";

import { IconAlertTriangle, IconScan } from "@tabler/icons-react";

const icons = {
  editar: Pencil,
  eliminar: Trash2,
  agregar: Plus,
  buscar: Search,
  guardar: Save,
  cancelar: X,
  alertas: Bell,
  qr: QrCode,
  imprimir: Printer,
  descargar: Download,
  regresar: ArrowLeft,

  medico: FaUserMd,
  hospital: FaHospital,

  alerta: IconAlertTriangle,
  escanear: IconScan,
};

type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 24 }: IconProps) {
  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return <IconComponent size={size} />;
}
