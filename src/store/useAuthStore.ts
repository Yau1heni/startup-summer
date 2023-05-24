import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  accessToken: string
  setAccessToken: (accessToken: string) => void
}

export const useAuthStore = create<State, [['zustand/persist', State]]>(
  persist(
    (set) => ({
      accessToken: '',
      setAccessToken: (accessToken) => set({ accessToken }),
    }),
    { name: 'accessToken' }
  )
)
