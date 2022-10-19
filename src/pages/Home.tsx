import Banner from '../components/Banner';
import Blogs from '../components/Blogs';
import Brands from '../components/Brands';
import Company from '../components/Company';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Join from '../components/Join';
import Map from '../components/Map';
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
      <Company />
      <Brands />
      <Blogs />
      <Map />
      <Join />
      <Footer />
    </>
  );
}

export default Home;
