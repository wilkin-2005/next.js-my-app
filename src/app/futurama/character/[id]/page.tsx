
import styles from "@/src/app/futurama/futurama.module.css";
import { notFound } from "next/navigation";
import { characterProps, translateCharacterProps, getCharacterByIdREST } from "@/src/data/futurama-characters";


// Karaktärssidans funktion
export default async function CharacterPage(  { params }: { params: Promise<{ id: string }> }  )
{
    const { id: idStr } = await params;
    const idNr = Number(idStr);

    if (Number.isNaN(idNr)) {
        notFound();
    }

    const character = await getCharacterByIdREST(idNr);

    if (!character) {
        notFound();
    }

    const translatedProps: characterProps = translateCharacterProps(character);


    return(
        <main>
            <a href="/futurama" className={styles.go_back} >Backa till alla karaktärer</a>

            <article className={styles.character_section}>

                <div> {
                    character.image &&
                    <img alt="" src={character.image} width={800} height={600} />
                } </div>

                <div>
                    <h2 className={styles.heading2} > {translatedProps.name} </h2>
                    
                    <p><b>Namn:</b> {translatedProps.name}</p>
                    <p><b>Kön:</b> {translatedProps.gender}</p>
                    <p><b>Status:</b> {translatedProps.status}</p>
                    <p><b>Art:</b> {translatedProps.species}</p>
                    <p><b>Skapad:</b> {translatedProps.createdAt}</p>
                </div>

            </article>
        </main>
    );
}