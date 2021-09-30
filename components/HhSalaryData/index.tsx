import { Card } from '../Card';
import styles from './index.module.scss';
import { HhSalaryProps } from './props';
import Star from './icons/star.svg';
import cn from 'classnames';

export const HhSalaryData = ({ starFilled, title, salary, className, ...props }: HhSalaryProps): JSX.Element => {
	return (
		<div {...props} className={cn(className, styles.salaryBlock)}>
			<div className={styles.title}>{title}</div>
			<div className={styles.salaryValue}>{salary}</div>
			<div className={styles.stars}>
				{createStarList(starFilled)}
			</div>
		</div>
	);
};

function createStarList(starFilled: 1 | 2 | 3) {
	return new Array(3).fill(undefined).map((_, i) => i < starFilled ? <Star className={styles.filled} key={i} /> : <Star key={i} />);
}