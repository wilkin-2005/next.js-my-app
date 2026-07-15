
import styles from "./futurama.module.css";
import Hero from "@/src/components/hero/hero";
import { characterProps, getCharactersREST } from "@/src/data/futurama-characters";


// Returnerar innehållet i karaktärens kort
function CharacterCard({ id, name, image: imageUrl }: characterProps)
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
export default async function FuturamaPage()
{
    const characters: characterProps[] = await getCharactersREST();

    return (
        <main>
            <Hero title="Futurama" imgIds={2} />

            <section className={styles.margin} aria-labelledby="characters-header">
                <h2 id="characters-header" className={styles.heading2}> Karaktärer: </h2>

                <ul className={styles.card_grid}>
                    {
                        characters.map((char) => (
                            <li key={char.id}>
                                <CharacterCard id={char.id} name={char.name} image={char.image} status={char.status} />
                            </li>
                        ))
                    }
                </ul>
            </section>

        </main>
    );
}