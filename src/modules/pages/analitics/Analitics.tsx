import { Main, MainTitle } from '../../../styles/components';
import { smartanalyticsUrl } from '../../../utils/api/baseUrl';
import { IframeWrapper, Iframe } from './Analitics.styled';

export const AnaliticsPage = () => (
  <Main>
    <MainTitle>Аналитика</MainTitle>
    <IframeWrapper>
      <Iframe src={smartanalyticsUrl}></Iframe>
    </IframeWrapper>
  </Main>
);
