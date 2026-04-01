import { create } from "zustand";

export type Language = 'pt' | 'en';

interface I18nStoreProps {
    language: Language;
}

interface I18nStore extends I18nStoreProps {
    setLanguage: (language: Language) => void;
    toggleLanguage: () => void;
}

const initialState: I18nStoreProps = {
    language: 'pt',
}

export const useI18nStore = create<I18nStore>((set, get) => ({
    ...initialState,
    setLanguage: (language: Language) => set({ language }),
    toggleLanguage: () => set({ language: get().language === 'pt' ? 'en' : 'pt' }),
}));
