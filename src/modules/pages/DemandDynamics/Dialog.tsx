import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { InputSearch, Label } from '../SearchQuery/SearchQuery.styled';
import { Colors } from 'constants/colors';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

export const Modal = ({ handleClose, open }: ModalProps) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {};

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ background: Colors.MainBlue }} id="alert-dialog-title">
        Новый блок
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
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
