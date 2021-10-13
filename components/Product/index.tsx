import { ProductProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	return (
		<div {...props} className={cn(styles.product, className)}>
			{product.title}
		</div>
	);
};
