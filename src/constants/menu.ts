import { menuIcon } from 'constants/images';
import { routerPath } from 'constants/routerPath';

export const menuList = [
  {
    srcImg: menuIcon.analiticIcon,
    title: 'Аналитика',
    href: routerPath.analitics,
  },
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
