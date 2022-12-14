import { SyntheticEvent, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IAnaliticVisualOwnData } from 'services/types';
import { VerticalBarChart } from 'modules/components/Charts/VerticalBar/VerticalBar';
import { LineChart } from 'modules/components/Charts/Line/Line';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface BasicTabsProps {
  ownData: IAnaliticVisualOwnData;
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

export const OwnDataTabs = ({ ownData }: BasicTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
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
  );
};
