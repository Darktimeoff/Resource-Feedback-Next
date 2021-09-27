import { SidebarProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';
import { Menu } from '../Menu';

export const Sidebar = (props: SidebarProps): JSX.Element => {
	return (
		<aside {...props}>
			<Menu />
			Sidebar
		</aside>
	);
};
