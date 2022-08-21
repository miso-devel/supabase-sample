import type { NextPage } from 'next';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {
  return (
    <div>
      <Layout title="Home">{'Hello'}</Layout>
    </div>
  );
};

export default Home;
