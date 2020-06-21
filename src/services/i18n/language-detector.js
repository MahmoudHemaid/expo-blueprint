import * as Localization from 'expo-localization';
import { AsyncStorage } from 'react-native';
import * as config from '../../config/i18n';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    // We will get back a string like "en-US". We
    // return a string like "en" to match our language
    // files.
    AsyncStorage.getItem('@App:language').then((language) => {
      const localLanguage = Localization.locale.split('-')[0];
      if (language && !!config.supportedLocales[language]) {
        callback(language);
      } else if (!!config.supportedLocales[localLanguage]) {
        callback(localLanguage);
      } else {
        callback(config.fallback);
      }
    });
  },
  init: () => {},
  cacheUserLanguage: () => {},
};
export default languageDetector;
