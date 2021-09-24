import { LayoutProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { Footer } from '../Footer';

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
