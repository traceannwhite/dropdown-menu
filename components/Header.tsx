import styles from "../styles/Header.module.css";
import Link from "next/link";
import AccountDropdown from "./AccountDropdown";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* <Link href="/favorites">
          <BsSuitHeart />
        </Link> */}
        <ul>
          {/* <Link href="/signin">Sign In</Link> */}
          <AccountDropdown />
          <Link href="/cart">
            <BsCart4 />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
