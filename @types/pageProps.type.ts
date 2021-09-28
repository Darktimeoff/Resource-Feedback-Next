import { IMenuItem, IProductModel, ITopPageModel } from '.';

export interface HomeProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: number;
}

export interface CourseProps extends HomeProps {
	page: ITopPageModel;
	products: IProductModel[];
}

export interface CoursesProps extends HomeProps {}