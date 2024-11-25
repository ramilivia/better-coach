"use client"
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/lib/auth-context";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const menuItems = [
    { href: "/", label: "Products" }
  ];

  if (!isLoggedIn) {
    menuItems.push({ href: "/register", label: "Register" });
    menuItems.push({ href: "/login", label: "Login" });
  } else {
    menuItems.push({ href: "/logout", label: "Logout" });
  }

  return (
    <div className="border border-secondary-foreground rounded-lg p-4 mb-8 border-1 shadow">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image className="max-w-[180px]" src="better-coach-logo-white.svg" alt="Better Coach Logo" width="180" height="40" loading="eager"/>
        </Link>
        {/* Hamburger button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-current mb-1"></div>
          <div className="w-6 h-0.5 bg-current mb-1"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <span className="text-lg font-semibold">{item.label}</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-2 items-end">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={navigationMenuTriggerStyle()}
              >
                <span className="text-lg font-semibold">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}