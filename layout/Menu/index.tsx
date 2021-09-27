import Link from 'next/link';
import { useContext } from 'react';
import { MenuContext } from '../../сontext/menu.context';
import styles from './index.module.scss';
import cn from 'classnames';
import { IFirstLevelMenuItem, IMenuContext, IMenuItem, IPageItem, SetMenu, TopLevelCategory } from '../../@types';
import CoursesIcon from './icons/icon_courses.svg';
import ServicesIcon from './icons/icon_services.svg';
import BooksIcon from './icons/icon_books.svg';
import ProductIcon from './icons/icon_products.svg';

const firstLevelMenu: IFirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Товары', icon: <ProductIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext(MenuContext);

	return (
		<div className={styles.menu}>
			{createFirstLevelMenu(menu, firstCategory, setMenu)}
		</div>
	);
};



function createFirstLevelMenu(secondMenuData: IMenuItem[], categoryActive: TopLevelCategory, setMenu?: SetMenu): JSX.Element {
	console.log('first level render', secondMenuData);
	return (
		<>
			{firstLevelMenu.map(menu => {
				const isActive = menu.id === categoryActive;

				const menuItemCls = cn(styles.firstLevelItem, {
					[styles.firstLevelItemActive]: isActive
				});

				const secondLevelMenuJSX = isActive && createSecondLevelMenu(secondMenuData, `/${menu.route}`, setMenu);

				return (
					<div key={menu.route}>
						<Link href={`/${menu.route}`}>
							<a>
								<div className={menuItemCls}>
									{menu.icon}
									<span>{menu.name}</span>
								</div>
							</a>
						</Link>
						{secondLevelMenuJSX}
					</div>
				);
			})}
		</>
	);
}

function createSecondLevelMenu(menuData: IMenuItem[], route: string, setMenu?: SetMenu): JSX.Element {
	const openThirdMenu = (m: IMenuItem) => undefined;

	return (
		<div className={styles.secondLevelWrapper}>
			{menuData.map(m => {
				const secondLevelBlockCls = cn(styles.secondLevelBlock, { [styles.secondLevelBlockOpened]: m.isOpened });
				const thirdLevelBlockJSX = m.isOpened && createThirdLevelMenu(m.pages, route);

				return (
					<div key={m._id.secondCategory} onClick={() => openThirdMenu(m)}>
						<div className={styles.secondLevelItem}>{m._id.secondCategory}</div>
						<div className={secondLevelBlockCls}>
							{thirdLevelBlockJSX}
						</div>
					</div>
				);
			})}
		</div>
	);
}

function createThirdLevelMenu(pages: IPageItem[], route: string): JSX.Element {
	const itemCls = cn(styles.thirdLevelItem, { [styles.thirdLevelMenuActive]: false });
	return (
		<>
			{pages.map(p => {
				const link = `${route}/${p.alias}/`;
				return (
					<Link href={link} key={link}><a className={itemCls}>{p.category}</a></Link>
				);
			})}
		</>
	);
}