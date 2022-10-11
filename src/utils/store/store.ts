import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/authApi';
import { userApi } from '../services/userApi';
import userReducer from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([authApi.middleware, userApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
