import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../interfaces/user';

interface InitialStateType {
  user: IUser | null;
}

const initialState: InitialStateType = {
  user: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { logout, setUser } = userSlice.actions;
