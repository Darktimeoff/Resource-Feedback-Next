import { GetStaticProps } from 'next';

import React from 'react';
import { withLayout } from '../hoc';
import { API } from '../api';
import { HomeProps, TopLevelCategory } from '../@types';

function Home(props: HomeProps): JSX.Element {
  return (
    <>
      <div>Index tsx</div>
    </>
  );
}


export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = TopLevelCategory.Courses;
  const menu = await API.findPage(firstCategory);

  return {
    props: {
      menu,
      firstCategory,
    }
  };
};