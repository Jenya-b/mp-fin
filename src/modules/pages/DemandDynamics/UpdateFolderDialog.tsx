import { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { InputSearch, Label } from '../SearchQuery/SearchQuery.styled';
import { Colors } from 'constants/colors';
import { useUpdateFolderMutation } from 'services';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  folderId: number;
  folderName: string;
  refetch: () => void;
}

export const UpdateFolderDialog = ({
  handleClose,
  open,
  folderId,
  folderName,
  refetch,
}: ModalProps) => {
  const [value, setValue] = useState('');
  const [fetchUpdateFolder, { isSuccess }] = useUpdateFolderMutation();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    fetchUpdateFolder({ id: folderId, name: value });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ background: Colors.MainBlue }} id="alert-dialog-title">
        Новое нименование вкладки "{folderName}"
      </DialogTitle>
      <DialogContent sx={{ background: Colors.MainBlue }}>
        <Label>
          <InputSearch
            placeholder="Введите название"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Label>
      </DialogContent>
      <DialogActions sx={{ background: Colors.MainBlue }}>
        <Button onClick={handleClose}>Отменить</Button>
        <Button onClick={handleSubmit} autoFocus>
          Обновить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
