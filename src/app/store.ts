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
import categoriesApi, { categoriesReducer } from "../redux/api/categoriesApi";
import { cartReducer } from "../redux/slices/cartSlice";
import { orderReducer } from "../redux/slices/orderSlice";
import { paginationReducer } from "../redux/slices/paginationSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Authentication","Cart"],
};
const rootReducer = combineReducers({
  [productApi.reducerPath]: productReducer,
  [authApi.reducerPath]: authReducer,
  [categoriesApi.reducerPath]: categoriesReducer,
  Authentication: authSliceReducer,
  Cart: cartReducer,
  Order: orderReducer,
  Pagination: paginationReducer
});
const middleware = [productApi.middleware, authApi.middleware,categoriesApi.middleware];
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
