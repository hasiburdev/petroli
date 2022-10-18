import Banner from '../components/Banner';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Service from '../components/Service';
import Supplier from '../components/Supplier';

function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <Service />
    </>
  );
}

export default Home;
