import styled from 'styled-components';
import { MainSubtitle } from 'styles/components';
import { InputAdminPanel } from '../Admin.styled';

export const InputFile = styled(InputAdminPanel)`
  opacity: 0;
  margin-top: 0;
`;

export const InputFileName = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: ${({ theme }) => theme.borders.inputForm.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

export const InputFileBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Subtitle = styled(MainSubtitle)`
  margin-bottom: ${({ theme }) => theme.indents.adminSubtitle.marginBottom}px;
`;
