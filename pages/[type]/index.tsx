import { GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { CoursesProps, TopLevelCategory } from '../../@types';
import { API } from '../../api';
import { withLayout } from '../../hoc';

function Courses(): JSX.Element {
	return (
		<div>
			<h1>Index page of Courses</h1>
		</div>
	);
}

export default withLayout(Courses);

export const getStaticProps: GetStaticProps<CoursesProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) return { notFound: true };

	const firstCategory = TopLevelCategory.Courses;
	const menu = await API.findPage(firstCategory);

	return {
		props: {
			menu,
			firstCategory,
		}
	};
};