import { Link } from 'react-router-dom';
import { TitleForm } from 'modules/pages/Login/Login.styled';
import { InfoText, Button, ButtonWrapper } from './InfoMessage.styled';

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
