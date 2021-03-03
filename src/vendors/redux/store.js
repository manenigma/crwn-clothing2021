import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import  rootSaga  from './root-saga';

import { persistStore } from "redux-persist";

import persistedRootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

const store = createStore(persistedRootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor }