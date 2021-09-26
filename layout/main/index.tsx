import { LayoutProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { Footer } from '../Footer';

export const MainLayout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header}/>
			<Sidebar className={styles.sidebar}/>
			<main className={styles.body}>
				{children}
			</main>
			<Footer className={styles.footer}/>
		</div>
	);
};
