import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserProfile } from "./types";

type AuthState = {
  token: string | null;
  user: UserProfile | null;
  setUser: (user: UserProfile) => void;
  setToken: (token: string) => void;
  clearToken: () => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set(() => ({ token })),
      user: null,
      setUser: (user) => set(() => ({ user })),
      clearToken: () => set(() => ({ token: null })),
    }),
    {
      name: "auth-store", // Nom dans le localStorage
    }
  )
);

export default useAuthStore;
