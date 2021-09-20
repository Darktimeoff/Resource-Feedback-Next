import { PtagProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';

export const Ptag = ({ children, size = 'm', className, ...props }: PtagProps): JSX.Element => {
	return <p {...props} className={cn(styles.p, className, styles[size])}>{children}</p>;
};
