import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;
