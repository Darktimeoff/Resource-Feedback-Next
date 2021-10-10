import { AdvantagesList, HhData, Htag, Ptag, Sort, Tag } from '../../components';
import { TopPageComponentProps } from './props.component';
import styles from './index.module.scss';
import { IAdvantage, IProductModel, TopLevelCategory } from '../../@types';
import { SortEnum } from '../../components/Sort/props';
import { useReducer } from 'react';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({products, page, firstCategory}: TopPageComponentProps): JSX.Element => {
	const tagJSX = products && <Tag color="grey" size="m">{products.length}</Tag>;
	const hhDataJSX = firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />;
	const advantages = page.advantages?.length && createAdvantegSection(page.advantages);
	const tags = page.tags.length && createTagsSection(page.tags);
	const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

	const setSort = (sort: SortEnum):void => dispatchSort({type: sort});

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{tagJSX}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{products && productList(sortedProducts)}
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
