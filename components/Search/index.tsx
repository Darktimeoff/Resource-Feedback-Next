import { SearchProps } from './props';
import styles from './index.module.scss';
import cn from 'classnames';
import { Button, Input } from '../index';
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import SearchSVG from './search.svg';
import { useRouter } from 'next/router';

export const Search = ({  className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter()

	function onSearchInput(e: ChangeEvent<HTMLInputElement>) {
		setSearch(e.target.value.trim());
	}

	function goToSearchPage() {
		if(!search.trim() || search.length <= 3) return;

		router.push({
			pathname: '/search',
			query: {
				q: search,
			}
		});
	}

	function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
		if(e.key === 'Enter') goToSearchPage();
	}

	return (
		<div {...props} className={cn(styles.search, className)}>
			<Input className={styles.searchInput} value={search} onKeyDown={onKeyDown} onChange={onSearchInput} placeholder="Поиск..."/>
			<Button className={styles.searchButton} onClick={goToSearchPage} appearance="primary">
				<SearchSVG />
			</Button>
		</div>
	)
};
