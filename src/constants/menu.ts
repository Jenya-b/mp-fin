import { menuIcon } from './../constants/images';
import { routerPath } from './routerPath';

export const menuList = [
  {
    srcImg: menuIcon.analiticIcon,
    title: 'Аналитика',
    href: routerPath.analitics,
  },
  //! страница в разработке
  // {
  //   srcImg: menuIcon.analiticCardIcon,
  //   title: 'Аналитика карточки',
  //   href: routerPath.analiticCard,
  // },
  {
    srcImg: menuIcon.reportIcon,
    title: 'Загрузить отчет',
    href: routerPath.reports,
  },
  {
    srcImg: menuIcon.primeCostIcon,
    title: 'Себестоимость',
    href: routerPath.primeCost,
  },
];
