import { create } from 'zustand'

interface State {
  opened: boolean
  setOpened: () => void
}

export const useBurgerStore = create<State>((set) => ({
  opened: true,
  setOpened: () => set((state) => ({ opened: !state.opened })),
}))
