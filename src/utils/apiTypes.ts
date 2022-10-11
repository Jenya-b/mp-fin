export interface IGenericResponse {
  message: string;
}

export interface IRegistrationInputs {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  surname: string;
  phoneNumber: string;
}

export interface ISigninInputs {
  email: string;
  password: string;
  rememberMe: boolean;
  returnUrl: string | null;
}
