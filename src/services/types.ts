import { IParam } from 'interfaces/searchQuery';

export interface IPersonalDataUser {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  telegram: string;
}

export interface IAllUserOptions extends IPersonalDataUser {
  balance: number;
  isAdmin: boolean;
  avatar: string;
  userId: string;
  reportId: null | string;
}

export interface IUsersInAdminPanel extends IPersonalDataUser {
  balance: number;
  isAdmin: boolean;
}

export interface IGenericResponse {
  message: string;
}

export interface AuthResponse {
  expiration: string;
  token: string;
}

export interface IRegistrationInputs {
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  isAgreeProcessing: boolean;
}

export interface ISigninInputs {
  userName: string;
  password: string;
  rememberMe: boolean;
}

export interface IPassRecoveryInput {
  email: string;
}

export interface IPassReset {
  userToken: string;
  userEmail: string;
  passNew: string;
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
  reportId: string;
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

export interface IWeek {
  weekEnd: string;
  weekNumber: number;
  weekStart: string;
}

export interface IWeekWithParam extends IWeek {
  weekId: string;
}

export interface IFiltersData {
  articles: IArticle[];
  weeksList: IWeekWithParam[];
}

export interface IAnalyticDataSum {
  comissionWbPercents: number;
  comissionWbRub: number;
  costPriceCount: number;
  costPriceFraction: number;
  costPriceRub: number;
  fractionOnBankAccount: number;
  fractionOrders: number;
  fractionProfit: number;
  fractionSales: number;
  logisticsFraction: number;
  logisticsGeneral: number;
  logisticsOrdersCount: number;
  logisticsOrdersRub: number;
  logisticsRefundsCount: number;
  logisticsRefundsRub: number;
  margin: number;
  onBankAccountRub: number;
  ordersCount: number;
  ordersSum: number;
  profitFraction: number;
  profitRub: number;
  profitability: number;
  redemtionPercent: number;
  refundsCount: number;
  refundsSumTransferToSeller: number;
  refundsSumWithDiscount: number;
  retailPriceIncludingAgreedDiscount: number;
  salesCount: number;
  salesSumTransferToSeller: number;
  salesSumWithDiscount: number;
  transferToSallerCount: number;
  transferToSallerForTheSoldGoods: number;
  transferToSallerRub: number;
  wbSoldProduct: number;
}

export interface IAnalyticArticle extends IAnalyticDataSum {
  article: string;
}

export interface IAnalyticWeek extends IAnalyticDataSum {
  weekId: string;
  weekNumber: string;
}

export interface IAnalyticVisualData {
  analyticsDatas: IAnalyticArticle[];
  analyticsDatasSum: IAnalyticDataSum;
  weekAndSums: IAnalyticWeek[];
}

export interface TopWbQueriesType {
  title: string;
  count: string;
}

export interface OneWbQueriesType extends TopWbQueriesType {
  date: string;
}

export interface IWbQueries {
  all: TopWbQueriesType[];
  one: OneWbQueriesType[];
}

export interface IArticleQueries {
  date: string;
  parameters: IParam[];
  article: string;
}

export interface ISavedArticles {
  article: string;
  id: string;
  query: string;
}

export interface IWbData {
  itemcodeseller: string;
  itemcodewb: string;
  parameters: number[];
  product: string;
}

export interface IWbReportsResponse {
  data: IWbData[];
  date: string;
  total: number[];
}
