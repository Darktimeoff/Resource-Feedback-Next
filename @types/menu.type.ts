import { TopLelelCategory } from '.';

interface Id {
	secondCategory: TopLelelCategory;
}

export interface IPageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface IMenuItem {
	_id: Id,
	pages: IPageItem[],
}