import styled from 'styled-components';
import { flexCenterAll } from '../../../styles/fragments';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr ${({ theme }) => theme.sizes.logoForm.width}px;
`;

export const FormWrapper = styled.div`
  ${flexCenterAll}
`;
export const LogoWrapper = styled.div`
  background: url('source/images/background.png') no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Logo = styled.div`
  width: 384px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background: url('source/images/logoLogin.png') no-repeat;
  background-position-y: center;
`;
