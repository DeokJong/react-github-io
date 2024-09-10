import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { localeEN, localeKO } from './lang'

import { LANGUAGE_FOR_OS } from '@/models'

const resources = {
  [LANGUAGE_FOR_OS.EN]: { translation: localeEN },
  [LANGUAGE_FOR_OS.KO]: { translation: localeKO },
}

const initI18n = (lang: string): typeof i18n => {
  // eslint-disable-next-line import/no-named-as-default-member
  i18n.use(initReactI18next).init({
    resources,
    lng: lang,
    fallbackLng: 'en-US',
    debug: true,
    defaultNS: 'translation',
    ns: 'translation',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      prefix: '{',
      suffix: '}',
    },
  })

  return i18n
}

export default initI18n
