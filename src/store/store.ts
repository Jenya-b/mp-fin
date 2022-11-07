import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/api/authApi';
import { userApi } from '../services/api/userApi';
import { productApi } from '../services/api/productApi';
import userReducer from './reducers/userSlice';
import fileReportReducer from './reducers/fileReportSlice';
import { fetchReportFiles } from '../services/api/filesApi';
import notifyReducer from './reducers/notifySlice';
import fileAvatarReducer from './reducers/fileAvatarSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    userReducer,
    fileReportReducer,
    notifyReducer,
    fileAvatarReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchReportFiles,
      },
      serializableCheck: false,
    }).concat([authApi.middleware, userApi.middleware, productApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
