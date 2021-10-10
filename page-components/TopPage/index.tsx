import { AdvantagesList, HhData, Htag, Ptag, Tag } from '../../components';
import { TopPageComponentProps } from './props.component';
import styles from './index.module.scss';
import { IAdvantage, IProductModel, TopLevelCategory } from '../../@types';

export const TopPageComponent = ({products, page, firstCategory}: TopPageComponentProps): JSX.Element => {
	const tagJSX = products && <Tag color="grey" size="m">{products.length}</Tag>;
	const hhDataJSX = firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />;
	const advantages = page.advantages?.length && createAdvantegSection(page.advantages);
	const tags = page.tags.length && createTagsSection(page.tags);

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
			{advantages}
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}></div>}
			{tags}
		</div>
	);
};

function createAdvantegSection(advantagesList:  IAdvantage[]): JSX.Element {
	return (
		<div className={styles.advantages}>
			<Htag tag='h2'>Преимущества</Htag>
			<AdvantagesList list={advantagesList} />
		</div>
	);
}

function createTagsSection(tags: string[]) {
	return (
		<div className={styles.tags}>
			<Htag tag='h2'>Получаемые навыки</Htag>
			<div className={styles.tagsList}>
				{tags.map(i=> <Tag key={i} size="s" color="primary">{i}</Tag>)}
			</div>
		</div>
	);
}

function productList(products: IProductModel[]) {
	return products.map(p => (
		<div key={p._id}>{p.title}</div>
	));
}
