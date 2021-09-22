import React, { useState} from 'react';
import { Rating } from '../components';

export default function Home(): JSX.Element { 
  const [rating, setRating] = useState(0);

  return (
    <>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}
