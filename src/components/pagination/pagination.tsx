
import styles from "./pagination.module.css";


export default function Pagination( { page, pagesAmount }: { page: number, pagesAmount: number } )
{
    return (
        <div className={styles.pagination_div}>
            <a href={`futurama/?page=${1}`} className="button-main" > Första sidan </a>

            <a href={`futurama/?page=${page-1}`} className="button-main" > Föregående sida </a>

            <span className={styles.middle_splitter} ></span>

            {
                page < pagesAmount &&
                <a href={`futurama/?page=${page+1}`} className="button-main" > Nästa sida </a>
            }
            {
                page >= pagesAmount &&
                <a href={`futurama/?page=${page}`} className="button-main btn-disabled" > Nästa sida </a>
            }

            <a href={`futurama/?page=${pagesAmount}`} className="button-main" > Sista sidan </a>
        </div>
    );
}