const projects = [
  {
    slug: "webapp_2gather",
    title: "2GATHER",
    year: "2026",
    summary: "Udvikling af webapplikation fra idé til fungerende prototype.",
    description:
      "Web Application: 2GATHER er en event app, hvis formål er, at gøre det nemmere for brugere at opdage og finde lokale aktiviteter og events, da alt det er samlet et sted; nemlig i 2GATHER.",
    tags: ["Koncept udvikling", "CRUD", "React"],
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
      "Webshop & Brand Experience: Formålet med projektet var at designe og udvikle en digital løsning, som afspejler brandets (CTRLs) identitet og skabe en sammenhængende brugeroplevelse for målgruppen. Projektet tager udgangspunkt i en målgruppeanalyse, hvor der blev anvendt segmentering, Value Proposition Canvas og desk research for at opnå en dybere forståelse af brugernes behov, adfærd og præferencer. På baggrund af disse indsigter blev der udviklet et brand med en tilhørende brandidentitet samt en interaktiv prototype i Figma. Prototypen blev efterfølgende implementeret i React med fokus på at omsætte det visuelle design og den ønskede brugeroplevelse til en funktionel digital løsning.",
    tags: ["Visuel identity", "React", "Vite"],
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
        "CTRL viste, hvor vigtigt det er, at et brand har et tydeligt visuelt sprog, der hurtigt kan oversættes til forskellige medier.",
      reflectionParagraph2:
        "Når identiteten er tydelig og målrettet, bliver den både lettere at genkende, lettere at bruge og mere meningsfuld for målgruppen.",
      checklist: [
        "Målgruppestyring",
        "Brandtone",
        "Visuel struktur",
        "Konsekvent kommunikation",
      ],
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
    description: "Beskrivelse her",
    tags: ["Design", "Frontend", "Proces"],
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
    slug: "La Rōuge",
    title: "LA ROUGE",
    year: "2026",
    summary: "Redesign af Secondhand side til La Rōuge.",
    description: "Beskrivelse her",
    tags: ["Design", "Frontend", "Proces"],
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
