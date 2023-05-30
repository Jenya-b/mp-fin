import styled from 'styled-components';
import { PrimaryButton } from 'styles/components';

interface ButtonProps {
  isActive: boolean;
}

export const ButtonWrapp = styled.div<ButtonProps>`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (${({ theme }) => theme.media.medium}) {
    display: flex;
    justify-content: ${({ isActive }) => (isActive ? 'flex-end' : 'center')};
    align-items: ${({ isActive }) => (isActive ? 'flex-start' : 'center')};
    background-color: ${({ isActive }) => (isActive ? 'none' : 'rgba(0, 0, 0, 0.85)')};
  }
`;

export const ButtonEnterFull = styled(PrimaryButton)<ButtonProps>`
  display: ${({ isActive }) => (isActive ? 'none' : 'block')};
  padding: 7px 15px;
`;

export const ButtonExitFull = styled(PrimaryButton)<ButtonProps>`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  padding: 7px 15px;
  margin: 10px;
`;
