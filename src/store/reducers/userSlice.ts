import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAllUserOptions } from 'services/types';

interface InitialStateType {
  isActiveUser: boolean;
  user: IAllUserOptions | null;
  token: string | null;
  expiration: string | null;
}

const initialState: InitialStateType = {
  isActiveUser: false,
  user: null,
  token: null,
  expiration: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAllUserOptions | null>) => {
      state.user = action.payload;
    },
    setIsActiveUser: (state, action: PayloadAction<boolean>) => {
      state.isActiveUser = action.payload;
    },
    setAuthData: (state, action: PayloadAction<{ token: string; expiration: string }>) => {
      state.token = action.payload.token;
      state.expiration = action.payload.expiration;
    },
    resetUser: () => initialState,
  },
});

export default userSlice.reducer;
export const { setUser, setIsActiveUser, resetUser, setAuthData } = userSlice.actions;
