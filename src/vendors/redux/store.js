import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { persistStore } from "redux-persist";

import persistedRootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(persistedRootReducer, applyMiddleware(...middlewares))

const persistor = persistStore(store)

export { store, persistor }