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
                <Link href="/albums">
                    <a>All Albums</a>
                </Link>
            </li>

            {/* conditionally rendered later on */}
            <li>
                <Link href="/myalbums">
                    <a>My Albums</a>
                </Link>
            </li>

            <li>
                <Link href="signup">
                    <a>Signup/Login</a>
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
