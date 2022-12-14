import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useFilter } from 'hooks/useFilter';
import { useGetOwnDataQuery, useGetOwnAnaliticMutation } from 'services';
import { Filters, Wrapper, Title, ButtonFilter, Diagram, Table } from './AnaliticsOwn.styled';
import { SmartTable } from 'modules/components/DataGrid/DataGrid';
import { Loader } from 'modules/components/Loader/Loader';
import { VerticalBarChart } from 'modules/components/Charts/VerticalBar/VerticalBar';
import { LineChart } from 'modules/components/Charts/Line/Line';
import { FilterWeeks } from 'modules/components/Filters/FilterWeeks';
import { FilterArticles } from 'modules/components/Filters/FilterArticles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const AnaliticsOwn = () => {
  const { data: getOwnData, isSuccess, isLoading: isLoadingGetOwnData } = useGetOwnDataQuery(null);
  const [fetchOwnData, { isLoading: isLoadingFetchOwn, data: ownData }] =
    useGetOwnAnaliticMutation();
  const [allWeekId, setAllWeekId] = useState<string[]>([]);
  const [allArticleName, setAllArticleName] = useState<string[]>([]);
  const [weekIdFilter, setWeekIdFilter] = useFilter();
  const [articleNameFilter, setArticleNameFilter] = useFilter();

  useEffect(() => {
    if (isSuccess && getOwnData) {
      const weekId = getOwnData.weeksList.map(({ weekId }) => weekId);
      const articleName = getOwnData.articles.map(({ articleName }) => articleName);
      setAllWeekId(weekId);
      setAllArticleName(articleName);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (allWeekId.length && allArticleName.length) {
      updateData();
    }
  }, [allWeekId, allArticleName]);

  const updateData = () => {
    fetchOwnData({
      weekIds: !weekIdFilter.length ? allWeekId : weekIdFilter,
      articleNames: !articleNameFilter.length ? allArticleName : articleNameFilter,
    });
  };

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {(isLoadingGetOwnData || isLoadingFetchOwn) && <Loader />}
      <Wrapper>
        <Filters>
          <Title>Фильтр</Title>
          {getOwnData && (
            <>
              <FilterWeeks weeks={getOwnData.weeksList} setWeekIdFilter={setWeekIdFilter} />
              <FilterArticles
                articles={getOwnData.articles}
                setArticleNameFilter={setArticleNameFilter}
              />
            </>
          )}
          <ButtonFilter onClick={updateData}>Обновить</ButtonFilter>
        </Filters>
        <Diagram>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Продажи/возвраты по артикулам" {...a11yProps(0)} />
                <Tab label="Продажи/возвраты по неделям" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {ownData && <VerticalBarChart mainData={ownData.analyticsDatas} />}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {ownData && <LineChart mainData={ownData.weekAndSums} />}
            </TabPanel>
          </Box>
        </Diagram>
        <Table>
          <SmartTable data={ownData?.analyticsDatas ?? []} />
        </Table>
      </Wrapper>
    </>
  );
};
