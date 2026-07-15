
import data from "./futurama-characters.json";

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
    let genderProp;
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

    // Kvar att översätta: "status", "species" och "createdAt"
    // Skapa och använd en utility-funktion för "createdAt"

    return {
        id: char.id,
        name: char.name,
        gender: genderProp,
        status: char.status,
        species: char.species,
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