
import data from "./futurama-characters.json";
import { formatCharacterDate } from "@/src/lib/util";

export interface characterProps {
    id?: number;
    name: string;
    gender?: string;
    status?: string;
    species?: string;
    createdAt?: string;
    image: string | null;
}


// Översätter karaktärens till svenska för att inte behöva visas på engelska
export function translateCharacterProps(char: characterProps): characterProps
{
    // Översätter "gender" till svenska
    let genderProp: string | undefined;
    
    switch (char.gender?.toUpperCase()) {
        case "MALE":
            genderProp = "manlig";
        break;
        case "FEMALE":
            genderProp = "kvinnlig";
        break;
        case "UNKNOWN":
            genderProp = "okänt";
        break;
        default:
            genderProp = char.gender;
        break;
    }

    // Översätter "status" till svenska
    let statusProp: string | undefined;

    switch (char.status?.toUpperCase()) {
        case "ALIVE":
            statusProp = "lever";
        break;
        case "DEAD":
            statusProp = "död";
        break;
        case "UNKNOWN":
            statusProp = "okänt";
        break;
        default:
            statusProp = char.status;
        break;
    }

    // Översätter "species" till svenska
    let speciesProp: string | undefined;

    // human, robot, head, alien, mutant, monster, unknown

    switch (char.species?.toUpperCase()) {
        case "HUMAN":
            speciesProp = "människa";
        break;
        case "ROBOT":
            speciesProp = "robot";
        break;
        case "HEAD":
            speciesProp = "huvud";
            // "Gerbil took the top head."
        break;
        case "ALIEN":
            speciesProp = "alien/utomjording";
        break;
        case "MUTANT":
            speciesProp = "mutant";
        break;
        case "MONSTER":
            speciesProp = "monster";
        break;
        case "UNKNOWN":
            speciesProp = "okänt";
        break;
        default:
            speciesProp = char.species;
        break;
    }

    // Ändrar "createdAt" datumet till något mer läsbart
    let createdAt: string;
    formatCharacterDate();


    // Kvar att översätta: och "createdAt"

    return {
        id: char.id,
        name: char.name,
        gender: genderProp,
        status: statusProp,
        species: speciesProp,
        createdAt: char.createdAt,
        image: char.image
    };
}



// Ger ut datan med Futurama-karaktärerna från den lokala json-filen.
export function getCharacters() {
    console.warn("Använder den lokala JSON-filen");
    return data;
}


// Ger ut en enda Futurama-karaktär med ett visst ID, plockad från den lokala json-filen.
export function getCharacterById(id: number) {
    console.warn("Använder den lokala JSON-filen");
    return data.items.find( (character) => character.id === id );
}



// Ger ut datan med Futurama-karaktärerna från Futurama APIt. Använder sig av REST.
export async function getCharactersREST(): Promise<characterProps[]>
{
    // https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=1&size=50

    const fetchedData = await fetch("https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=1&size=50");
    const jsonData = await fetchedData.json();

    return jsonData.items;
}


// Ger ut en enda Futurama-karaktär med ett visst ID. Använder sig av REST.
export async function getCharacterByIdREST(id: number): Promise<characterProps>
{
    // https://futuramaapi.com/api/characters/0
    const fetchedData = await fetch(`https://futuramaapi.com/api/characters/${id}`);

    return await fetchedData.json();
}