import { SidebarProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';

export const Sidebar = (props: SidebarProps): JSX.Element => {
	return (
		<aside {...props}>
			Sidebar
		</aside>
	);
};
