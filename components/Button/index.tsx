import {ButtonProps} from './props';
import styles from './index.module.scss';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({appearance = 'primary', arrow, children, className, ...props}: ButtonProps): JSX.Element => {
	const buttonCls = cn(styles.button, className, {[styles.primary]: appearance === 'primary', [styles.ghost]: appearance === 'ghost'});
	const arrowCls = cn(styles.arrow, {
		[styles.right]: arrow === 'right',
		[styles.down]: arrow === 'down'
	});

	return (
		<button 
			{...props}
			className={buttonCls}
		>
			{children}
			{arrow && <span className={arrowCls}>
				<ArrowIcon fill="#3B434E" />
			</span>}
		</button>
	);
};