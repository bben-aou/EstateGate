import { create } from 'zustand'


interface IGlobalState {
    width : number;
    setWidth : (width: number) => void;
}

export const useGlobalStore = create<IGlobalState>((set)=>({
    width: 0,
    setWidth: (newWidth) => set({ width: newWidth }),

}))