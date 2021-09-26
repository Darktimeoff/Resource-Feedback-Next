import Link from 'next/link';
import { FooterProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';
import {format} from 'date-fns';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
	const rootCls = cn(className, styles.footer);

	return (
		<footer {...props} className={rootCls}>
			<div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<Link href="#" ><a target="_blank">Пользовательское соглашение</a></Link>
			<Link href="#"><a target="_blank">Политика конфиденциальности</a></Link>
		</footer>
	);
};
