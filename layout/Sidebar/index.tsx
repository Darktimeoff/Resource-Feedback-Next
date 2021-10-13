import { SidebarProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';
import { Menu } from '../Menu';
import Logo from '../logo.svg';
import { Search } from '../../components';
import React from 'react';
import Link from 'next/link';

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
	const rootCls = cn(className, styles.sidebar);
	return (
		<aside {...props} className={rootCls}>
			<Link href="/">
				<a className={styles.logo}>
					<Logo />
				</a>
			</Link>
			<Search />
			<Menu />
		</aside>
	);
};
