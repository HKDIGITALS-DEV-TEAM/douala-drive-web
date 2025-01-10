export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}