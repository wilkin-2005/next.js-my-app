
import data from "./futurama-characters.json";


// Ger ut datan med Futurama-karaktärerna från den lokala json-filen.
export function getCharacters() {
    return data;
}


// Ger ut en enda Futurama-karaktär med ett visst ID, plockad från den lokala json-filen.
export function getCharacterById(id: number) {
    return data.items.find( (character) => character.id === id );
}



// Ger ut datan med Futurama-karaktärerna från Futurama APIt. Använder sig av REST API.
export async function getCharactersREST()
{
    // https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=1&size=50

    const fetchedData = await fetch("https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=1&size=50");

    const jsonData = await fetchedData.json();
    console.log(jsonData.items[30]);
}