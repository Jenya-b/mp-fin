import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateType {
  currentBalance: number | null;
}

const initialState: initialStateType = {
  currentBalance: null,
};

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      state.currentBalance = action.payload;
    },
  },
});

export const { setBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
