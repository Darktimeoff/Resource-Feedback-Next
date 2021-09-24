import { LayoutProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';

export const MainLayout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<main>
				<Sidebar />
				<section>
					{children}
				</section>
			</main>
			<Footer />
		</>
	)
};
