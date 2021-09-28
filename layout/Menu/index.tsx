import Link from 'next/link';
import { useContext } from 'react';
import { MenuContext } from '../../сontext/menu.context';
import styles from './index.module.scss';
import cn from 'classnames';
import { IMenuItem, IPageItem, TopLevelCategory } from '../../@types';
import { useRouter } from 'next/router';
import { firstLevelMenu} from '../../helpers';


type OpenSecondLevel = (secondCategory: TopLevelCategory) => void;

export const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext(MenuContext);
	const router = useRouter();

	function openSecondLevel(secondCategory: TopLevelCategory) {
		setMenu && setMenu(menu.map(m => {
			m.isOpened = m._id.secondCategory === secondCategory && !m.isOpened;
			return m;
		}));
	}

	return (
		<div className={styles.menu}>
			{createFirstLevelMenu(menu, firstCategory, router.asPath, openSecondLevel)}
		</div>
	);
};


function createFirstLevelMenu(secondMenuData: IMenuItem[], categoryActive: TopLevelCategory, currentPath: string, openSecondLevel?: OpenSecondLevel): JSX.Element {
	return (
		<>
			{firstLevelMenu.map(menu => {
				const link = `/${menu.route}`;
				const isActive = menu.id === categoryActive || link === currentPath;

				const menuItemCls = cn(styles.firstLevelItem, {
					[styles.firstLevelItemActive]: isActive
				});

				const secondLevelMenuJSX = isActive && createSecondLevelMenu(secondMenuData, link, currentPath, openSecondLevel);

				return (
					<div key={menu.route}>
						<Link href={link}>
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

function createSecondLevelMenu(menuData: IMenuItem[], route: string, currentPath: string, openSecondLevel?: OpenSecondLevel): JSX.Element {
	return (
		<div className={styles.secondLevelWrapper}>
			{menuData.map(m => {
				if (m.pages.map(p => p.alias).includes(currentPath.split('/')[2])) {
					m.isOpened = true;
				}

				const secondLevelBlockCls = cn(styles.secondLevelBlock, {[styles.secondLevelBlockOpened]: m.isOpened});
				const thirdLevelBlockJSX = m.isOpened && createThirdLevelMenu(m.pages, route, currentPath);

				return (
					<div key={m._id.secondCategory} onClick={() => openSecondLevel && openSecondLevel(m._id.secondCategory)}>
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

function createThirdLevelMenu(pages: IPageItem[], route: string, currentPath: string): JSX.Element {
	return (
		<>
			{pages.map(p => {
				const link = `${route}/${p.alias}`;
				const itemCls = cn(styles.thirdLevelItem, { [styles.thirdLevelMenuActive]: link === currentPath});
	
				return (
					<Link href={link} key={link}><a className={itemCls}>{p.category}</a></Link>
				);
			})}
		</>
	);
}