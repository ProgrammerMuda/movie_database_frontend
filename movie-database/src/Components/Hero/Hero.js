import styles from './Hero.module.css';
import gambar from './img/spd.png';

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Spiderman</h2>
          <h3 className={styles.hero__genre}>Genre: Action, Adventure, Fantasy, Science Fiction</h3>
          <p className={styles.hero__description}>
            SpiderMan Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to
            discover what it truly means to be Spider-Man.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img className={styles.hero__image} src={gambar} alt="placeholder" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
