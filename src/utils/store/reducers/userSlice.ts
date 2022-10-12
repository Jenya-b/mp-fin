import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../api/types';

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
    signout: () => initialState,
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { signout, setUser } = userSlice.actions;
