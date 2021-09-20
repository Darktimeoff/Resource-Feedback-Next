import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Teкст</Htag>
      <Button appearance="primary">Text</Button>
      <Button appearance="ghost">Text</Button>
    </>
  );
}
