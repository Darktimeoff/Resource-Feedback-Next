import React, { useState} from 'react';
import { Rating } from '../components';
import { withLayout } from '../hoc';

function Home(): JSX.Element { 
  const [rating, setRating] = useState(0);

  return (
    <>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}


export default withLayout(Home);