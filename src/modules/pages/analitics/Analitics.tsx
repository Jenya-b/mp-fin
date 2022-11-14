import { Main, MainTitle } from 'styles/components';
import { smartanalyticsUrl } from 'services/baseUrl';
import { IframeWrapper, Iframe } from 'modules/pages/analitics/Analitics.styled';

export const AnaliticsPage = () => (
  <Main>
    <MainTitle>Аналитика</MainTitle>
    <IframeWrapper>
      <Iframe src={smartanalyticsUrl}></Iframe>
    </IframeWrapper>
  </Main>
);

export default AnaliticsPage;
