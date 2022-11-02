import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { Dispatch, SetStateAction } from 'react';
import { INotify } from '../../../interfaces/modalWindows';

interface NotificationProps {
  isOpenNotify: boolean;
  notifyMessage: INotify;
  setIsOpenNotify: Dispatch<SetStateAction<boolean>>;
}

export const Notification = ({
  notifyMessage,
  isOpenNotify,
  setIsOpenNotify,
}: NotificationProps) => {
  const { message, type } = notifyMessage;

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpenNotify(false);
  };

  return (
    <Snackbar
      open={isOpenNotify}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};
