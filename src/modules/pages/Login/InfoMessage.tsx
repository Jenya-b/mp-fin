import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonMailStyles, flexCenterAll } from 'styles/fragments';
import { fontStylesRegularBold, fontStylesCaptionBig } from 'styles/typography';
import { TitleForm } from 'modules/pages/Login/Login.styled';

interface InfoMessageProps {
  title: string;
  desc: string;
  routPath: string;
}

export const InfoMessage = ({ title, desc, routPath }: InfoMessageProps) => (
  <>
    <TitleForm>{title}</TitleForm>
    <InfoText>{desc}</InfoText>
    <ButtonWrapper>
      <Button>
        <Link to={routPath}>Перейти</Link>
      </Button>
    </ButtonWrapper>
  </>
);

const InfoText = styled.div`
  margin-top: 20px;
  ${fontStylesCaptionBig}
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  ${ButtonMailStyles}
  ${fontStylesRegularBold}
  ${flexCenterAll}
	
  width: 250px;
  height: ${({ theme }) => theme.sizes.primaryBtn.height}px;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
