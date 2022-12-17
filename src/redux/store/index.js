import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import loggedUserReducer from "../reducers/loggedUserReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: "P455W0RD", //process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const generalReducer = combineReducers({
  loggedUser: loggedUserReducer
});

const persistedReducer = persistReducer(persistConfig, generalReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);