/* eslint-disable react/display-name */

import { FunctionComponent } from 'react';
import { IMenuContext } from '../@types';
import { MainLayout } from '../layout/main';
import { MenuContextProvider } from '../сontext/menu.context';

const withLayout = <T extends Record<string, unknown> & IMenuContext>(Component: FunctionComponent<T>) => (props: T): JSX.Element => (
	<MenuContextProvider menu={props.menu} firstCategory={props.firstCategory}>
		<MainLayout>
			<Component {...props}/>
		</MainLayout>
	</MenuContextProvider>
);

withLayout.displayName = 'withLayout(component)';

export { withLayout };