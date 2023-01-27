import { INotify } from 'interfaces/modalWindows';

interface INotifyMessage {
  [index: string]: INotify;
}

export const alertMessage: INotifyMessage = {
  successUploadReport: { message: 'Отчеты успешно добавлены', type: 'success' },
  successDeleteReport: { message: 'Отчеты успешно удалены', type: 'success' },
  errorDeleteReport: { message: 'Произошла ошибка, попробуйте снова', type: 'error' },
  warningUploadReport: {
    message: 'Возможно произошла ошибка. Проверьте загруженные данные',
    type: 'warning',
  },
  errorUploadReportValidType: { message: 'Выбран неверный тип файла', type: 'error' },
  errorUploadReportValidCount: { message: 'Выбрано больше 2 файлов', type: 'error' },
  successSetArticle: { message: 'Данные успешно изменены', type: 'success' },
  errorSetArticle: { message: 'Произошла ошибка, попробуйте снова', type: 'error' },
  successResetPass: { message: 'Пароль изменен', type: 'success' },
  errorResetPass: { message: 'Произошла ошибка', type: 'error' },
  errorSignin: { message: 'Неверный логин или пароль', type: 'error' },
  infoSearchQuery: { message: 'Данные не найдены', type: 'info' },
};
