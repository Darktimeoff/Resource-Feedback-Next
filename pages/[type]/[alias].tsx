import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import React from 'react';
import { withLayout } from '../../hoc';
import { API } from '../../api';
import { CourseProps, IMenuItem } from '../../@types';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '../../helpers';

function Course({ products }: CourseProps): JSX.Element {
	return (
		<>
			{products?.length}
		</>
	);
}


export default withLayout(Course);

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

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if(!params) return {notFound: true};

	const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
	if (!firstCategoryItem) return { notFound: true };

	const menu = await API.findPage(firstCategoryItem.id);
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
};