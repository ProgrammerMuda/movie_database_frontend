import styles from './Movie.module.css';
import image1 from './img/Black Panther.png';
import image2 from './img/dr strange.png';
import image3 from './img/eternals.png';
import image4 from './img/Loki.png';
import image5 from './img/Moonknight.png';
import image6 from './img/ms marvel.png';
import image7 from './img/sangchi.png';
import image8 from './img/secret invasion.png';
import image9 from './img/She hulk.png';
import image10 from './img/Spideran.png';
import image11 from './img/Thor love and thunder.png';

function Movies() {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          <div className={styles.movie}>
            <img className={styles.movie__image} src={image1} alt="" />
            <h3 className={styles.movie__title}>Black Panther</h3>
            <p className={styles.movie__date}>11 November</p>
          </div>
          <div className={styles.movie}>
            <img className={styles.movie__image} src={image2} alt="" />
            <h3 className={styles.movie__title}>Doctor Strange</h3>
            <p className={styles.movie__date}>6 Mei</p>
          </div>
          <div className={styles.movie}>
            <img className={styles.movie__image} src={image3} alt="" />
            <h3 className={styles.movie__title}>Eternals</h3>
            <p className={styles.movie__date}>5 November</p>
          </div>
          <div className={styles.movie}>
            <img className={styles.movie__image} src={image4} alt="" />
            <h3 className={styles.movie__title}>Loki</h3>
            <p className={styles.movie__date}>9 Juni</p>
          </div>
          <div className={styles.movie}>
            <img className={styles.movie__image} src={image5} alt="" />
            <h3 className={styles.movie__title}>Moonknight</h3>
            <p className={styles.movie__date}>30 Maret</p>
          </div>
          <div className={styles.movie}>
            <img className={styles.movie__image} src={image6} alt="" />
            <h3 className={styles.movie__title}>Ms Marvel</h3>
            <p className={styles.movie__date}>8 Juni</p>
          </div>
          <div className={styles.movie}>
            <img className={styles.movie__image} src={image7} alt="" />
            <h3 className={styles.movie__title}>Shang-chi</h3>
            <p className={styles.movie__date}>3 September</p>
          </div>
          <div className={styles.movie}>
            <img className={styles.movie__image} src={image8} alt="" />
            <h3 className={styles.movie__title}>Secret Invasion</h3>
            <p className={styles.movie__date}>Coming soon</p>
          </div>
          <div className={styles.movie}>
            <img className={styles.movie__image} src={image9} alt="" />
            <h3 className={styles.movie__title}>She Hulk</h3>
            <p className={styles.movie__date}>Coming soon</p>
          </div>
          <div className={styles.movie}>
            <img className={styles.movie__image} src={image10} alt="" />
            <h3 className={styles.movie__title}>Spiderman</h3>
            <p className={styles.movie__date}>15 Desember</p>
          </div>
          <div className={styles.movie}>
            <img className={styles.movie__image} src={image11} alt="" />
            <h3 className={styles.movie__title}>Thor</h3>
            <p className={styles.movie__date}>15 November</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movies;
