import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productApi, { productReducer } from "../redux/api/productApi";
import authApi, { authReducer } from "../redux/api/auth";
import { authSliceReducer } from "../redux/slices/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Authentication"],
};
const rootReducer = combineReducers({
  [productApi.reducerPath]: productReducer,
  [authApi.reducerPath]: authReducer,
  Authentication: authSliceReducer,
});
const middleware = [productApi.middleware, authApi.middleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(...middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default persistStore(store);
