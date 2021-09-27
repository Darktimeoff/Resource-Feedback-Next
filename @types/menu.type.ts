import { TopLevelCategory } from '.';

interface Id {
	secondCategory: TopLevelCategory;
}

export interface IPageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface IMenuItem {
	_id: Id,
	isOpened?: boolean;
	pages: IPageItem[],
}

export interface IFirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: TopLevelCategory;
}