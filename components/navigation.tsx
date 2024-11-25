"use client"
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/lib/auth-context";

type menuItem = {
  href?: string;
  label: string;
  onClick?: () => void;
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const menuItems: menuItem[] = [
    { href: "/", label: "Products" }
  ];

  if (!isLoggedIn) {
    menuItems.push({ href: "/register", label: "Register" });
    menuItems.push({ href: "/login", label: "Login" });
  } else {
    menuItems.push({ href: "#", label: "Logout", onClick: logout });
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
              {menuItems.map((item, i) => (
                <NavigationMenuItem key={i}>
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className={navigationMenuTriggerStyle()}
                    >
                      <span className="text-lg font-semibold">{item.label}</span>
                    </button>
                  ) : (
                    <Link href={item.href!} className={navigationMenuTriggerStyle()}>
                      <span className="text-lg font-semibold">{item.label}</span>
                    </Link>
                  )}
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
            {menuItems.map((item, i) => (
              item.onClick ? (
                <button
                  key={i}
                  onClick={item.onClick}
                  className={navigationMenuTriggerStyle()}
                >
                  <span className="text-lg font-semibold">{item.label}</span>
                </button>
              ) : (
                <Link 
                  key={i}
                  href={item.href!} 
                  className={navigationMenuTriggerStyle()}
                >
                  <span className="text-lg font-semibold">{item.label}</span>
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}