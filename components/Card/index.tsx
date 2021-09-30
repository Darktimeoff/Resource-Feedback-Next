import { CardProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';

export const Card = ({ color = 'white', children, className, ...props }: CardProps): JSX.Element => {
	const rootCls = cn(className, styles.card, styles[color]);

	return <div {...props} className={cn(rootCls)}>{children}</div>;
};
