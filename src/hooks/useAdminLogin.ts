import { useState } from 'react';

interface Credentials {
  email: string;
  password: string;
}

export function useAdminLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: Credentials) => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Implement actual login logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      // For demo purposes, always succeed
      // In production, this should validate against a real backend
      return true;
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
}