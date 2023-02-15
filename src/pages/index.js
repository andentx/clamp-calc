import Layout from '../components/Layout';
import Title from '../components/Title';
import Calculator from '../components/Calculator';
import GeneratedFunction from '../components/GeneratedFunction';

export default function Home() {
  return (
    <>
      <Layout>
        <Title />
        <Calculator />
        <GeneratedFunction />
      </Layout>
    </>
  );
}
