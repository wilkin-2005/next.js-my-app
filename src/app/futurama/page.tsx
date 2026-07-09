
import styles from "@/src/styles/futurama.module.css";
import data from "@/data/futurama-characters.json";
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
function CharacterCard({ name, imageUrl, status }: characterProps)
{
    let statusClass: string = ``;

    if (status === "ALIVE") {
        statusClass = "status-alive";
    }
    else if (status === "DEAD") {
        statusClass = "status-dead";
    }
    else if (status === "UNKNOWN") {
        statusClass = "status-unknown";
    }

    return(
        <div className={
            styles.div_card
            
            }>
            <h3 className={styles.h3} > Namn: <span> {name} </span> </h3>
            {
                imageUrl &&
                    <img alt="" src={imageUrl} width={400} height={352} />
            }
            <a href="https://futuramaapi.com/" target="_blank">Läs mer...</a>
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
                <h2 id="characters-header" className={styles.h2}> Karaktärer </h2>

                <ul className={styles.ul}>
                    {
                            data.items.map((character) => (
                                <li key={character.id}>
                                    <CharacterCard name={character.name} imageUrl={character.image} status={character.status} />
                                </li>
                            ))
                    }
                </ul>
            </section>

        </main>
    );
}