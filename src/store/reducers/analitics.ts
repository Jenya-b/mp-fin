import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
  selectedQDFData: string[];
}

const initialState: InitialStateType = {
  selectedQDFData: [],
};

export const analiticsSlice = createSlice({
  name: 'analiticsSlice',
  initialState,
  reducers: {
    addSelectedQDFData: (state, action: PayloadAction<string>) => {
      if (state.selectedQDFData.includes(action.payload)) {
        state.selectedQDFData = state.selectedQDFData.filter((item) => item !== action.payload);
      } else {
        state.selectedQDFData.push(action.payload);
      }
    },
    clearSelectedQDFData: (state) => {
      state.selectedQDFData = [];
    },
    resetUser: () => initialState,
  },
});

export default analiticsSlice.reducer;
export const { addSelectedQDFData, resetUser, clearSelectedQDFData } = analiticsSlice.actions;
