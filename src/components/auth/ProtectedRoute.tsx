import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { keycloak } from "../../libs/auth/keycloak";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      const keycloakInstance = await keycloak.initKeycloak("login-required");

      if (keycloakInstance.authenticated) {
        setIsAuthenticated(true);
      } else {
        keycloakInstance.login({
          redirectUri: window.location.origin + location.pathname,
        });
      }
    };

    authenticate();
  }, [location]);

  if (!isAuthenticated) {
    return null; // Affiche rien pendant l'authentification
  }

  return <>{children}</>;
}
