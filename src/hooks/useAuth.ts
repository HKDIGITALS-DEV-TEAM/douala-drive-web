import { useState, useEffect } from 'react';
import { User, AuthState } from '../types/auth';

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const storedUser = localStorage.getItem('user');
    return {
      user: storedUser ? JSON.parse(storedUser) : null,
      isAuthenticated: !!storedUser,
    };
  });

  const login = (email: string, password: string) => {
    // Simuler une vérification (à remplacer par une vraie API)
    if (email === 'admin@doualadrive.com' && password === 'admin123') {
      const user: User = {
        id: '1',
        firstName: 'Admin',
        lastName: 'User',
        email,
        role: 'admin',
      };
      localStorage.setItem('user', JSON.stringify(user));
      setAuthState({ user, isAuthenticated: true });
      return true;
    }
    return false;
  };

  const register = (userData: Omit<User, 'id' | 'role'>) => {
    // Simuler une inscription (à remplacer par une vraie API)
    const user: User = {
      ...userData,
      id: Date.now().toString(),
      role: 'admin',
    };
    localStorage.setItem('user', JSON.stringify(user));
    setAuthState({ user, isAuthenticated: true });
    return true;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setAuthState({ user: null, isAuthenticated: false });
  };

  return {
    ...authState,
    login,
    register,
    logout,
  };
}