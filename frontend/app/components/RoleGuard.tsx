"use client";

import React from "react";
import { tieneRol } from "../utils/auth";

interface Props {
  roles: string[];
  children: React.ReactNode;
}

export default function RoleGuard({ roles, children }: Props) {
  if (!tieneRol(roles)) {
    return null;
  }

  return <>{children}</>;
}
