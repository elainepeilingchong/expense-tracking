import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['general']
}

const middleware =  applyMiddleware(thunk);
const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
export {persistor, store}