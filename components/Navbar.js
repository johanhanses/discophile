import Link from "next/link";
import styles from "./Navbar.module.css";

function Nav() {
    return (
        <ul className={styles.menu}>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
        </ul>
    );
}

export default Nav;
