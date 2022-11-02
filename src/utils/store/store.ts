import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../api/authApi';
import { userApi } from '../api/userApi';
import { productApi } from '../api/productApi';
import userReducer from './reducers/userSlice';
import fileReducer from './reducers/fileSlice';
import { fetchFiles } from '../api/filesApi';
import notifyReducer from './reducers/notifySlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    userReducer,
    fileReducer,
    notifyReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchFiles,
      },
      serializableCheck: false,
    }).concat([authApi.middleware, userApi.middleware, productApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
