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
        question: "Hva heter hjembyen til peter pan?",
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
            "I hvilket halvplan har et systems laplace omvending poler dersom systemet er ustabilt?",
        answer: "Høyre halvplan",
    },
    { question: "Hva betyr kubernetes", answer: "Han som styrer" },
    {
        question: "Hva heter personen bak youtubekanalen 3Blue1Brown?",
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
            "Hvilken egenskap må en væske ha for at man skal kunne måle strømningshastigheten i væsken med en Hall effekt sensor?",
        answer: "Den må inneholder ioner",
    },

    // Kjedelige musikkspørsmål
    {
        question:
            'Hva heter debutalbumet til Adele som inneholder sangen "Make you feel my love"?',
        answer: "19",
    },
    {
        question:
            'Hvilket Red Hot Chili Peppers-album, utgitt i 1999, inneholder hits som "Californication" og "Scar Tissue"?',
        answer: "Californication",
    },
    {
        question:
            "I 2009 så gikk Jay-Z sammen med en Soul-sanger for å lage sangen “Empire State of Mind”. Hvem var det?",
        answer: "Alicia Keys",
    },
    {
        question: "Hva var det Katy Perry kysset og likte det i 2008?",
        answer: "En jente",
    },
    { question: "Fullfør teksten… “If you wanna be…”", answer: "My lover" },
    {
        question:
            "Hvilken artist ble “Tiårets artist” i Rolling Stones Magasinet i 1999?",
        answer: "Kurt Cobain fra Nirvana",
    },
    {
        question:
            "Hvilken sang starter med: “Just a small town girl, livin’ in a lonely world”?",
        answer: "Don’t Stop Believin’",
    },
    {
        question:
            'Hvilken Beatles-sang starter med linjen "Yesterday, all my troubles seemed so far away"?',
        answer: "Yesterday",
    },
    {
        question: "Hvilket dop synger Eric Clapton om i hiten fra 1977?",
        answer: "Cocaine",
    },
    {
        question:
            'Hvilken artist er kjent for hitlåten "Shape of You" fra 2017?',
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
            'Hvilken kanadisk artist står bak hitlåten "Blinding Lights"?',
        answer: "The Weeknd",
    },
    {
        question:
            'Hva heter albumet til Taylor Swift som inneholder sangen "Blank Space"?',
        answer: "1989",
    },
    {
        question:
            'Hvilken rapper er kjent for å ha utgitt albumet "Damn" i 2017?',
        answer: "Kendrick Lamar",
    },

    // Fun-fact spørsmål (riktig svar valgt)
    {
        question: "Hva finner du på Henry Ford museum i Detroit?",
        answer: "Thomas Edison sitt siste pust",
    },
    {
        question: "Hva betyr ordet «idiot» opprinnelig?",
        answer: "En som ikke er politiker",
    },
    {
        question: "Hvor mange katter spiser asiater i året?",
        answer: "Omtrent 4 millioner",
    },
    {
        question: "Hvilket land er den største eksportøren av falske tenner?",
        answer: "Liechtenstein",
    },
    {
        question: "Hva slags mat kan man lage diamanter av?",
        answer: "Peanøttsmør",
    },
    { question: "Hva gjør betong sterkere?", answer: "Gulrøtter" },
    {
        question: "Hvem hadde ideen om å gjøre tennisballer gule?",
        answer: "David Attenborough",
    },
    {
        question: "Hvem av disse kom for seint til sin egen begravelse?",
        answer: "Elizabeth Taylor",
    },
    {
        question:
            "Hva skjedde med astronauten Scott Kelly etter 11 måneder i verdensrommet?",
        answer: "Han ble 13 millisekunder yngre enn sin tvillingbror",
    },
    {
        question:
            "Hvordan bestemmer Afrikanske ville hunder seg for om de skal jakte eller ikke?",
        answer: "Ved hjelp av nysing",
    },
    {
        question:
            "Hvorfor fikk den første regissøren av filmen haisommer sparken?",
        answer: "Fordi han hele tiden kalte haien for en hval",
    },
    {
        question: "Hva laget lyden av tornadoene i filmen «Twister»?",
        answer: "En kamel som stønnet",
    },
    {
        question: "Hva er den grønne mystiske koden man ser i filmen «Matrix»?",
        answer: "Sushi-oppskrift",
    },
    { question: "Hvilken form har iskrem?", answer: "Alle de nevnte" },
    {
        question: "Hvor er Neil Armstrong sine støvler fra romferden?",
        answer: "De flyr rundt i rommet",
    },
    {
        question:
            "Hvor lenge hadde mennesker sauer – før de tenkte på å bruke ullen?",
        answer: "7000 år",
    },
    {
        question: "Hvilket av disse symbolene er mest kjent i verden?",
        answer: "McDonald’s symbolet",
    },
    {
        question:
            "Hva er mellomnavnet til Voldemort i de franske bøkene om Harry Potter?",
        answer: "Elvis",
    },
    {
        question: "Hvor mange måter kan man knyte et slips på?",
        answer: "177,147",
    },
    {
        question: "Hvor mange biler av merket Rolls-Royce eide Lenin?",
        answer: "9",
    },
    {
        question:
            "Hva er medianinntekten til en nyutdannet sivilingeniør i Norge innenfor privat sektor?",
        answer: "700 000",
    },
];
