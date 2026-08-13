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
];

export default projects;
