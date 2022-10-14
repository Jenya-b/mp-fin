import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../api/types';

interface InitialStateType {
  isActiveUser: string | null;
  user: IUser | null;
}

export const storageUser = 'isSystemUser';
export const getStorage = (key: string) => localStorage.getItem(key);
export const saveStorage = (key: string, data: string) => localStorage.setItem(key, data);
export const removeStorage = (key: string) => localStorage.removeItem(key);

const initialState: InitialStateType = {
  isActiveUser: getStorage(storageUser),
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
      if (action.payload) {
        saveStorage(storageUser, action.payload);
      }
    },
  },
});

export default userSlice.reducer;
export const { signout, setUser, setIsActiveUser } = userSlice.actions;
