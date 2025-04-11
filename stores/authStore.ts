import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { UserDto } from '@/models/user'

interface AuthState {
  token: string | null
  user: UserDto | null
  setAuth: (token: string, user: UserDto) => void
  clearAuth: () => void
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setAuth: (token: string, user: UserDto) => set({ token, user }),
      clearAuth: () => set({ token: null, user: null }),
    }),
    {
      name: 'auth-storage',
    },
  ),
)

export const useAuthUser = () => useAuthStore((state) => state.user!)
export const useIsAuthenticated = () => useAuthStore((state) => !!state.token)
export const useSetAuth = () => useAuthStore((state) => state.setAuth)
export const useClearAuth = () => useAuthStore((state) => state.clearAuth)
