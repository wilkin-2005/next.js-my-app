
import styles from "@/src/styles/futurama.module.css";
import data from "@/data/futurama-characters.json";
import Hero from "@/src/components/hero";



interface characterProps {
    id?: number;
    name: string;
    gender?: string;
    status?: string;
    species?: string;
    createdAt?: string;
    imageUrl: string | null;
}

/* {
    "id": 1,
    "name": "Philip J. Fry",
    "gender": "MALE",
    "status": "ALIVE",
    "species": "HUMAN",
    "createdAt": "2023-12-02T18:32:33.122015Z",
    "image": "https://futuramaapi.com/static/img/human/philip-j_-fry.webp"
} */

// 
function CharacterCard({ name, imageUrl }: characterProps)
{
    return(
        <>
            <h3 className={styles.h3}> Namn: <span> {name} </span> </h3>
            {
                imageUrl && <img
                    alt=""
                    src={imageUrl}
                    width={400}
                    height={352}
                />
            }
            <a href="#">Läs mer...</a>
        </>
    );
}


// Futurama-sidans funktion
export default function FuturamaPage()
{
    return (
        <main>
            <Hero title="Futurama" imgIds={2} />

            <section className={styles.margin} aria-labelledby="characters-header">
                <h2 id="characters-header" className={styles.h2}> Karaktärer </h2>

                <ul className={styles.ul}>
                    {
                        data.items.map((character) => (
                            <li key={character.id}>
                                <CharacterCard name={character.name} imageUrl={character.image} />
                            </li>
                        ))
                    }
                </ul>
            </section>

        </main>
    );
}