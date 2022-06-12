import create from 'zustand';

export const useProgress = create((set)=>({
    isAnimating:false,
    setIsAnimating:(isAnimating) => set(()=>({isAnimating}))
}));

