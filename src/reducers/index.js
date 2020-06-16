import { combineReducers } from 'redux';
import configureStore from '../sagas/createStore';
import rootSaga from '../sagas';

export default () => {
  const rootReducer = combineReducers({
    auth: require('./authReducer.js').reducer,
  });

  return configureStore(rootReducer, rootSaga);
};
