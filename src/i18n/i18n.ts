import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// ✅ IMPORTA DIRETO (obrigatório na Vercel)
import pt from "./locales/pt/translation.json";
import en from "./locales/en/translation.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
