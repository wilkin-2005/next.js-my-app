
import Link from "next/link";


export default function NotFound()
{
    return(
      <div className="not-found" >
        <h2>Not Found</h2>
        <p>Kunde inte hitta sidan</p>
        <Link href="/" className="home-link" >Gå till Hem</Link>
      </div>
    );
}