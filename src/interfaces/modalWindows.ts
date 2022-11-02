export interface INotify {
  message: string;
  type: 'error' | 'warning' | 'info' | 'success' | undefined;
}
