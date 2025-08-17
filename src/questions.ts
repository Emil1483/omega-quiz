export type Question = {
    question: string;
    answer: string;
};

export const questions: Question[] = [
    // Enkle spørsmål
    {
        question: "Hva heter det blå lokomotivet utenfor elektrobygget?",
        answer: "Ohma Elektra",
    },
    {
        question: "Hva heter hjembyen til Peter Pan?",
        answer: "Drømmeland/Neverland",
    },
    {
        question: "Hvor ligger smørekoppen på den sosiale rangstigen?",
        answer: "nederst",
    },
    {
        question: "Hvilken farge var kappemannen før den ble svart?",
        answer: "hvit",
    },
    { question: "Hva er hovedingrediensene i ketchup?", answer: "tomat" },
    {
        question: "Hvilken farge får du hvis du blander blått og gult?",
        answer: "grønn",
    },
    {
        question: "I hvilket år ble NTNU etablert som én institusjon?",
        answer: "1996",
    },
    {
        question: "NTNU har campus i tre byer. Hvilke?",
        answer: "Trondheim, Gjøvik og Ålesund",
    },
    {
        question: "Hvilket kodenavn brukes for kybernetikk og robotikk?",
        answer: "MTTK",
    },
    { question: "Hvilket kodenavn brukes for elsys?", answer: "MTELSYS" },
    { question: "Hvilket grunnstoff har kjemisk symbol Au?", answer: "gull" },
    {
        question: "Hva er NTNU sitt engelske navn?",
        answer: "Norwegian University of Science and Technology",
    },
    {
        question: "Hvilke 2 programmeringsspråk lærer du førsteåret?",
        answer: "python og c++",
    },
    { question: "I hvilket år falt Berlinmuren?", answer: "1989" },
    {
        question: "Hvem landet i Amerika i 1492?",
        answer: "Christofer Columbus",
    },

    // Faglige Kyb Spørsmål (første året pensum)
    {
        question:
            "I hvilket halvplan har et systems Laplace-omvending poler dersom systemet er ustabilt?",
        answer: "Høyre halvplan",
    },
    { question: "Hva betyr kubernetes?", answer: "Han som styrer" },
    {
        question: "Hva heter personen bak YouTube-kanalen 3Blue1Brown?",
        answer: "Grant Sanderson",
    },
    {
        question:
            "Hva sies en matrise å være dersom dens konjugert transponerte er lik seg selv?",
        answer: "Hermittisk",
    },
    {
        question: "Hvordan fungerer en Vortex flowmåler?",
        answer: "Et hinder som skaper vortekser er plassert i røret. En sensor måler frekvensen vorteksene passerer sensoren. Dette er et mål for strømningshastigheten.",
    },
    {
        question:
            "Hvilken egenskap må en væske ha for at man skal kunne måle strømningshastigheten i væsken med en Hall-effekt-sensor?",
        answer: "Den må inneholder ioner",
    },

    // Kjedelige musikkspørsmål
    {
        question:
            "Hva heter debutalbumet til Adele som inneholder sangen «Make You Feel My Love»?",
        answer: "19",
    },
    {
        question:
            "Hvilket Red Hot Chili Peppers-album, utgitt i 1999, inneholder hits som «Californication» og «Scar Tissue»?",
        answer: "Californication",
    },
    {
        question:
            "I 2009 gikk Jay-Z sammen med en soul-sanger for å lage «Empire State of Mind». Hvem var det?",
        answer: "Alicia Keys",
    },
    {
        question: "Hva var det Katy Perry kysset og likte i 2008?",
        answer: "En jente",
    },
    { question: "Fullfør teksten… «If you wanna be…»", answer: "My lover" },
    {
        question:
            "Hvilken artist ble «Tiårets artist» i Rolling Stone-magasinet i 1999?",
        answer: "Kurt Cobain",
    },
    {
        question:
            "Hvilken sang starter med: «Just a small town girl, livin’ in a lonely world»?",
        answer: "Don’t Stop Believin’",
    },
    {
        question:
            "Hvilken Beatles-sang starter med linjen «Yesterday, all my troubles seemed so far away»?",
        answer: "Yesterday",
    },
    {
        question: "Hvilket dop synger Eric Clapton om i hiten fra 1977?",
        answer: "Cocaine",
    },
    {
        question:
            "Hvilken artist er kjent for hitlåten «Shape of You» fra 2017?",
        answer: "Ed Sheeran",
    },
    {
        question:
            "Hvilken sang av Billie Eilish vant Grammy for Årets sang i 2020?",
        answer: "Bad Guy",
    },
    {
        question:
            "Hvilken sang av Luis Fonsi og Daddy Yankee ble en global hit i 2017, særlig etter en remix med Justin Bieber?",
        answer: "Despacito",
    },
    {
        question:
            "Hvilken kanadisk artist står bak hitlåten «Blinding Lights»?",
        answer: "The Weeknd",
    },
    {
        question:
            "Hva heter albumet til Taylor Swift som inneholder sangen «Blank Space»?",
        answer: "1989",
    },
    {
        question:
            "Hvilken rapper er kjent for å ha utgitt albumet «Damn» i 2017?",
        answer: "Kendrick Lamar",
    },

    // Fun-fact spørsmål (med svaralternativer i spørsmålet)
    {
        question:
            "Hva finner du på Henry Ford Museum i Detroit? (Alternativer: 1) Kronen til Aleksander den store, 2) Thomas Edison sitt siste pust, 3) Pennen til Albert Einstein, 4) Brilleglassene til George Washington)",
        answer: "Thomas Edison sitt siste pust",
    },
    {
        question:
            "Hva betyr ordet «idiot» opprinnelig? (Alternativer: 1) En som ikke er politiker, 2) En med lav IQ, 3) En som hadde mistet håret, 4) En som ikke hadde egen eiendom)",
        answer: "En som ikke er politiker",
    },
    {
        question:
            "Hvor mange katter spiser asiater i året? (Alternativer: 1) Omtrent 1 million, 2) Omtrent 4 millioner, 3) Omtrent 6 millioner, 4) Omtrent 10 millioner)",
        answer: "Omtrent 4 millioner",
    },
    {
        question:
            "Hvilket land er den største eksportøren av falske tenner? (Alternativer: 1) Norge, 2) Malta, 3) Sverige, 4) Liechtenstein)",
        answer: "Liechtenstein",
    },
    {
        question:
            "Hva slags mat kan man lage diamanter av? (Alternativer: 1) Peanøttsmør, 2) Druer, 3) Epler, 4) Bananer)",
        answer: "Peanøttsmør",
    },
    {
        question:
            "Hva gjør betong sterkere? (Alternativer: 1) Vann, 2) Trykk, 3) Gulrøtter, 4) Lyspærer)",
        answer: "Gulrøtter",
    },
    {
        question:
            "Hvem hadde ideen om å gjøre tennisballer gule? (Alternativer: 1) David Beckham, 2) Aleksander den store, 3) Roger Federer, 4) David Attenborough)",
        answer: "David Attenborough",
    },
    {
        question:
            "Hvem av disse kom for seint til sin egen begravelse? (Alternativer: 1) Kurt Cobain, 2) Elizabeth Taylor, 3) Ernest Hemingway, 4) Rolv Wesenlund)",
        answer: "Elizabeth Taylor",
    },
    {
        question:
            "Hva skjedde med astronauten Scott Kelly etter 11 måneder i verdensrommet? (Alternativer: 1) Han var 11 cm kortere enn før, 2) Han døde av sult, 3) Han ble 13 millisekunder yngre enn sin tvillingbror, 4) Han ble forgiftet av utstyret på romskipet)",
        answer: "Han ble 13 millisekunder yngre enn sin tvillingbror",
    },
    {
        question:
            "Hvordan bestemmer afrikanske ville hunder seg for om de skal jakte eller ikke? (Alternativer: 1) Ved hjelp av nysing, 2) Ved å se på stjernene, 3) Ved hjelp av fuglene, 4) Ved hjelp av hopping opp og ned)",
        answer: "Ved hjelp av nysing",
    },
    {
        question:
            "Hvorfor fikk den første regissøren av filmen «Haisommer» sparken? (Alternativer: 1) Fordi han stjal fra skuespillerne, 2) Fordi han hele tiden kalte haien for en hval, 3) Fordi han gikk ut med nazistiske synspunkter i media, 4) Fordi han hadde løyet på CV-en)",
        answer: "Fordi han hele tiden kalte haien for en hval",
    },
    {
        question:
            "Hva laget lyden av tornadoene i filmen «Twister»? (Alternativer: 1) En kamel som stønnet, 2) En ekte tornado, 3) 20 personer som pustet det de kunne, 4) En hårføner)",
        answer: "En kamel som stønnet",
    },
    {
        question:
            "Hva er den grønne mystiske koden man ser i filmen «Matrix»? (Alternativer: 1) Regissørens dagbok, 2) En kode ingen menneske noensinne har løst, 3) Avslutningen av filmen blir avslørt i hver kode, 4) Sushi-oppskrift)",
        answer: "Sushi-oppskrift",
    },
    {
        question:
            "Hvilken form har iskrem? (Alternativer: 1) Væske, 2) Gass, 3) Solid, 4) Alle de nevnte)",
        answer: "Alle de nevnte",
    },
    {
        question:
            "Hvor er Neil Armstrong sine støvler fra romferden? (Alternativer: 1) Hjemme i gangen hans, 2) De flyr rundt i rommet, 3) De er på et museum, 4) De ble gitt til fotballspilleren Wayne Rooney)",
        answer: "De flyr rundt i rommet",
    },
    {
        question:
            "Hvor lenge hadde mennesker sauer – før de tenkte på å bruke ullen? (Alternativer: 1) 7000 år, 2) 50 år, 3) 400 år, 4) 1000 år)",
        answer: "7000 år",
    },
    {
        question:
            "Hvilket av disse symbolene er mest kjent i verden? (Alternativer: 1) Det kristne korset, 2) McDonald’s-symbolet, 3) Det svenske flagget, 4) Nødutgang-symbolet)",
        answer: "McDonald’s-symbolet",
    },
    {
        question:
            "Hva er mellomnavnet til Voldemort i de franske bøkene om Harry Potter? (Alternativer: 1) Trollmann, 2) Døden, 3) Elvis, 4) Lykke)",
        answer: "Elvis",
    },
    {
        question:
            "Hvor mange måter kan man knyte et slips på? (Alternativer: 1) 10, 2) 70, 3) 234, 4) 177,147)",
        answer: "177,147",
    },
    {
        question:
            "Hvor mange biler av merket Rolls-Royce eide Lenin? (Alternativer: 1) 9, 2) Ingen, 3) 1, 4) 100)",
        answer: "9",
    },
    {
        question:
            "Hva er medianinntekten til en nyutdannet sivilingeniør i Norge innenfor privat sektor? (Alternativer: 1) 600 000, 2) 700 000, 3) 800 000, 4) 900 000)",
        answer: "700 000",
    },
];
