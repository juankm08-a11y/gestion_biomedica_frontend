"use client";
import { ROUTES } from "@/app/routes/routes";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
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
    <nav className="w-full bg-[var(--color-card)] shadow-md">
      <div className="w-full mx-auto flex justify-center ">
        <NavigationMenu>
          <NavigationMenuList className="gap-10">
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 font-medium ${
                    pathname === link.href ? "border-b-2 border-black" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
