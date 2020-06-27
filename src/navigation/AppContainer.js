import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './AppNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '../reducers';
import { StatusBar } from 'expo-status-bar';

const { store, persistor } = createStore();
const AppContainer = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ flex: 1 }}>
          <StatusBar />
          <SafeAreaProvider>
            <AppNavigation />
          </SafeAreaProvider>
        </View>
      </PersistGate>
    </Provider>
  );
};

export default AppContainer;
