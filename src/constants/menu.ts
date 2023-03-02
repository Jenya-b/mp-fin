import { menuIcon } from 'constants/images';
import { routerPath } from 'constants/routerPath';

export const menuSidebar = [
  {
    srcImg: menuIcon.analiticIcon,
    title: 'Аналитика',
    href: routerPath.home,
  },
  {
    srcImg: menuIcon.searchQueryIcon,
    title: 'Запросы',
    href: routerPath.searchQuery,
  },
  {
    srcImg: menuIcon.demandDynamics,
    title: 'Динамика запросов',
    href: routerPath.dynamics,
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

export const adminRoute = {
  srcImg: menuIcon.adminPanel,
  title: 'Администрирование',
  href: routerPath.weeks,
};

export const menuAdminPanel = [
  {
    title: 'Недели',
    href: routerPath.weeks,
  },
  {
    title: 'Пользователи',
    href: routerPath.users,
  },
  {
    title: 'Поисковые запросы',
    href: routerPath.searchTerms,
  },
];
