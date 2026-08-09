import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { supportedLanguages, languageMeta, type SupportedLanguage } from '../i18n/i18n.ts';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = (i18n.language as SupportedLanguage) in languageMeta
    ? (i18n.language as SupportedLanguage)
    : 'he';

  const handleSelect = (lang: SupportedLanguage) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border font-eyebrow text-xs rounded-full text-text-h hover:text-primary hover:border-primary transition-colors"
      >
        <Globe className="w-3.5 h-3.5" strokeWidth={1.75} />
        {languageMeta[currentLanguage].nativeLabel}
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute end-0 mt-2 w-40 bg-geek-card border border-border rounded-xl shadow-xl overflow-hidden z-50"
        >
          {supportedLanguages.map((lang) => (
            <button
              key={lang}
              role="option"
              aria-selected={lang === currentLanguage}
              onClick={() => handleSelect(lang)}
              className={`w-full text-start px-4 py-2.5 font-eyebrow text-xs transition-colors ${
                lang === currentLanguage
                  ? 'bg-geek-accent text-primary'
                  : 'text-text-h hover:bg-geek-accent hover:text-primary'
              }`}
            >
              {languageMeta[lang].nativeLabel}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
