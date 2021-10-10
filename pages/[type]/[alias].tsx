import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import React from 'react';
import { withLayout } from '../../hoc';
import { API } from '../../api';
import { TopPageProps, IMenuItem } from '../../@types';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '../../helpers';
import { TopPageComponent } from '../../page-components';

function TopPage({ products, page, firstCategory}: TopPageProps): JSX.Element {
	return <TopPageComponent products={products} firstCategory={firstCategory} page={page} />;
}


export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];
	const promises: Array<Promise<IMenuItem[]>> = firstLevelMenu.map(mType => API.findPage(mType.id));
	
	const menus = await Promise.all(promises);
	
	menus.forEach((m, i) => paths = paths.concat(m.flatMap(mAlias => mAlias.pages.map(p => `/${firstLevelMenu[i].route}/${p.alias}`))));
	
	console.log(paths);

	return {
		paths: paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if(!params) return {notFound: true};

	const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
	if (!firstCategoryItem) return { notFound: true };

	try {
		const menu = await API.findPage(firstCategoryItem.id);

		if(!menu.length) return {notFound: true};

		const page = await API.getPageByAlias(params?.alias as string);
		const products = await API.findProduct(page.category);
		return {
			props: {
				menu,
				firstCategory: firstCategoryItem.id,
				page,
				products
			}
		};
	} catch(e) {
		return {notFound: true};
	}
};