// useUserStore.ts
import { User } from '@/interfaces/providers/auth.types';
import create from 'zustand';

interface UserStore {
  user: User | null; // Define the type as per your user data structure
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;