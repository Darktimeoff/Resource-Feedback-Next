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

export const declOfNum = (number: number, title: [string, string, string]): string => {
	const cases = [2, 0, 1, 1, 1, 2];

	return title[number % 100 > 4 && number % 100 < 20 ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}