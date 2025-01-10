import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import TermsOfService from "./pages/TermsOfService";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import ArticlesPage from "./pages/dashboard/articles/ArticlesPage";
import VehiclesPage from "./pages/dashboard/vehicles/VehiclesPage";
import ReservationsPage from "./pages/dashboard/reservations/ReservationsPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useEffect, useState } from "react";
import useAuthStore from "./libs/auth/store";
import { getKeycloakToken, initKeycloak } from "./libs/auth/keycloak";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardPage from "./pages/dashboard/DashboardPage";
import logger from "./libs/logger";

const queryClient = new QueryClient();

export default function App() {
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    initKeycloak("check-sso").then(() => {
      const token = getKeycloakToken();
      if (token) {
        setToken(token); // Passe uniquement si le token est valide
      } else {
        logger.warn("Aucun token Keycloak disponible");
      }
      setKeycloakInitialized(true);
    });
  }, [setToken]);

  if (!keycloakInitialized) {
    return <div>Loading Keycloak...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Auth Routes */}
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />

          {/* Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="vehicles" element={<VehiclesPage />} />
            <Route path="reservations" element={<ReservationsPage />} />
          </Route>

          {/* Public Routes */}
          <Route
            path="*"
            element={
              <div className="min-h-screen">
                <Header />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/catalog" element={<CatalogPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/cgv" element={<TermsOfService />} />
                  <Route path="/cgu" element={<TermsOfUse />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/faq" element={<FAQ />} />
                </Routes>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
