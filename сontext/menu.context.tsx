import { createContext, PropsWithChildren, ReactNode, useState } from 'react';
import { IMenuContext, IMenuItem, SetMenu, TopLevelCategory } from '../@types';

export const MenuContext = createContext<IMenuContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const MenuContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IMenuContext>): JSX.Element => {
	const [menuState, setMenuState] = useState<IMenuItem[]>(menu);
	const setMenu: SetMenu = (newMenu) => setMenuState(newMenu);

	return <MenuContext.Provider value={{ 'menu': menuState, firstCategory, setMenu }}>{children}</MenuContext.Provider>;
};