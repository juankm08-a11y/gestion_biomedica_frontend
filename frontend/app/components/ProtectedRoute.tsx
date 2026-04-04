"use client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { isAuthenticated, tieneRol } from "../utils/auth";

interface Props {
  children: React.ReactNode;
  roles?: string[];
}

export default function ProtectedRoute({ children, roles }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
      return;
    }
    if (roles && !tieneRol(roles)) {
      router.push("/dashboard");
    }
  }, []);
  return <>{children}</>;
}
