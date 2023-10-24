import { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Colors } from 'constants/colors';
import { useInserDataToFolderMutation } from 'services';
import { useAppSelector } from 'store/store';
import { analiticsSelector } from 'store/selectors';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  folders:
    | {
        id: number;
        name: string;
      }[]
    | undefined;
  refetch: () => void;
}

export const InserDataToFolderDialog = ({
  handleClose,
  open,
  folders = [],
  refetch,
}: ModalProps) => {
  const [selectedFolder, setSelectedFolder] = useState<string>();
  const [fetchAddData, { isSuccess }] = useInserDataToFolderMutation();
  const { selectedQDFData } = useAppSelector(analiticsSelector);

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  const handleSubmit = () => {
    if (!selectedFolder) {
      return;
    }

    fetchAddData({ queries: selectedQDFData, typeId: Number(selectedFolder) });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedFolder(event.target.value as string);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ background: Colors.MainBlue }} id="alert-dialog-title">
        Добавление данных
      </DialogTitle>
      <DialogContent sx={{ background: Colors.MainBlue }}>
        <FormControl fullWidth style={{ marginTop: '20px', minWidth: '200px' }}>
          <InputLabel id="demo-simple-select-label">Вкладка</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedFolder}
            label="Вкладка"
            onChange={handleChange}
          >
            {folders
              .filter((item) => item.id !== 0)
              .map(({ id, name }) => (
                <MenuItem key={id} value={id}>
                  {name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
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
