import { HhData, Htag, Tag } from '../../components';
import { TopPageComponentProps } from './props.component';
import styles from './index.module.scss';
import { IProductModel } from '../../@types';

export const TopPageComponent = ({products, page}: TopPageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color="grey" size="m">{products.length}</Tag>}
				<span>Сортировка</span>
			</div>
			<div>
				{products && productList(products)}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color="red" size="m">hh.ru</Tag>
			</div>
			<HhData {...page.hh} />
		</div>
	);
};

function productList(products: IProductModel[]) {
	return products.map(p => (
		<div key={p._id}>{p.title}</div>
	));
}
