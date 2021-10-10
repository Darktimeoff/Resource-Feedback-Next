import CoursesIcon from './icons/icon_courses.svg';
import ServicesIcon from './icons/icon_services.svg';
import BooksIcon from './icons/icon_books.svg';
import ProductIcon from './icons/icon_products.svg';
import { IFirstLevelMenuItem, TopLevelCategory } from '../@types';

export const firstLevelMenu: IFirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Товары', icon: <ProductIcon />, id: TopLevelCategory.Products },
];

export const priceRu = (price: number):string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');