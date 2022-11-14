import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotify } from '../../interfaces/modalWindows';

interface initialStateType {
  notifyMessage: INotify;
  isOpenNotify: boolean;
}

const initialState: initialStateType = {
  notifyMessage: {
    message: '',
    type: undefined,
  },
  isOpenNotify: false,
};

export const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    closeNotify: (state) => {
      state.isOpenNotify = false;
    },
    openNotify: (state, action: PayloadAction<INotify>) => {
      state.notifyMessage = action.payload;
      state.isOpenNotify = true;
    },
  },
});

export const { closeNotify, openNotify } = notifySlice.actions;

export default notifySlice.reducer;
