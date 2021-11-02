import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <section>This is the main section.</section>
        <section className={styles.categories}>
          <aside className={styles.asides}>Aside 1</aside>
          <aside className={styles.asides}>Aside 2</aside>
          <aside className={styles.asides}>Aside 3</aside>
        </section>
      </main>
    </>
  );
};

export default Home;
