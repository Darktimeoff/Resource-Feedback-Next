/* eslint-disable react/display-name */

import { FunctionComponent } from 'react';
import { MainLayout } from '../layout/main';

const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => (props: T): JSX.Element => (
	<MainLayout>
		<Component {...props}/>
	</MainLayout>
);

withLayout.displayName = 'withLayout(component)';

export { withLayout };