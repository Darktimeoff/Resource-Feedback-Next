export enum TopLelelCategory {
	Courses,
	Services,
	Books,
	Products
}

export interface IAdvantage {
	_id: string;
	title: string;
	description: string;
}

export interface IHhData {
	_id: string;
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
}

export interface ITopPageModel {
	tags: string[];
	_id: string;
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText: string;
	tagsTitle: string
	metaTitle: string;
	metaDescription: string;
	firstCategory: TopLelelCategory;
	advantages: IAdvantage[];
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	hh: IHhData;
}