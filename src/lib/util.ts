

// Returnar en string med det nuvarande datumet och klockslaget formaterat som jag vill ha det.
// Kopierat från ett av mina tidigare projekt på Lexicon.
export function formatCurrentDate(): string
{
    const d = new Date();
    const allMonths: string[] = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];

    const date: string = String(d.getDate());
    const month: string = allMonths[d.getMonth()]!;
    const year: string = String(d.getFullYear());

    const hours: string = (d.getHours() < 10) ? `0${d.getHours()}`: `${d.getHours()}`;
    const minutes: string = (d.getMinutes() < 10) ? `0${d.getMinutes()}` : `${d.getMinutes()}`;
    const seconds: string = (d.getSeconds() < 10) ? `0${d.getSeconds()}`: `${d.getSeconds()}`;

    return `${date} ${month} ${year} ${hours}:${minutes}:${seconds}`;
}



// Gör om värdet i "createdAt" som kommer med karaktärerna från Futurama APIet.
export function formatCharacterDate(oldDate: string | undefined): string
{
    if (oldDate !== undefined) {
        return oldDate;
    }
    else {
        return "";
    }
}