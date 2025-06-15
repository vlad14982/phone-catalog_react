import { PerPage } from '../types/perPage';
import { RoutesLink } from '../types/routes';
import { SortTypes } from '../types/sort';

export const NAV_ITEMS = [
  {
    name: 'home',
    path: RoutesLink.HomePage,
  },
  {
    name: 'phones',
    path: RoutesLink.PhonesPage,
  },
  {
    name: 'tablets',
    path: RoutesLink.TabletsPage,
  },
  {
    name: 'accessories',
    path: RoutesLink.AccessoriesPage,
  },
];

export const CATEGORIES = [
  {
    name: 'Mobile phones',
    key: 'phones',
    img: 'img/categories/category-phones.webp',
    backgroundColor: '#6D6474',
  },
  {
    name: 'Tablets',
    key: 'tablets',
    img: 'img/categories/category-tablets.webp',
    backgroundColor: '#8D8D92',
  },
  {
    name: 'Accessories',
    key: 'accessories',
    img: 'img/categories/category-accessories.webp',
    backgroundColor: '#973D5F',
  },
];

export const SORT_OPTIONS = [
  {
    label: 'Newest',
    value: SortTypes.Newest,
  },
  {
    label: 'Alphabetically',
    value: SortTypes.Alphabetically,
  },
  {
    label: 'Cheapest',
    value: SortTypes.Cheapest,
  },
];

export const ITEMS_PER_PAGE: { label: string; value: PerPage }[] = [
  { label: '4', value: 4 },
  { label: '8', value: 8 },
  { label: '16', value: 16 },
  { label: 'All', value: 'All' },
];

export const DEFAULT_SORT = SortTypes.Newest;
export const DEFAULT_PER_PAGE: PerPage = 'All';

export const BANNERS = [
  {
    imageMobile: 'img/banners/banner1-mobile.jpg',
    imageTablet: 'img/banners/banner1-tablet.jpg',
    imageDesktop: 'img/banners/banner1-desktop.jpg',
    altText: 'Phone 1',
    way: `${RoutesLink.PhonesPage}`,
  },
  {
    imageMobile: 'img/banners/banner2-mobile.jpg',
    imageTablet: 'img/banners/banner2-tablet.jpg',
    imageDesktop: 'img/banners/banner2-desktop.jpg',
    altText: 'Phone 2',
    way: `${RoutesLink.AccessoriesPage}`,
  },
  {
    imageMobile: 'img/banners/banner3-mobile.jpg',
    imageTablet: 'img/banners/banner3-tablet.jpg',
    imageDesktop: 'img/banners/banner3-desktop.jpg',
    altText: 'Phone 3',
    way: `${RoutesLink.TabletsPage}`,
  },
];
