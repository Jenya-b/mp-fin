import styled from 'styled-components';
import { TableButton, TableButtonProps } from 'modules/components/Table/TableBtn';

interface InputFileProps extends TableButtonProps {
  handleChange: (
    weekDataId: string,
    stateId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  weekDataId: string;
  stateId: string;
}

export const InputFile = ({ handleChange, title, src, weekDataId, stateId }: InputFileProps) => {
  return (
    <Wrapper>
      <TableButton title={title} src={src} />
      <Input type="file" multiple onChange={(event) => handleChange(weekDataId, stateId, event)} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
