export interface IStatistics {
  msk: number;
  spb: number;
  ekb: number;
  kzn: number;
  nsk: number;
  hbr: number;
  kdr: number;
  klgd: number;
}

export interface IParam {
  title: string;
  statistics: IStatistics[];
}

export interface IDataGrid {
  date: string;
  parameters: IParam[];
  article: string;
}
