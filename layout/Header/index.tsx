import { HeaderProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';

export const Header = (props: HeaderProps): JSX.Element => {
	return (
		<header {...props}>
			Header
		</header>
	)
};
