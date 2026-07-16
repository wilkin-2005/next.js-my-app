
import styles from "./pagination.module.css";


export default function Pagination( { page }: { page: number } )
{
    return (
        <div className={styles.pagination_div}>
            <a href={`futurama/?page=${page-1}`} className={styles.button_main} > Föregående sida </a>

            <a href={`futurama/?page=${page+1}`} className={styles.button_main} > Nästa sida </a>
        </div>
    );
}