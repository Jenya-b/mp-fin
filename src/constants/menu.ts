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
  {
    srcImg: menuIcon.salesIcon,
    title: 'Заказы и продажи',
    href: routerPath.orders,
  },
];

export const adminRoute = {
  srcImg: menuIcon.adminPanel,
  title: 'Администрирование',
  href: routerPath.searchTerms,
};

export const menuTurnoverPanel = [
  {
    title: 'Заказы',
    href: routerPath.orders,
  },
  {
    title: 'Продажи',
    href: routerPath.sales,
  },
  {
    title: 'Сравнение',
    href: routerPath.comparison,
  },
];

export const menuAdminPanel = [
  {
    title: 'Поисковые запросы',
    href: routerPath.searchTerms,
  },
];
