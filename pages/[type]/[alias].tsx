import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import React from 'react';
import { withLayout } from '../../hoc';
import { API } from '../../api';
import { CourseProps } from '../../@types';
import { ParsedUrlQuery } from 'querystring';
const firstCategory = 0;

function Course({ products }: CourseProps): JSX.Element {
	return (
		<>
			{products?.length}
		</>
	);
}


export default withLayout(Course);

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if(!params) return {notFound: true};

	const menu = await API.findPage(firstCategory);
	const page = await API.getPageByAlias(params?.alias as string);
	const products = await API.findProduct(page.category);

	return {
		props: {
			menu,
			firstCategory,
			page,
			products
		}
	};
};


export const getStaticPaths: GetStaticPaths = async () => {
	const menu = await API.findPage(firstCategory);

	return {
		paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
		fallback: true,
	};
};