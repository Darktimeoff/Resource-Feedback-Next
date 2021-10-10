import styles from './index.module.scss';
import { AdvantagesProps } from './props';
import { ListItem } from '..';

export const AdvantagesList = ({ list }: AdvantagesProps): JSX.Element => {
	return (
		<ul className={styles.advantagesList}>
			{list.map(i => (<ListItem key={i._id} title={i.title} description={i.description} />))}
		</ul>
	);
};