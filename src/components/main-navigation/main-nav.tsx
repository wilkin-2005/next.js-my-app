
import Link from "next/link";
import styles from "./main-nav.module.css";


export default function MainNav()
{
    return (
        <header className={styles.nav_header}>
            <nav>
                <Link className={styles.nav_link} href="/" >Hem</Link>
                <Link className={styles.nav_link} href="/futurama" >Futurama</Link>
                <Link className={styles.nav_link} href="/about" >Om oss</Link>
            </nav>
        </header>
    );
}