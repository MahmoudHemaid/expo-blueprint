import 'react-native-gesture-handler';
import './src/config/ReactotronConfig';
import * as React from 'react';
import Reactotron from 'reactotron-react-native';
import useCachedResources from './src/hooks/useCachedResources';
import AppContainer from './src/navigation/AppContainer';

console.ignoredYellowBox = [];
console.disableYellowBox = true;

function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return <AppContainer />;
  }
}

export default __DEV__ ? Reactotron.overlay(App) : App;
