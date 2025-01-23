import { create } from 'zustand';

interface NavMenuState {
    menuState: boolean;
    setMenuState: (menuState: boolean) => void;
}

export const useNavMenuStore = create<NavMenuState>()((set) => ({
    menuState: false,
    setMenuState: (menuState: boolean) => set(() => ({ menuState: menuState }))
}));
