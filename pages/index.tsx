import React, { useState} from 'react';
import { Rating } from '../components';
import { MainLayout } from '../layout/main';

export default function Home(): JSX.Element { 
  const [rating, setRating] = useState(0);

  return (
    <MainLayout>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </MainLayout>
  );
}
