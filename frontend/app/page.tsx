"use client";

import { ROUTES } from "./routes/routes";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div>SOFTWARE DE GESTION DE EQUIPOS BIOMEDICOS</div>
      <button onClick={() => router.push(ROUTES.dashboard.DASHBOARD)}>
        Dashboard
      </button>
    </main>
  );
}
