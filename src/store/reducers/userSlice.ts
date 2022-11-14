import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'services/types';

interface InitialStateType {
  isActiveUser: boolean;
  user: IUser | null;
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
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    setIsActiveUser: (state, action: PayloadAction<boolean>) => {
      state.isActiveUser = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { signout, setUser, setIsActiveUser } = userSlice.actions;
