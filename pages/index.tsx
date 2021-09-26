import { GetStaticProps} from 'next';

import React from 'react';
import { withLayout } from '../hoc';
import { API } from '../api';
import { HomeProps, IMenuItem } from '../@types';

function Home({menu}: HomeProps): JSX.Element { 
  return (
    <>
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  );
}


export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const menu = await API.findPage(firstCategory);

  return {
    props: {
      menu,
      firstCategory,
    }
  };
};