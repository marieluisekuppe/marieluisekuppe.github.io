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
    description: "Beskrivelse her",
    tags: ["Design", "Frontend", "Proces"],
    collaboration: ["Individuelt"],
    role: ["Optimering"],
    duration: ["2 uger"],

    image: `${import.meta.env.BASE_URL}`,
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
    slug: "Vuuh",
    title: "VUUH",
    year: "2026",
    summary: "Redesign af Onboarding til Vuuh.",
    description:
      "Vuuh ønskede at skabe en mere problemfri selvbetjeningsoplevelse for nye brugere, der opretter en konto og konfigurerer platformen. Målet var at sikre, at brugerne kunne gennemføre onboarding-processen selvstændigt uden behov for support.",
    tags: ["UX-Audit", "Onboarding", "Figma"],
    collaboration: ["3 personer"],
    role: ["Optimering"],
    duration: ["2 uger"],

    image: `${import.meta.env.BASE_URL}vuuh/vuuh_logo.svg`,
    links: [
      {
        label: "Se løsning",
        href: "https://www.figma.com/proto/MeZ6V3TVoAOar2gzLS52rb/Case-2---Vuuh?node-id=187-1116&t=Ly4cCxXbtYRwrQnA-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=187%3A1116&page-id=102%3A2439",
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
              annotations: [
                "Brugerens shopnavn fremhæves for at skabe genkendelse og kontekst.",
                "Det tydeliggøres, at shoppen nu skal forbindes til Vuuh.",
                "En synlig CTA-knap leder brugeren direkte videre til Vuuh.",
              ],
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
              { src: "", alt: "Screenshot af Vuuh onboarding trin 1" },
              { src: "", alt: "Screenshot af Vuuh onboarding trin 2" },
              { src: "", alt: "Screenshot af Vuuh onboarding trin 3" },
            ],
            followupParagraphs: [
              "For at skabe et mere sammenhængende flow blev onboarding-processen redesignet ud fra Guided Steps-princippet:",
            ],
            optimizationImages: [
              {
                src: "",
                alt: "Optimeret Vuuh onboarding med tydelig næste handling",
                point:
                  "Tydelig information om den næste handling efter formularindsendelse.",
              },
              {
                src: "",
                alt: "Optimeret Vuuh onboarding med CTA til næste trin",
                point: "En CTA, der leder brugeren videre til næste trin.",
              },
              {
                src: "",
                alt: "Optimeret Vuuh onboarding med bekræftelses-overlay",
                point:
                  "Et enkelt bekræftelses-overlay i stedet for endnu en kompleks side.",
              },
            ],
          },
          {
            heading: "4. Opsætning af en testordre",
            paragraphs: [
              "Ved gennemgangen af Vuuhs løsning identificerede vi, at brugerne ikke blev vejledt til at gennemføre den nødvendige testordre. Uden denne handling kunne hverken brugeren eller Vuuh vide, om systemet var opsat korrekt. Brugeren opnåede derfor heller ikke en tydelig succesoplevelse.",
              "For at løse dette blev der introduceret et wizard-baseret onboarding-flow:",
            ],
            points: [
              "Hvert trin forklares enkelt og konkret.",
              'Brugeren guides videre via "GOT IT!"-handlinger.',
              "Irrelevante informationer skjules, så fokus fastholdes på den aktuelle opgave.",
              "En loading-tilstand skaber tryghed og forklarer, at der kun er tale om en testordre.",
              'Flowet afsluttes med en tydelig succesbesked: "Order Successfully Downloaded".',
            ],
            closingParagraphs: [
              "De guidede trin reducerer den kognitive belastning og gør processen lettere at gennemføre for brugere, der har behov for ekstra støtte og vejledning.",
            ],
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
    slug: "La Rōuge",
    title: "LA ROUGE",
    year: "2026",
    summary: "Redesign af Secondhand side til La Rōuge.",
    description: "Beskrivelse her",
    tags: ["Design", "Frontend", "Proces"],
    collaboration: ["3 personer"],
    role: ["Optimering"],
    duration: ["2 uger"],

    image: `${import.meta.env.BASE_URL}`,
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
];

export default projects;
