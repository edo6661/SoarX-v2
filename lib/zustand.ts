import { create } from "zustand";

interface GlobalState {
  isHoveredSection: boolean;
  setIsHoveredSection: (value: boolean) => void;
  isNav: boolean;
  setIsNav: (isNav: boolean) => void;
}
const useGlobalState = create<GlobalState>((set) => ({
  isHoveredSection: false,
  setIsHoveredSection: (value: any) => set({ isHoveredSection: value }),
  isNav: false,
  setIsNav: (isNav: any) => set({ isNav }),
}));

export default useGlobalState;
