
import Link from "next/link";
import styles from "./main-nav.module.css";


export default function MainNav()
{
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/" className={styles.nav_link}>Hem</Link>
                <Link href="/futurama" className={styles.nav_link} >Futurama</Link>
                <Link href="/about" className={styles.nav_link}>Om oss</Link>
            </nav>
        </header>
    );
}