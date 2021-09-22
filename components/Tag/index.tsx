import { TagProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';

export const Tag = ({ children, size = 'm', color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
	const text = href ? <a href={href}>{children}</a> : <>{children}</>;
	
	return <div {...props} className={cn(styles.tag, className, styles[color], [styles[size]])}>{text}</div>;
};
