export type FormValuesPassRecovery = {
  email: string;
};

export type FormValuesPassReset = {
  passNew: string;
};

export type FormValuesReg = {
  email: string;
  password: string;
  confirmPassword: string;
  isAgreeProcessing: boolean;
};

export type FormValuesSignin = {
  userName: string;
  password: string;
};

export type ErrorType = {
  message: string;
};
