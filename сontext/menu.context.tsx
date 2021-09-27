import { createContext, PropsWithChildren, ReactNode, useState } from 'react';
import { IMenuContext, IMenuItem, TopLelelCategory } from '../@types';

export const MenuContext = createContext<IMenuContext>({menu: [], firstCategory: TopLelelCategory.Courses});

export const MenuContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IMenuContext>): JSX.Element => {
	const [menuState, setMenuState] = useState<IMenuItem[]>(menu);
	const setMenu = (newMenu: IMenuItem[]) => setMenuState(_ => [...newMenu]);


	return <MenuContext.Provider value={{ 'menu': menuState, firstCategory, setMenu}}>{children}</MenuContext.Provider>;
}