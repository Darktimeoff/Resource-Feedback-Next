import { GetStaticProps} from 'next';

import React from 'react';
import { withLayout } from '../hoc';
import axios from 'axios';
import { IMenuItem } from '../@types/menu.type';
import { API } from '../api';

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
  const data = await API.findPage(firstCategory);

  return {
    props: {
      menu: data,
      category: firstCategory,
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: IMenuItem[];
  category: number;
}