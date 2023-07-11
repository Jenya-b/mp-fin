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
import { fetchReportFiles } from 'services/api/filesApi';
import { adminApi } from 'services/api/adminApi';
import { analyticApi } from 'services/api/analyticApi';
import userReducer from 'store/reducers/userSlice';
import fileReportReducer from 'store/reducers/fileReportSlice';
import notifyReducer from 'store/reducers/notifySlice';
import fileAvatarReducer from 'store/reducers/fileAvatarSlice';
import fileWBQueryReducer from 'store/reducers/fileWBQuerySlice';
import balanceReducer from 'store/reducers/balanceSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { refreshDataApi } from 'services/api/refreshDataApi';

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
    [adminApi.reducerPath]: adminApi.reducer,
    [analyticApi.reducerPath]: analyticApi.reducer,
    [refreshDataApi.reducerPath]: refreshDataApi.reducer,
    persistedUserReducer,
    notifyReducer,
    balanceReducer,
    fileReportReducer,
    fileAvatarReducer,
    fileWBQueryReducer,
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
      adminApi.middleware,
      analyticApi.middleware,
      refreshDataApi.middleware,
    ]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
