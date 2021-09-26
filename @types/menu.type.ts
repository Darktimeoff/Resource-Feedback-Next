interface Id {
	secondCategory: 0 | 1 | 2 | 3;
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