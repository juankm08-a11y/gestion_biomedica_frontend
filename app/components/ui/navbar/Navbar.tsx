"use client";
import { ROUTES } from "@/app/routes/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: ROUTES.dashboard },
    { name: "Equipos", href: ROUTES.equipos.LISTA },
    { name: "Mantenimientos", href: ROUTES.mantenimientos.LISTA },
    { name: "Reportes", href: ROUTES.reportes },
  ];
  return (
    <nav className="bg-[var(--color-card)] shadow-md w-full overflow-x-auto">
      <div className="inline-flex min-w-full items-center gap-12 py-4 px-6">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1 font-medium whitespace-nowrap transition
              ${
                active
                  ? "border-b-2 border-black"
                  : "hover:border-b-2 hover:border-gray-600"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
