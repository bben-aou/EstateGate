import { create } from 'zustand'

interface IStepperState {
    currentStep: number;
    totalSteps: number;
    setCurrentStep: (step: number) => void;
    nextStep: () => void;
    previousStep: () => void;
    canGoNext: () => boolean;
    canGoPrevious: () => boolean;
}

export const useStepperStore = create<IStepperState>((set, get) => ({
    currentStep: 0,
    totalSteps: 8,
    setCurrentStep: (newStep) => set({ currentStep: newStep }),
    nextStep: () => set((state) => ({ 
        currentStep: Math.min(state.currentStep + 1, state.totalSteps - 1) 
    })),
    previousStep: () => set((state) => ({ 
        currentStep: Math.max(state.currentStep - 1, 0) 
    })),
    canGoNext: () => get().currentStep < get().totalSteps - 1,
    canGoPrevious: () => get().currentStep > 0,
}))