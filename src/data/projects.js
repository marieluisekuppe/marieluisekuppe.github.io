const projects = [
  {
    slug: "webapp_2gather",
    title: "2GATHER",
    year: "2026",
    summary: "Udvikling af webapplikation fra idé til fungerende prototype.",
    description:
      "Web Application: 2GATHER er en event app, hvis formål er, at gøre det nemmere for brugere at opdage og finde lokale aktiviteter og events, da alt det er samlet et sted; nemlig i 2GATHER.",
    tags: ["Koncept udvikling", "CRUD", "React"],
    collaboration: ["3 personer"],
    role: ["User Research"],
    duration: ["10 uger"],
    image: `${import.meta.env.BASE_URL}2gather.png`,
    links: [
      {
        label: "Live Site",
        href: "https://marieluisekuppe.github.io/web-app-2gather/home",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/marieluisekuppe/web-app-2gather",
      },
    ],
  },

  {
    slug: "customer_experience_control",
    title: "CTRL",
    year: "2026",
    summary: "Design og udvikling af en webshop til en fiktiv tøj-retailer.",
    description:
      "Webshop & Brand Experience: Formålet med projektet var at designe og udvikle en digital løsning, der afspejler CTRLs brandidentitet og skaber en sammenhængende brugeroplevelse. Gennem målgruppeanalyse, segmentering, Value Proposition Canvas og desk research blev brugernes behov og præferencer afdækket. På baggrund af indsigterne blev der udviklet en brandidentitet og en interaktiv prototype i Figma, som efterfølgende blev implementeret i React med fokus på at omsætte design og brugeroplevelse til en funktionel digital løsning.",
    tags: ["Visuel identity", "React", "Vite"],
    collaboration: ["5 personer"],
    role: ["User Research"],
    duration: ["10 uger"],

    image: `${import.meta.env.BASE_URL}ctrl_mockup.png`,
    links: [
      {
        label: "Live Site",
        href: "https://kubraf96.github.io/customer-experience-exam-trial/",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/Kubraf96/customer-experience-exam-trial",
      },
    ],
    story: {
      challenge:
        "CTRL havde et behov for en stærkere og mere konsistent brandoplevelse, så målgruppen kunne forstå virksomheden og føle tilknytning til den visuelle identitet.",
      challenge2:
        "Udfordringen lå i at skabe en tydelig retning for brandet, der kunne bruges i både visuelle kampagner og digital kommunikation uden at miste klarhed.",
      solution:
        "Jeg udviklede et system, der løftede brandets visuelle identitet gennem mere bevidste farvevalg, typografi og et mere fokuseret udtryk.",
      solution2:
        "Det gjorde virksomheden mere genkendelig, mere moderne og mere troværdig i mødet med kunderne.",
      processTitle: "Fra brandanalyse til identitetsdesign",
      processParagraph:
        "Jeg arbejdede iterativt med brugerforståelse, brandpositionering og visuelle koncepter for at finde den mest gældende løsning for CTRL.",
      cards: [
        {
          number: "01",
          title: "Analyse",
          text: "Jeg undersøgte målgruppen og brandets tone for at skabe en identitet, der passede til den ønskede oplevelse.",
        },
        {
          number: "02",
          title: "Koncept",
          text: "Derefter udviklede jeg et konsistent designsystem, der kunne bruges i både web og sociale medier.",
        },
        {
          number: "03",
          title: "Refining",
          text: "Til sidst finjusterede jeg detaljerne for at sikre, at brandet føltes mere sammenhængende og professionelt.",
        },
      ],
      optimizationTitle: "Tydelig identitet skaber genkendelighed",
      optimizationParagraph1:
        "Det vigtigste var at skabe en mere klar og stærk visuel fortællling, så virksomheden kunne skille sig ud i et uoverskueligt marked.",
      optimizationParagraph2:
        "Designet blev mere fokuseret og konsekvent, hvilket gjorde det lettere for kunderne at forstå brandets værdi og udtryk.",
      reflectionTitle: "Et brand skal kunne fortælle sin historie hurtigt",
      reflectionParagraph1:
        "CTRL viste, hvor vigtigt det er, at et brand har et tydeligt visuelt sprog, der hurtigt kan oversættes til forskellige medier. Når identiteten er tydelig og målrettet, bliver den både lettere at genkende, lettere at bruge og mere meningsfuld for målgruppen.",
      checklist: ["Målgruppestyring", "Brandtone", "Visuel struktur"],
    },
  },

  {
    slug: "ixd_spilcafeen",
    title: "SPILCAFEÉN",
    year: "2025",
    summary:
      "Redesign af spilleoversigten til Spilcaféen samt design af detaljeside.",
    description:
      "Arbejdet bestod i, at vi i grupper skulle designe og udvikle en mobiltilpasset ny spiloversigt samt detaljeside i Figma med filtreringsmuligheder samt detaljeside til Spilcaféen.dk. Derefter skulle vi kode løsningen i HTML, CSS og JavaScript, hvor spillelisten og dens data blev hentet fra en ekstern JSON‑fil.",
    tags: ["Design", "Frontend", "Proces"],
    collaboration: ["Individuelt"],
    role: ["Ikke angivet"],
    duration: ["10 uger"],

    image: `${import.meta.env.BASE_URL}spilcafeen_mockup.png`,
    links: [
      {
        label: "Live Site",
        href: "https://marieluisekuppe.github.io/ixd_eksamen_spilcafe/",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/marieluisekuppe/ixd_eksamen_spilcafe",
      },
    ],
  },

  {
    slug: "Mellemrum",
    title: "MELLEMRUM",
    year: "2026",
    summary: "Redesign af fiktiv website til Mellemrum.",
    description:
      "Opgaven handler om at videreudvikle Mellemrums eventplatform ved at forbedre brugeroplevelsen, optimere den tekniske løsning og færdiggøre tilmeldingsflowet mellem events og brugere.",
    tags: ["Teknisk-Audit", "Supabase", "React"],
    collaboration: ["Individuelt"],
    role: ["Optimering", "Struktur", "Database"],
    duration: ["2 uger"],

    image: `${import.meta.env.BASE_URL}portfolio-mellemrum/favicon.svg`,
    links: [
      {
        label: "GitHub Pages",
        href: "https://marieluisekuppe.github.io/mellemrum/",
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/marieluisekuppe/mellemrum",
      },
      {
        label: "Teknisk Audit",
        href: `${import.meta.env.BASE_URL}portfolio-mellemrum/teknisk_audit_kuppe.pdf`,
      },
    ],
    caseSections: [
      {
        heading: "Undersøgelse og prioritet",
        paragraphs: [
          "Som man siger, man er aldrig rigtig færdig med at kode... i dette tilfælde er det heller ingen undtagelse. Derfor har jeg udvalgt to centrale områder at arbejde videre med.",
        ],
        subheading: "2 centrale områder til forbedring",
        issueCards: [
          {
            number: "01",
            title: "Tilmeldningsflow",
            description:
              "Tilmelding fungerer ikke, fordi ingen data bliver sendt til Supabase.",
          },
          {
            number: "02",
            title: "Feedback",
            description:
              "Brugerne får ingen respons på at man fx har tilmeldt sig et event eller indtastet noget forkert.",
          },
        ],
      },
      {
        heading: "Optimering",
        paragraphs: [],
        items: [
          {
            heading: "1. Optimering af Tilmeldningsflow",
            paragraphs: [
              "En af opgaverne i casen var at færdiggøre tilmeldingsflowet på platformen. Tidligere kunne brugerne ikke tilmelde sig events direkte gennem løsningen, hvilket skabte usikkerhed om deres deltagelse. Derfor implementerede jeg et tilmeldingsflow, der registrerer tilmeldinger i Supabase og forbinder den enkelte deltager med det valgte event. Derudover tilføjede jeg en tydelig succesbesked, så brugerne får klar feedback, når deres tilmelding er gennemført.",
            ],
            comparison: {
              before: {
                src: `${import.meta.env.BASE_URL}portfolio-mellemrum/tilmelding_ingen_bekræftelse.mp4`,
                alt: "Mellemrum tilmelding før",
                type: "video",
              },
              after: {
                src: `${import.meta.env.BASE_URL}portfolio-mellemrum/tilmeldings_bekræftelse.mp4`,
                alt: "Mellemrum tilmelding efter",
                type: "video",
              },
            },
          },
          {
            heading: "2. Mere feedback ved actions",
            paragraphs: [
              "Det er vigtigt, at brugerne får tydelig feedback, hvis noget er udfyldt forkert. Hvis der for eksempel indtastes en ugyldig e-mailadresse, viser systemet en konkret fejlbesked, der gør det klart, hvad der skal rettes. Tidligere fik brugerne kun begrænset feedback i tilmeldingsformularen, hvilket gjorde det svært at gennemskue, hvilke felter der manglede eller indeholdt fejl. Derfor implementerede jeg tydelige fejlbeskeder og validering af inputfelter, så brugerne hurtigt kan forstå og rette eventuelle fejl.",
            ],
            errorImage: [
              {
                src: `${import.meta.env.BASE_URL}portfolio-mellemrum/fejl_besked.png`,
                alt: "Screenshot af en fejlbesked ved forkert intastet email",
              },
            ],
          },
        ],
      },
      {
        heading: "Næste skridt?",
        paragraphs: [
          "Selvom nogle funktioner er blevet implementeret, er der fortsat områder, hvor platformen sagtens kan forbedres:",
          "1) Sidefokus og navigation: Når brugerne skifter mellem sider, bevares deres tidligere scroll-position. Det kan skabe forvirring, da de ikke automatisk starter øverst på den nye side.",
          "2) Fejlhåndtering: Ved fejl vises der i dag ikke tydelige beskeder til brugeren. Mere informative fejlmeddelelser kan hjælpe brugerne med at forstå, hvad der er gået galt, og hvordan problemet kan løses.",
          "3) Loading states: Ved langsom internetforbindelse vises der ingen indikation af, at siden indlæses. Tilføjelse af loading-animationer eller skeletvisninger vil skabe en mere tryg og forståelig brugeroplevelse.,",
          "4) Tilgængelighed: Farvekontraster kan forbedres for at øge læsbarheden, og flere elementer kan optimeres til skærmlæsere gennem tydeligere labels og beskrivelser. Dette vil gøre platformen mere tilgængelig for alle brugere.",
        ],
      },
    ],
  },
  {
    slug: "Vuuh",
    title: "VUUH",
    year: "2026",
    summary: "Redesign af Onboarding til Vuuh.",
    description:
      "Vuuh ønskede at skabe en mere problemfri selvbetjeningsoplevelse for nye brugere, der opretter en konto og konfigurerer platformen. Målet var at sikre, at brugerne kunne gennemføre onboarding-processen selvstændigt uden behov for support.",
    tags: ["UX-Audit", "Onboarding", "Figma"],
    collaboration: ["4 personer"],
    role: ["Optimering"],
    duration: ["2 uger"],

    image: `${import.meta.env.BASE_URL}vuuh/vuuh_logo1.svg`,
    links: [
      {
        label: "Se løsning",
        href: "https://www.figma.com/proto/MeZ6V3TVoAOar2gzLS52rb/Case-2---Vuuh?node-id=187-1116&t=Ly4cCxXbtYRwrQnA-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=187%3A1116&page-id=102%3A2439",
      },
      {
        label: "UX-audit (PDF)",
        href: `${import.meta.env.BASE_URL}vuuh/case2_vuuh_ux_audit.pdf`,
      },
    ],
    caseSections: [
      {
        heading: "Undersøgelse og prioritering",
        paragraphs: [
          "Mange brugere falder fra tidligt i deres rejse på Vuuh, fordi onboardingforløbet opleves som komplekst og uoverskueligt. Gennem en UX-audit analyserede vi den eksisterende onboarding og identificerede fire centrale udfordringer, der påvirkede brugeroplevelsen.",
        ],
        subheading: "De 4 centrale udfordringer",
        issueCards: [
          {
            number: "01",
            title: "Opsætning af test ordre",
            description:
              "Brugerne blev ikke guidet til at gennemføre en testordre, hvilket skabte usikkerhed om, hvorvidt opsætningen var fuldført korrekt.",
          },
          {
            number: "02",
            title: "Success-side",
            description: "Brugerne manglede tydelig guidance til næste step.",
          },
          {
            number: "03",
            title: "Uklar næste skridt efter udfyldelse af formularen.",
            description:
              "Brugeren blev sendt til en succes-side uden tydelig vejledning om næste trin.",
          },
          {
            number: "04",
            title: "Connect to Shopify",
            description: "Kompleks navigation at forbinde med Shopify.",
          },
        ],
      },
      {
        heading: "Optimering",
        paragraphs: [],
        items: [
          {
            heading: "1. Optimering af succes-siden",
            paragraphs: [
              "Undersøgelsen viste, at brugerne blev efterladt på en succes-side uden tydelige instruktioner.",
              "For at løse dette blev succes-siden redesignet med fokus på tydelig handling og feedback:",
            ],
            comparison: {
              before: {
                src: `${import.meta.env.BASE_URL}vuuh/succes_gammel.png`,
                alt: "Vuuhs succes-side før redesign",
              },
              after: {
                src: `${import.meta.env.BASE_URL}vuuh/succes_ny.png`,
                alt: "Vuuhs redesignede succes-side",
              },
            },
          },
          {
            heading: "2. Connect to Shopify",
            paragraphs: [
              'Vuuhs løsning sender brugeren videre til en side med unødvendige valgmuligheder efter klik på "Connect to Shopify". Dette skaber usikkerhed og øger risikoen for frafald.',
              "Flowet blev derfor forenklet, så brugeren sendes direkte til den relevante formular. Resultatet er en mere intuitiv onboarding med færre klik og et tydeligere fokus på den næste handling.",
            ],
          },
          {
            heading: "3. Uklare næste skridt efter udfyldelse af formularen",
            paragraphs: [
              'Knappen "Start Free Trial" i Vuuhs løsning gav indtryk af, at brugeren havde gennemført hele processen. Efterfølgende blev brugeren dog sendt til en tom succes-side uden vejledning, hvilket skabte usikkerhed om den næste handling.',
            ],
            onboardingImages: [
              {
                src: `${import.meta.env.BASE_URL}vuuh/vuuh_formular1.png`,
                alt: "Screenshot af Vuuh onboarding trin 1",
              },
              {
                src: `${import.meta.env.BASE_URL}vuuh/vuuh_formular2.png`,
                alt: "Screenshot af Vuuh onboarding trin 2",
              },
              {
                src: `${import.meta.env.BASE_URL}vuuh/vuuh_formular3.png`,
                alt: "Screenshot af Vuuh onboarding trin 3",
              },
            ],
            followupParagraphs: [
              "For at skabe et mere sammenhængende flow blev onboarding-processen redesignet ud fra Guided Steps-princippet:",
            ],
            optimizationImages: [
              {
                src: `${import.meta.env.BASE_URL}vuuh/vuuh_formular1.1.png`,
                alt: "Optimeret Vuuh onboarding med tydelig næste handling",
                point:
                  "Tydelig information om den næste handling efter formularindsendelse.",
              },
              {
                src: `${import.meta.env.BASE_URL}vuuh/vuuh_formular2.2.png`,
                alt: "Optimeret Vuuh onboarding med CTA til næste trin",
                point: "En CTA, der leder brugeren videre til næste trin.",
              },
              {
                src: `${import.meta.env.BASE_URL}vuuh/vuuh_formular3.3.png`,
                alt: "Optimeret Vuuh onboarding med bekræftelses-overlay",
                point:
                  "Et enkelt bekræftelses-overlay i stedet for endnu en kompleks side.",
              },
            ],
          },
          {
            heading: "4. Opsætning af en testordre",
            paragraphs: [
              "Analysen viste, at brugerne ikke blev guidet til at gennemføre den nødvendige testordre, hvilket skabte usikkerhed om, hvorvidt systemet var korrekt opsat. Derfor designede vi et wizard-baseret onboarding-flow, der guider brugeren gennem processen og sikrer en tydelig succesoplevelse.",
            ],
            points: [
              "Hvert trin forklares enkelt og konkret.",
              'Brugeren guides videre via "GOT IT!"-handlinger.',
              "Irrelevante informationer skjules, så fokus fastholdes på den aktuelle opgave.",
              "En loading-tilstand skaber tryghed og forklarer, at der kun er tale om en testordre.",
              'Flowet afsluttes med en tydelig succesbesked: "Order Successfully Downloaded".',
            ],
            video: {
              src: `${import.meta.env.BASE_URL}vuuh/test_ordre_vuuh_video.mp4`,
              alt: "Video af det optimerede Vuuh-testordreflow",
            },
          },
        ],
      },
      {
        heading: "Resultater",
        paragraphs: [
          "De foreslåede forbedringer skal bidrage til et mere sammenhængende onboarding-flow, hvor brugeren guides gennem opsætningen trin for trin. Ved at eliminere standstill-situationer og tilføre tydelige call-to-actions bliver brugerrejsen mere selvforklarende.",
        ],
        subheading: "De primære forbedringer er:",
        issueCards: [
          {
            number: "01",
            title: "Færre unødvendige klik og sideskift",
          },
          {
            number: "02",
            title: "Klar kommunikation om næste handling",
          },
          {
            number: "03",
            title: "Tydelig feedback efter gennemførte handlinger",
          },
          {
            number: "04",
            title:
              "En onboarding-process, der i højere grad kan gennemføres uden support",
          },
        ],
      },
      {
        heading: "Faglig refleksion",
        paragraphs: [
          "Projektet viste, hvor stor betydning selv små UX-barrierer kan have for både brugeroplevelsen og forretningen. Et centralt valg var at fokusere på forenkling frem for flere funktioner, så brugeren altid møder den rette information på det rette tidspunkt.",
        ],
      },
      {
        heading: "Forretningspotentiale",
        paragraphs: [
          "Ved at skabe en mere guidet onboardingoplevelse kan Vuuh reducere frafald, øge antallet af succesfulde opsætninger og gøre produktet mere selvbetjent. En tydeligere proces sikrer, at brugerne hurtigere opnår værdi og gennemfører alle nødvendige trin uden behov for support.",
        ],
      },
    ],
  },
  {
    slug: "RE RŌUGE",
    title: "RE ROUGE",
    year: "2026",
    summary: "Redesign af Secondhand side til La Rōuge.",
    description: [
      "LA RŌUGE ønskede et koncept for et selvstændigt re-commerce subbrand, der kunne forlænge tøjets levetid og understøtte en mere cirkulær købsoplevelse. Målet var at udvikle en digital platform med sin egen identitet og stemme, samtidig med at forbindelsen til LA RŌUGEs værdier om kvalitet, self-love og tidløst design blev bevaret.",
      "Resultatet blev RE RŌUGE - et secondhand-univers, hvor eksisterende LA RŌUGE-produkter får nyt liv hos nye ejere.",
    ],
    tags: ["Figma", "Prototyping"],
    collaboration: ["3 personer"],
    role: ["UX/UI Design", "Konceptudvikling", "Brandstrategi"],
    duration: ["2 uger"],

    image: `${import.meta.env.BASE_URL}rerouge/rerouge_label1.png`,
    links: [
      {
        label: "Se prototype",
        href: "https://www.figma.com/proto/NPfFnMTZQaMlIFLg7Qmzqq/RE-ROUGE?node-id=1296-2558&t=TUsgcydDlXm4zZXC-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1296%3A2558&show-proto-sidebar=1&page-id=44%3A47",
      },

      {
        label: "Branddeck",
        href: "https://www.figma.com/design/NPfFnMTZQaMlIFLg7Qmzqq/RE-ROUGE?node-id=1487-1323",
      },
    ],
    caseSections: [
      {
        heading: "Udfordring",
        paragraphs: [
          "Gennem en heuristisk evaluering af LA RŌUGEs eksisterende secondhand-løsning identificerede vi tre centrale udfordringer.",
        ],
        subheading: "De 3 centrale udfordringer",
        issueCards: [
          {
            number: "01",
            title: "Lav synlighed",
            description:
              "Secondhand-konceptet blev ikke aktivt promoveret, hvilket gjorde det svært for kunderne at opdage og forstå tilbuddet.",
          },
          {
            number: "02",
            title: "Friktion i salgsflowet",
            description:
              "Brugerne skulle have adgang til et ordrenummer eller en kvittering for at kunne indsende varer til videresalg, hvilket skabte unødige barrierer i processen.",
          },
          {
            number: "03",
            title: "Begrænset produktinformation",
            description:
              "Produkterne blev kun vist med originale billeder og generelle standbeskrivelser, hvilket gjorde det svært at vurdere den reelle stand.",
          },
        ],
      },
      {
        heading: "Målgruppe & strategi",
        paragraphs: [
          "Vi overvejede, om RE RŌUGE skulle henvende sig til en ny målgruppe eller bygge videre på LA RŌUGEs eksisterende kunder. Vi valgte at tage udgangspunkt i den nuværende målgruppe og i stedet øge kendskabet til secondhand-konceptet.",
          "Fokus var derfor at gøre videresalg attraktivt, kommunikere fordelene ved re-commerce tydeligt og skabe en enkel og overskuelig brugeroplevelse. Gennem både online- og offline-touchpoints arbejdede vi på at gøre kunderne opmærksomme på, at deres LA RŌUGE-produkter kan få nyt liv hos en ny ejer.",
          "Samtidig positionerede vi RE RŌUGE som Affordable Chic - en mulighed for at få adgang til LA RŌUGEs univers til en mere tilgængelig pris.",
        ],
      },
      {
        heading: "Designbeslutninger",
        designDecisions: [
          {
            title: "Designretning",
            paragraphs: [
              "Vi tog udgangspunkt i LA RŌUGEs eksisterende kommunikation, særligt den personlige, moderne og energiske tone på Instagram.",
              "Målet var ikke at skabe et nyt brand, men at videreføre LA RŌUGEs identitet og værdier i et secondhand-univers.",
            ],
            image: {
              src: `${import.meta.env.BASE_URL}rerouge/moodboard.png`,
              alt: "Moodboard for RE RŌUGEs visuelle retning",
            },
          },
          {
            title: "Farver",
            paragraphs: [
              "Farvepaletten bygger på LA RŌUGEs mørkerøde signaturfarve for at skabe genkendelighed. Varme jordtoner tilfører dybde og understøtter et moderne secondhand-univers.",
              "Den røde farve refererer til femininitet, kærlighed og self-love og skaber samtidig en tydelig forbindelse til LA RŌUGEs eksisterende brandunivers.",
            ],
            image: {
              src: `${import.meta.env.BASE_URL}rerouge/colorpalette.png`,
              alt: "RE RŌUGEs farvepalette med røde og varme neutrale farver",
            },
          },
          {
            title: "Logo",
            paragraphs: [
              "Navnet RE RŌUGE er inspireret af ordene re-use og rose og understøtter konceptets fokus på genbrug og cirkularitet.",
              "Rosen fungerer som metafor for re-commerce: Ligesom en rose kan blomstre igen, kan et stykke tøj få nyt liv hos en ny ejer.",
            ],
            image: {
              src: `${import.meta.env.BASE_URL}rerouge/rerouge_label1.png`,
              alt: "RE RŌUGE-logo på et mørkerødt tøjmærke",
              cover: true,
            },
          },
          {
            title: "Typografi",
            paragraphs: [
              "Tenor Sans bruges til brandets typografi, mens Albert Sans skaber et enkelt og læsbart udtryk i brødtekster. Merah Merona bruges som accentfont for at tilføre personlighed og understøtte LA RŌUGEs visuelle tone på Instagram.",
              "Sammen balancerer skrifttyperne elegance, læsbarhed og personlighed.",
            ],
            image: {
              src: `${import.meta.env.BASE_URL}rerouge/typografi.png`,
              alt: "Typografisk eksempel med Tenor Sans, Albert Sans og accenttypografi",
            },
          },
        ],
      },
      {
        heading: "Løsningen",
        optimizationItems: [
          {
            number: "1.",
            title: "Øget synlighed gennem markedsføring",
            introduction:
              "For at skabe større opmærksomhed omkring RE RŌUGE udviklede vi forslag til både offline- og online-markedsføring.",
            channels: [
              {
                title: "Flyer",
                paragraphs: [
                  "Vi designede en flyer, der kunne vedlægges onlineordrer og uddeles i fysiske butikker. Formålet var at introducere secondhand-konceptet og samtidig minde kunderne om muligheden for at videresælge deres tøj gennem platformen på et senere tidspunkt.",
                ],
                images: [
                  {
                    src: `${import.meta.env.BASE_URL}rerouge/flyer_forside.png`,
                    alt: "Forside af RE RŌUGE-flyer",
                  },
                  {
                    src: `${import.meta.env.BASE_URL}rerouge/flyer_bagside.png`,
                    alt: "Bagside af RE RŌUGE-flyer",
                  },
                ],
              },
              {
                title: "Instagram",
                paragraphs: [
                  "Derudover udviklede vi et Instagram-koncept, som skulle øge kendskabet til RE RŌUGE og kommunikere fordelene ved både køb og salg af secondhand-tøj.",
                ],
                images: [
                  {
                    src: `${import.meta.env.BASE_URL}rerouge/ig_post.png`,
                    alt: "Instagram-opslag for RE RŌUGE",
                    transparent: true,
                  },
                  {
                    src: `${import.meta.env.BASE_URL}rerouge/ig_profile.png`,
                    alt: "Instagram-profil med RE RŌUGEs visuelle indhold",
                    transparent: true,
                  },
                ],
              },
            ],
          },
          {
            number: "2.",
            title: "Et mere tilgængeligt trade-in flow",
            layout: "trade-in",
            paragraphs: [
              "For at reducere friktionen i salgsprocessen gjorde vi det muligt for brugerne at finde tidligere køb direkte via deres konto.",
              "Samtidig udviklede vi en alternativ løsning, hvor en AI-assistent kan identificere et produkt ud fra et billede, produktnavn eller artikelnummer.",
              "Løsningen reducerer barriererne for videresalg og gør processen mere tilgængelig for flere brugere.",
            ],
            video: {
              src: `${import.meta.env.BASE_URL}rerouge/product_finder.mp4`,
              alt: "Produktfinder til RE RŌUGEs trade-in-flow",
            },
          },
          {
            number: "3.",
            title: "En mere informativ produktpræsentation",
            paragraphs: [
              "For at skabe et mere retvisende billede af produkterne foreslog vi, at alle varer fotograferes ved modtagelse hos LA RŌUGE.",
              "Samtidig blev produktbeskrivelserne udvidet med konkrete oplysninger om fejl, brugsspor og mangler frem for kun generelle standkategorier.",
              "Det giver brugerne et bedre grundlag for at træffe et informeret valg og skaber større tryghed i købsoplevelsen.",
            ],
            images: [
              {
                src: `${import.meta.env.BASE_URL}rerouge/product_description1.png`,
                alt: "RE RŌUGE produkt beskrivelse",
              },
              {
                src: `${import.meta.env.BASE_URL}rerouge/product_description2.png`,
                alt: "RE RŌUGE produkt beskrivelse",
              },
            ],
          },
        ],
      },
      {
        heading: "Forretningspotentiale",
        paragraphs: [
          "RE RŌUGE skaber værdi for både LA RŌUGE og deres kunder. Konceptet styrker brandets position inden for cirkulær mode, øger kundeloyaliteten og holder produkterne i brandets univers længere. Samtidig får kunderne en enkel og tryg platform til køb og salg af brugt LA RŌUGE-tøj, hvilket bidrager til et mere ansvarligt forbrug og forlænger tøjets levetid.",
        ],
      },
    ],
  },
];

export default projects;
