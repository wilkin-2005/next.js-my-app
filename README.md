
# Wilmers första app i Next.js

Första Next.js projektet jag skapade när vi skulle lära oss Next.js under det momentet på Frontendutvecklare-utbildningen på Lexicon. Läraren skapade också sin egen variant av projektet under föreläsningar och liknande. Hans kod finns på detta [Github repository](https://github.com/Lexicon-Utbildning-Front-end-2026/nextjs-intro).

Projektet är inte färdigt utan ser ut som det var i slutet av tiden på utbildningen då vi arbetade med detta projekt. Om jag skulle fortsätta arbeta på projektet så skulle jag vilja lägga till saker som bättre paginering och ha fler sidor med andra APIer. Exempelvis ett av [NASAs APIer](https://api.nasa.gov/).


## Vad jag har gjort

Jag har gjort en sida där jag använder mig av [Futurama API](https://futuramaapi.com/) för att visa upp små kort med alla Futurama-karaktärer som finns i APIet. Varje kort har en knapp som tar en till en sida med mer information om den karaktären, också hämtat från APIet.

### Saker jag lärt mig:

* Grunderna inom Next.js
* Komponenter i Next.js
* Modular CSS
* Vanlig och dynamisk routing
* Params och props i Next.js
* Använda `notFound()` och skapa en egen not-found-sida
* Använda REST för att hämta data från APIer
* URL State Management med `searchParams` och paginering


## Filstruktur

All källkod finns i `/src` och alla bilder och andra statiska saker finns i `/public`

``` bash
├── src/
│   ├── app/
│   │   ├── about/
│   │   └── futurama/
│   ├── components/
│   ├── data/
│   └── lib/
└── public/
```

Filstrukturen är inspirerad av [The Ultimate Guide to Organizing Your Next.js 15 Project Structure](https://www.wisp.blog/blog/the-ultimate-guide-to-organizing-your-nextjs-15-project-structure).

Jag följer i stor utsträckning namngivningskonventionen för Next.js som kan ses [här](https://www.piyushgambhir.com/blogs/next-js-naming-conventions).


## Versioner av program/mjukvara

* Node.js `v24.16.0`
* npm `11.18.0`
* TypeScript `Version 5.9.3`
* React `19.2.4`
* Next.js `16.2.10`


## Öppna sidan lokalt

Kör kommandot `npm run build` och sedan `npm run start` för att starta en lokal server.

Öppna sedan http://localhost:3000 i webbläsaren för att se hemsidan.