import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { HomeProps } from '../../@types';
import { API } from '../../api';
import { firstLevelMenu } from '../../helpers';
import { withLayout } from '../../hoc';

function Courses({firstCategory}: HomeProps): JSX.Element {
	return <>{firstCategory}</>;
}

export default withLayout(Courses);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map(m => `/${m.route}`),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) return { notFound: true };

	const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
	if (!firstCategoryItem) return { notFound: true };
	
	const menu = await API.findPage(firstCategoryItem.id);

	return {
		props: {
			menu,
			firstCategory: firstCategoryItem.id,
		}
	};
};