import {SortEnum, SortProps} from './props';
import SortIcon from './sort.svg';
import styles from './index.module.scss';
import cn from 'classnames';

export const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {
	const sortItemCls = (sortEnum: SortEnum): string => cn({[styles.active]: sort === sortEnum})  


	return (
		<div {...props} className={cn(styles.sort, className)}>
			<span onClick={() => setSort(SortEnum.Rating)} className={sortItemCls(SortEnum.Rating)}>
				<SortIcon className={styles.sortIcon} /> По рейтингу
			</span>
			<span onClick={() => setSort(SortEnum.Price)} className={sortItemCls(SortEnum.Price)}>
				<SortIcon className={styles.sortIcon} /> По&nbsp;Цене
			</span>
		</div>
	);
};