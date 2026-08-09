import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import he from './locales/he';
import ru from './locales/ru';
import ar from './locales/ar';
import ja from './locales/ja';
import en from './locales/en';

export const supportedLanguages = ['he', 'ru', 'ar', 'ja', 'en'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const rtlLanguages: SupportedLanguage[] = ['he', 'ar'];

export const languageMeta: Record<SupportedLanguage, { label: string; nativeLabel: string }> = {
  he: { label: 'Hebrew', nativeLabel: 'עברית' },
  ru: { label: 'Russian', nativeLabel: 'Русский' },
  ar: { label: 'Arabic', nativeLabel: 'العربية' },
  ja: { label: 'Japanese', nativeLabel: '日本語' },
  en: { label: 'English', nativeLabel: 'English' },
};

export const getDirection = (language: string): 'rtl' | 'ltr' =>
  rtlLanguages.includes(language as SupportedLanguage) ? 'rtl' : 'ltr';

const applyDocumentDirection = (language: string) => {
  document.documentElement.lang = language;
  document.documentElement.dir = getDirection(language);
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      he: { translation: he },
      ru: { translation: ru },
      ar: { translation: ar },
      ja: { translation: ja },
      en: { translation: en },
    },
    fallbackLng: 'he',
    supportedLngs: supportedLanguages as unknown as string[],
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: 'geek_language',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

applyDocumentDirection(i18n.language ?? 'he');
i18n.on('languageChanged', applyDocumentDirection);

export default i18n;
