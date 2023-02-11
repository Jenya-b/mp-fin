import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface BasicDialogProps {
  isActiveDialog: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  desc: string;
}

export const BasicDialog = ({
  isActiveDialog,
  handleClose,
  handleConfirm,
  desc,
}: BasicDialogProps) => {
  return (
    <Dialog open={isActiveDialog} keepMounted onClose={handleClose}>
      <DialogTitle>Внимание!</DialogTitle>
      <DialogContent>
        <DialogContentText>{desc}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm}>Продолжить</Button>
        <Button onClick={handleClose}>Отменить</Button>
      </DialogActions>
    </Dialog>
  );
};
