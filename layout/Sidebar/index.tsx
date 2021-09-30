import { SidebarProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';
import { Menu } from '../Menu';
import Logo from '../logo.svg';

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
	const rootCls = cn(className, styles.sidebar);
	return (
		<aside {...props} className={rootCls}>
			<Logo className={styles.logo}/>
			<div>Search</div>
			<Menu />
		</aside>
	);
};
