import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1:
              'You are looking at a project using React Query (TanStack), React Router, and React-i18n. A movie list has been\n' +
              '          added using json-server. You can view each movie and see or add your own comments.',
          },
        },
      },
      de: {
        translation: {
          description: {
            part1:
              'Sie sehen sich ein Projekt an, das React Query (TanStack), React Router und React-i18n verwendet. Eine Filmliste wurde mit json-server hinzugefügt. Sie können jeden Film ansehen und Ihre eigenen Kommentare sehen oder hinzufügen.',
          },
        },
      },
    },
  });

export default i18n;
