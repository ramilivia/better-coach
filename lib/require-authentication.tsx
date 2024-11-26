"use client";

import { useAuth } from "./auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ComponentType } from "react";

export function requireAuthentication<P extends object>(Component: ComponentType<P>) {
  return function ProtectedRoute(props: P) {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn) {
        router.push("/login");
      }
    }, [isLoggedIn, router]);

    // Don't render the component if not logged in
    if (!isLoggedIn) {
      return null;
    }

    return <Component {...props} />;
  };
} 