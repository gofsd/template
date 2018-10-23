// @flow
import { AsyncStorage } from "react-native";
import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import reducer from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, reducer)

export default function configureStore(onCompletion: () => void): any {
  const enhancer = composeWithDevTools(
    applyMiddleware(thunk),
  );

  const store = createStore(persistedReducer, enhancer);
  persistStore(store, onCompletion);

  return store;
}
