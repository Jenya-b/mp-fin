import { useEffect, useState, useCallback } from 'react';
import md5 from 'md5';
import { Main, MainTitle } from 'styles/components';
import { smartanalyticsIframe } from 'services/baseUrl';
import { IframeWrapper, Iframe } from 'modules/pages/analitics/Analitics.styled';
import {
  useLazyGetSmartDataSSOQuery,
  useAddReportSmartDataMutation,
  useChangeReportIdMutation,
} from 'services';
import { useAppSelector } from 'hooks/redux';
import { Loader } from 'modules/components/loader/Loader';

const projectId = process.env.REACT_APP_SMARTANALITIC_PROJECT_ID ?? '';
const smartKey = process.env.REACT_APP_SMARTANALITIC_KEY ?? '';

export const AnaliticsPage = () => {
  const [iframeParamUrl, setIftameParamUrl] = useState('');
  const [reportNum, setReportNum] = useState<string>();
  const [hashMd5, setHashMd5] = useState('');
  const { user } = useAppSelector((state) => state.persistedUserReducer);
  const [fetchSSO, { isSuccess: isSuccessFetchSSO, isLoading: isLoadingFetchSSO }] =
    useLazyGetSmartDataSSOQuery();
  const [
    addReportSmart,
    { isSuccess: isSuccessAddReportSSO, isLoading: isLoadingAddReportSSO, data: fetchReport },
  ] = useAddReportSmartDataMutation();
  const [changeReportId, { isLoading: isLoadingChangeReportId }] = useChangeReportIdMutation();
  const location = window.location.href;

  useEffect(() => {
    if (localStorage.getItem('hashMd5')) return;
    if (!user) return;

    const timestamp = Date.now();
    const hash = md5(user.email + '+' + smartKey + '+' + timestamp);
    setHashMd5(hash);
    setIftameParamUrl(
      `${smartanalyticsIframe}/new-auth/#/ru/sso/token/?email=${user?.email}&hash=${hash}&project_id=${projectId}&timestamp=${timestamp}&callback_url=${location}`
    );
    fetchSSO({ email: user.email, hash, timestamp });
  }, [fetchSSO, location, user]);

  useEffect(() => {
    if (isSuccessFetchSSO) {
      localStorage.setItem('hashMd5', hashMd5);
      window.location.href = iframeParamUrl;
    }
  }, [isSuccessFetchSSO]);

  const addReportSmartCallback = useCallback(() => {
    if (!localStorage.getItem('hashMd5')) return;
    if (!user || user.reportId) return;

    addReportSmart(user.userId);
  }, []);

  useEffect(() => {
    addReportSmartCallback();
  }, [addReportSmartCallback]);

  useEffect(() => {
    if (isSuccessAddReportSSO) {
      setReportNum(String(fetchReport));
    }
  }, [isSuccessAddReportSSO]);

  useEffect(() => {
    if (!reportNum) return;
    changeReportId(reportNum);
  }, [reportNum]);

  return (
    <Main>
      {(isLoadingFetchSSO || isLoadingAddReportSSO || isLoadingChangeReportId) && <Loader />}
      <MainTitle>Аналитика</MainTitle>
      <IframeWrapper>
        <Iframe
          src={`${smartanalyticsIframe}/ru/#!/index/2065/reports/2/${user?.reportId ?? ''}`}
        ></Iframe>
      </IframeWrapper>
    </Main>
  );
};

export default AnaliticsPage;
