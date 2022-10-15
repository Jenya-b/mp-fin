import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../api/types';

interface InitialStateType {
  isActiveUser: string | null;
  user: IUser | null;
}

const initialState: InitialStateType = {
  isActiveUser: null,
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
    setIsActiveUser: (state, action: PayloadAction<string | null>) => {
      state.isActiveUser = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { signout, setUser, setIsActiveUser } = userSlice.actions;
