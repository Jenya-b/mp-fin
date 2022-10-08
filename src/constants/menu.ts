import { menuIcon } from './../constants/images';
import { path } from './../constants/path';

export const menuList = [
  {
    srcImg: menuIcon.analiticIcon,
    title: 'Аналитика',
    href: path.analitics,
  },
  {
    srcImg: menuIcon.analiticCardIcon,
    title: 'Аналитика карточки',
    href: path.analiticCard,
  },
  {
    srcImg: menuIcon.reportIcon,
    title: 'Загрузить отчет',
    href: path.reports,
  },
  {
    srcImg: menuIcon.primeCostIcon,
    title: 'Себестоимость',
    href: path.primeCost,
  },
];
