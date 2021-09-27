import { GetStaticProps} from 'next';

import React from 'react';
import { withLayout } from '../hoc';
import { API } from '../api';
import { HomeProps } from '../@types';

function Home(props: HomeProps): JSX.Element { 
  return (
    <>
     <div>Index tsx</div>
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