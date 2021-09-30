import { Card } from '../Card';
import styles from './index.module.scss';
import { HhDataProps } from './props';
import React from 'react';
import { HhSalaryData } from '../HhSalaryData';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>Всего Вакансий</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary}>
				<HhSalaryData title="Начальный" salary={juniorSalary} starFilled={1} />
				<HhSalaryData title="Средний" salary={middleSalary} starFilled={2} />
				<HhSalaryData title="Профессионал" salary={seniorSalary} starFilled={3} />
			</Card>
		</div>
	);
};
