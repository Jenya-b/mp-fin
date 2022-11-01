export interface IUser {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  telegram: string;
}

export interface IGenericResponse {
  message: string;
}

export interface IRegistrationInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISigninInputs {
  email: string;
  password: string;
  rememberMe: boolean;
  returnUrl: string | null;
}

export interface IPassRecoveryInput {
  email: string;
}

export interface IReportID {
  weekDataId: string;
  stateId: string;
}

export interface IReport {
  startWeek: string;
  endWeek: string;
  logistik: number;
  saled: number;
  weekId: string;
  stateId: string;
  isReportSaved: boolean;
  weekNumber: number;
}

export interface IArticle {
  articleId: string;
  articleName: string;
  costPrice: number;
  itemCode: string;
}

export interface IChangeArticle {
  myExcelDatas: FormDataEntryValue | null;
  weekDataId: string;
  stateId: string;
}
