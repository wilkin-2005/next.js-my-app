
import styles from "./futurama.module.css";
import data from "@/src/data/futurama-characters.json";
import Hero from "@/src/components/hero/hero";


interface characterProps {
    id?: number;
    name: string;
    gender?: string;
    status?: string;
    species?: string;
    createdAt?: string;
    imageUrl: string | null;
}

// Returnerar innehållet i karaktärens kort
function CharacterCard({ id, name, imageUrl }: characterProps)
{
    return(
        <div className={styles.div_card}>

            <h3> Namn: <span> {name} </span> </h3>
            {
                imageUrl &&
                    <img alt="" src={imageUrl} width={400} height={352} />
            }
            <a href={`futurama/character/${id}`}>Läs mer...</a>

        </div>
    );
}


// Futurama-sidans funktion
export default function FuturamaPage()
{
    return (
        <main>
            <Hero title="Futurama" imgIds={2} />

            <section className={styles.margin} aria-labelledby="characters-header">
                <h2 id="characters-header" className={styles.heading2}> Karaktärer: </h2>

                <ul className={styles.card_grid}>
                    {
                            data.items.map((character) => (
                                <li key={character.id}>
                                    <CharacterCard id={character.id} name={character.name} imageUrl={character.image} status={character.status} />
                                </li>
                            ))
                    }
                </ul>
            </section>

        </main>
    );
}