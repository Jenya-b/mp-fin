import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from 'services/api/authApi';
import { userApi } from 'services/api/userApi';
import { productApi } from 'services/api/productApi';
import { balanceApi } from 'services/api/balanceApi';
import { fetchReportFiles } from 'services/api/filesApi';
import { adminApi } from 'services/api/adminApi';
import { smartAnaliticApi } from 'services/api/smartAnaliticApi';
import { analiticApi } from 'services/api/analiticApi';
import userReducer from 'store/reducers/userSlice';
import fileReportReducer from 'store/reducers/fileReportSlice';
import notifyReducer from 'store/reducers/notifySlice';
import fileAvatarReducer from 'store/reducers/fileAvatarSlice';
import balanceReducer from 'store/reducers/balanceSlice';

const persistConfig = {
  key: 'userReducer',
  version: 1,
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [balanceApi.reducerPath]: balanceApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [smartAnaliticApi.reducerPath]: smartAnaliticApi.reducer,
    [analiticApi.reducerPath]: analiticApi.reducer,
    persistedUserReducer,
    fileReportReducer,
    notifyReducer,
    fileAvatarReducer,
    balanceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchReportFiles,
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      authApi.middleware,
      userApi.middleware,
      productApi.middleware,
      balanceApi.middleware,
      adminApi.middleware,
      smartAnaliticApi.middleware,
      analiticApi.middleware,
    ]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
