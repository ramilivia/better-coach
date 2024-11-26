"use client"
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useAuth } from "@/lib/auth-context";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

type menuItem = {
  href?: string;
  label: string;
  onClick?: () => void;
}

export default function Navigation() {
  const { isLoggedIn, logout } = useAuth();
  const [menuItems, setMenuItems] = useState<menuItem[]>([]);

  useEffect(() => {
    const baseItems: menuItem[] = [
      { href: "/", label: "Products" }
    ];

    if (!isLoggedIn) {
      baseItems.push({ href: "/register", label: "Register" });
      baseItems.push({ href: "/login", label: "Login" });
    } else {
      baseItems.push({ href: "#", label: "Logout", onClick: logout });
    }

    setMenuItems(baseItems);
  }, [isLoggedIn, logout]);

  return (
    <div className="border border-secondary-foreground rounded-lg p-4 mb-8 border-1 shadow">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image className="max-w-[180px]" src="better-coach-logo-white.svg" alt="Better Coach Logo" width="180" height="40" loading="eager"/>
        </Link>
        
        <Sheet>
          <SheetTrigger className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-current mb-1"></div>
            <div className="w-6 h-0.5 bg-current mb-1"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>
              <VisuallyHidden>Navigation Menu</VisuallyHidden>
            </SheetTitle>
            <nav className="flex flex-col space-y-4 mt-8">
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
          </SheetContent>
        </Sheet>

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
    </div>
  );
}