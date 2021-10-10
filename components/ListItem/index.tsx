import styles from './index.module.scss';
import { ListItemProps } from './props';
import cn from 'classnames';
import Done from './icons/done.svg';
import { Htag } from '../Htag';
import { Ptag } from '../Ptag';

export const ListItem = ({ title, description, className, ...props }: ListItemProps): JSX.Element => {
	return (
		<li {...props} className={cn(className, styles.listItem)}>
			<div className={styles.listItemIcon}>
				<Done />
			</div>
			<div className={styles.listItemText}>
				<Htag tag="h3">{title}</Htag>
				<Ptag size="m">{description}</Ptag>
			</div>
		</li>
	);
};