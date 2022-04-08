import { useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Movies from '../Components/Movies/Movies';
import Navbar from '../Components/Navbar/Navbar';
import AddMovieForm from '../Components/AddMovie/AddMovie';
import data from '../utils/constants/data';

function Main() {
  const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
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
