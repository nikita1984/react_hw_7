import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import chatReducer from "./Chat/chatSlice";
import thunkMiddleware from "redux-thunk";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({ chat: chatReducer });

const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});
