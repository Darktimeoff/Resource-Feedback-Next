import { RatingProps } from './props';
import Stars from './stars.svg';
import styles from './index.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';

export const Rating = ({ rating, isEditable = false, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
	
	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((_, i) => createStar(i < currentRating, isEditable, i, onStarEnter, onStarClick));
		setRatingArray(() => updatedArray);
	};

	function onStarEnter(rating: number) {
		if(!isEditable) return;
		constructRating(rating);
	}

	function restoreRating() {
		constructRating(rating);
	}

	function onStarClick(rating: number) {
		if(!isEditable || !setRating) return;
		setRating(rating);
	}


	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	return (
		<div {...props} onMouseLeave={restoreRating}>
			{ratingArray}
		</div>
	);
};


type cb = (rating: number) => void;

function createStar(isFilled: boolean, isEditable: boolean, i: number, onEnter?: cb, setRating?: cb): JSX.Element {
	const cls = cn(styles.star, isFilled && [styles.filled], isEditable && [styles.editable]);
	
	function onMouseEnter() {
		if(!onEnter) return;
		onEnter(i + 1);
	}

	function onClick() {
		if(!setRating) return;
		setRating(i + 1);
	}
	
	function onKeyDown(e: React.KeyboardEvent<SVGAElement>) {
		if(e.code === 'Enter') onClick();
		if (e.code === 'Space') onClick();
	}

	const tabIndex = isEditable ? 0 : -1;

	return <Stars 
		className={cls} 
		key={i} 
		onMouseEnter={onMouseEnter} 
		onClick={onClick} 
		tabIndex={tabIndex} 
		onKeyPress={onKeyDown} 
	/>;
}