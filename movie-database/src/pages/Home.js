import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Movies from '../Components/Movies/Movies';
import Navbar from '../Components/Navbar/Navbar';
import AddMovieForm from '../Components/AddMovie/AddMovie';

function Main() {
  return (
    <main>
      <Hero />
      <Movies />
      <AddMovieForm />
    </main>
  );
}
function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
