import { createStore, applyMiddleware, compose } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { seamlessImmutableTransformCreator } from 'redux-persist-seamless-immutable';
const transformerConfig = {
  whitelistPerReducer: {},
  blacklistPerReducer: {},
};
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [seamlessImmutableTransformCreator(transformerConfig)],
};

export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------ Logger Middleware ------------- */
  // if (__DEV__) {
  // middleware.push(createLogger());
  // }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, compose(...enhancers));
  const persistor = persistStore(store);

  /* ------------- AutoRehydrate Enhancer ------------- */

  // in dev mode, we'll create the store through Reactotron
  // const store = createStore(rootReducer, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
