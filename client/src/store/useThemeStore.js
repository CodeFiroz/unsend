import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useThemeStore = create(persist(
    (set) => ({
        darkMode: false,
        darkToggle: () => set((state) => ({ darkMode: !state.darkMode })),
      }), 
      {
        name: 'theme-storage',
      }
))

export default useThemeStore
