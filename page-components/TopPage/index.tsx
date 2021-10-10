import { HhData, Htag, Tag } from '../../components';
import { TopPageComponentProps } from './props.component';
import styles from './index.module.scss';
import { IProductModel, TopLevelCategory } from '../../@types';

export const TopPageComponent = ({products, page, firstCategory}: TopPageComponentProps): JSX.Element => {
	const tagJSX = products && <Tag color="grey" size="m">{products.length}</Tag>;
	const hhDataJSX = firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />;

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{tagJSX}
				<span>Сортировка</span>
			</div>
			<div>
				{products && productList(products)}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color="red" size="m">hh.ru</Tag>
			</div>
			{hhDataJSX}
		</div>
	);
};

function productList(products: IProductModel[]) {
	return products.map(p => (
		<div key={p._id}>{p.title}</div>
	));
}
