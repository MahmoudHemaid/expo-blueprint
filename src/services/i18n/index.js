import i18next from 'i18next';
import { I18nManager as RNI18nManager, AsyncStorage } from 'react-native';
import * as config from '../../config/i18n';
import date from './date';
import languageDetector from './language-detector';
import translationLoader from './translation-loader';
import { lang } from 'moment';
import * as Updates from 'expo-updates';

const i18n = {
  /**
   * @returns {Promise}
   */
  init: () => {
    return new Promise((resolve, reject) => {
      i18next
        .use(languageDetector)
        .use(translationLoader)
        .init(
          {
            fallbackLng: config.fallback,
            ns: config.namespaces,
            defaultNS: config.defaultNamespace,
            interpolation: {
              escapeValue: false,
              format(value, format) {
                if (value instanceof Date) {
                  return date.format(value, format);
                }
              },
            },
          },
          (error) => {
            if (error) {
              return reject(error);
            }
            date
              .init(i18next.language)
              .then(resolve)
              .catch((error) => reject(error));
          }
        );
    });
  },
  /**
   * @param {string} key
   * @param {Object} options
   * @returns {string}
   */
  t: (key, options) => i18next.t(key, options),
  /**
   * @param {string} language
   * @returns {Void}
   */
  changeLanguage: async (language) => {
    await AsyncStorage.setItem('@App:language', language);
    if (language == i18next.language) return;

    const isLanguageRTL = i18next.dir(language) == 'rtl';
    RNI18nManager.allowRTL(!!isLanguageRTL);
    RNI18nManager.forceRTL(!!isLanguageRTL);

    Updates.reloadAsync();
  },
  /**
   * @returns {string}
   */
  get locale() {
    return i18next.language;
  },
  /**
   * @returns {'LTR' | 'RTL'}
   */
  get dir() {
    return i18next.dir().toUpperCase();
  },
  /**
   * @returns {boolean}
   */
  get isRTL() {
    return i18next.dir() == 'rtl';
  },
  /**
   * Similar to React Native's Platform.select(),
   * i18n.select() takes a map with two keys, 'rtl'
   * and 'ltr'. It then returns the value referenced
   * by either of the keys, given the current
   * locale's direction.
   *
   * @param {Object<string,mixed>} map
   * @returns {mixed}
   */
  select(map) {
    const key = this.isRTL ? 'rtl' : 'ltr';
    return map[key];
  },
};
export const t = i18n.t;
export const changeLanguage = i18n.changeLanguage;
export default i18n;
