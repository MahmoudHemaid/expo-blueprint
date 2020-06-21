import 'react-native-gesture-handler';
import * as React from 'react';
import useCachedResources from './src/hooks/useCachedResources';
import AppContainer from './src/navigation/AppContainer';
import * as Updates from 'expo-updates';
import i18n from './src/services/i18n';
import { I18nManager as RNI18nManager } from 'react-native';

console.ignoredYellowBox = [];
console.disableYellowBox = true;

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [isI18nInitialized, setIsI18nInitialized] = React.useState(false);

  React.useEffect(() => {
    i18n
      .init()
      .then(() => {
        const RNDir = RNI18nManager.isRTL ? 'RTL' : 'LTR';
        // RN doesn't always correctly identify native
        // locale direction, so we force it here.
        if (i18n.dir !== RNDir) {
          const isLocaleRTL = i18n.dir === 'RTL';
          RNI18nManager.allowRTL(!!isLocaleRTL);
          RNI18nManager.forceRTL(!!isLocaleRTL);
          // RN won't set the layout direction if we
          // don't restart the app's JavaScript.
          Updates.reloadAsync();
        }
        setIsI18nInitialized(true);
      })
      .catch((error) => console.warn(error));
  }, []);

  if (!isLoadingComplete || !isI18nInitialized) {
    return null;
  } else {
    return <AppContainer />;
  }
}
