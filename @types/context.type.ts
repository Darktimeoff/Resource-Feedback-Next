import { IMenuItem, TopLelelCategory } from '.';

export interface IMenuContext {
	menu: IMenuItem[];
	firstCategory: TopLelelCategory,
	setMenu?: (newMenu: IMenuItem[]) => void;
}