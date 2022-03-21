import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Movies from '../Components/Movies/Movie';
import AddMovie from '../Components/AddMovie/AddMovie';
import Footer from '../Components/Footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Movies />
      <AddMovie />
      <Footer />
    </div>
  );
}

export default Home;
