import { GetStaticProps } from 'next';
import { HomeProps, TopLevelCategory } from '../@types';
import { API } from '../api';
import { withLayout } from '../hoc';

function Search(): JSX.Element {
	return <>Search</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = TopLevelCategory.Courses;
	const menu = await API.findPage(firstCategory);

	if (!menu) return { notFound: true };

	return {
		props: {
			menu,
			firstCategory,
		}
	};
};