import { IMenuItem, TopLevelCategory } from '.';

export type SetMenu = (newMenu: IMenuItem[]) => void;
export interface IMenuContext {
	menu: IMenuItem[];
	firstCategory: TopLevelCategory,
	setMenu?: SetMenu
}