import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationsEn from "../en"
import translationsRu from "../ru"
import translationsAm from "../am"

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    ru: { translation: translationsRu },
    am: { translation: translationsAm },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
})

export default i18n
