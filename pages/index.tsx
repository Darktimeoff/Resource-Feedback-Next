import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Teкст</Htag>
      <Button appearance="ghost" arrow="down">Text</Button>
      <Button appearance="primary" arrow="right">Text</Button>
    </>
  );
}
