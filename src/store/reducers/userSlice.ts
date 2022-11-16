import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAllUserOptions } from 'services/types';

interface InitialStateType {
  isActiveUser: boolean;
  user: IAllUserOptions | null;
}

const initialState: InitialStateType = {
  isActiveUser: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    signout: () => initialState,
    setUser: (state, action: PayloadAction<IAllUserOptions | null>) => {
      state.user = action.payload;
    },
    setIsActiveUser: (state, action: PayloadAction<boolean>) => {
      state.isActiveUser = action.payload;
    },
    resetUser: () => initialState,
  },
});

export default userSlice.reducer;
export const { signout, setUser, setIsActiveUser, resetUser } = userSlice.actions;
