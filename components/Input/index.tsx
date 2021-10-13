import { InputProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
	return (
		<input {...props} className={cn(className, styles.input)} />
	)
};
