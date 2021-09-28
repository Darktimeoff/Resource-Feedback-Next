import { IMenuItem, IProductModel, ITopPageModel, TopLevelCategory } from '.';

export interface HomeProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: TopLevelCategory;
}

export interface CourseProps extends HomeProps {
	page: ITopPageModel;
	products: IProductModel[];
}

export interface CoursesProps extends HomeProps {}