import { RootState } from 'store/store';

export const avatarSelector = (state: RootState) => state.fileAvatarReducer;
export const balanceSelector = (state: RootState) => state.balanceReducer.currentBalance;
export const fileReportSelector = (state: RootState) => state.fileReportReducer;
export const userSelector = (state: RootState) => state.persistedUserReducer;
export const notifySelector = (state: RootState) => state.notifyReducer;
