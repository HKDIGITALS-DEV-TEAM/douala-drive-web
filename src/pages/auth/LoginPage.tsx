import { Lock } from "lucide-react"; // Importer la configuration Keycloak
import { Link } from "react-router-dom";
import { keycloak } from "../../libs/auth/keycloak";

export default function LoginPage() {
  const handleKeycloakLogin = async () => {
    if (!keycloak.instance) {
      await keycloak.initKeycloak("login-required");
    }

    keycloak.instance?.login({
      redirectUri: window.location.origin + "/dashboard",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Lock className="w-12 h-12 text-primary" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Connexion administration
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Ou{" "}
          <Link
            to="/auth/register"
            className="font-medium text-primary hover:text-primary/80"
          >
            créer un nouveau compte
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <p className="text-center text-sm text-gray-600">
              Connectez-vous avec votre compte sécurisé Keycloak.
            </p>

            <div>
              <button
                onClick={handleKeycloakLogin}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Se connecter avec Keycloak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
