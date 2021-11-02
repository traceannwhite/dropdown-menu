import type { NextPage } from "next";
import styles from "../styles/Shop.module.css";

const Shop: NextPage = () => {
  return (
    <>
      <main>
        <h1>Shopping Page</h1>
        <div className={styles.container}>
          <nav>Shop Products Navigation</nav>
          <section>This is where the products will be displayed.</section>
        </div>
      </main>
    </>
  );
};

export default Shop;
