import {ButtonProps} from './props';
import styles from './index.module.scss';
import cn from 'classnames';

export const Button = ({appearance = 'primary', children, className, ...props}: ButtonProps): JSX.Element => {
	const appearanceCls = cn(styles.button, className, {[styles.primary]: appearance === 'primary', [styles.ghost]: appearance === 'ghost'});
	
	return (
		<button 
			{...props}
			className={appearanceCls}
		>
			{children}
		</button>
	)
}