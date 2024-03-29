import { SyntheticEvent } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useAppDispatch } from 'store/store';
import { INotify } from 'interfaces/modalWindows';
import { closeNotify } from 'store/reducers/notifySlice';

interface NotificationProps {
  isOpenNotify: boolean;
  notifyMessage: INotify;
}

export const Notification = ({ notifyMessage, isOpenNotify }: NotificationProps) => {
  const dispatch = useAppDispatch();
  const { message, type } = notifyMessage;

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(closeNotify());
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
