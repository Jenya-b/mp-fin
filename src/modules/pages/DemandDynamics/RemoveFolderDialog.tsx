import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { Colors } from 'constants/colors';
import { useEffect } from 'react';
import { useRemoveFolderMutation } from 'services';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  folderId: number;
  folderName: string;
  refetch: () => void;
}

export const RemoveFolderDialog = ({
  handleClose,
  open,
  folderId,
  folderName,
  refetch,
}: ModalProps) => {
  const [fetchRemoveFolder, { isSuccess }] = useRemoveFolderMutation();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  const handleSubmit = () => {
    fetchRemoveFolder(folderId);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ background: Colors.MainBlue }} id="alert-dialog-title">
        Удаление вкладки
      </DialogTitle>
      <DialogContent sx={{ background: Colors.MainBlue }}>
        <DialogContentText id="alert-dialog-description">
          Вы действительно хотите удалить вкладку "{folderName}"
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ background: Colors.MainBlue }}>
        <Button onClick={handleClose}>Отменить</Button>
        <Button onClick={handleSubmit} autoFocus>
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
