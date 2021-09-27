
import { useContext } from 'react';
import { MenuContext } from '../../сontext/menu.context';
import styles from './index.module.scss';
import cn from 'classnames';

export const Menu = (): JSX.Element => {
	const { menu } = useContext(MenuContext);

	return (
		<div>
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</div>
	);
};
