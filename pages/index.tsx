import { GetStaticProps } from 'next';

import React from 'react';
import { withLayout } from '../hoc';
import { API } from '../api';
import { HomeProps, TopLevelCategory } from '../@types';
import { Input, Textarea } from '../components';

function Home(props: HomeProps): JSX.Element {
  return (
    <>
      <div>Index tsx</div>
	  <Input placeholder="test" />
	  <Textarea placeholder="test" />
    </>
  );
}


export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = TopLevelCategory.Courses;
  const menu = await API.findPage(firstCategory);

  if(!menu) return {notFound: true};

  return {
    props: {
      menu,
      firstCategory,
    }
  };
};