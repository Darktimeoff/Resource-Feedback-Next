import { TextareaProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
	return (
		<textarea {...props} className={cn(className, styles.textarea)} />
	)
};
