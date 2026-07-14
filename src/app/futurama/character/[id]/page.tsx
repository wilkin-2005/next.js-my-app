
import styles from "@/src/app/futurama/futurama.module.css";
import { notFound } from "next/navigation";
import { getCharacterById } from "@/src/data/futurama-characters";


interface characterProps {
    id?: number;
    name: string;
    gender?: string;
    status?: string;
    species?: string;
    createdAt?: string;
    // image: string | null;
}



// Översätter karaktärens till svenska för att kunna visas på svenska.
function translateProps(char: characterProps): characterProps
{
    // Översätter "gender" till svenska
    let genderProp;
    switch (char.gender) {
        case "MALE":
            genderProp = "manligt";
        break;
        case "FEMALE":
            genderProp = "kvinnligt";
        break;
        case "UNKNOWN":
            genderProp = "okänt";
        break;
        default:
            genderProp = char.gender;
        break;
    }

    // Kvar att översätta: "status", "species" och "createdAt"
    // Skapa och använd en utility-funktion för "createdAt"

    return {
        id: char.id,
        name: char.name,
        gender: genderProp,
        status: char.status,
        species: char.species,
        createdAt: char.createdAt
    };
}



// Karaktärssidans funktion
export default async function CharacterPage(  { params }: { params: Promise<{ id: string }> }  )
{
    const { id: idStr } = await params;
    const idNr = Number(idStr);

    if (Number.isNaN(idNr)) {
        notFound();
    }

    const character = getCharacterById(idNr);

    if (!character) {
        notFound();
    }

    const translatedProps: characterProps = translateProps(character);


    return(
        <main>
            <a href="/futurama" className={styles.go_back} >Backa till alla karaktärer</a>

            <article className={styles.character_section}>

                <div> {
                    character.image &&
                    <img alt="" src={character.image} width={800} height={600} />
                } </div>

                <div>
                    <h2 className={styles.heading2}>Karaktär:</h2>
                    
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