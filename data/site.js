/* =====================================================================
   DATA/SITE.JS — RÉGLAGES, CV, TEXTES FR/EN, MENTIONS LÉGALES
   1. SITE  : nom, e-mail, LinkedIn, images
   2. CV    : expériences, éducation, compétences
   3. I18N  : tous les textes du site (français / anglais)
   4. LEGAL : mentions légales
   ===================================================================== */

/* ---------- 1. RÉGLAGES ---------- */
const SITE = {
  name: "Alyssia BERSET",                       // titre de l'accueil
  email: "alyssiaberset@gmail.com",
  linkedin: "https://www.linkedin.com/in/alyssia-berset-413639251/",
  portrait: "assets/profilpic.jpeg"           // photo format portrait
};

/* ---------- 2. CV ----------
   Dates : "AAAA-MM" (mois précis) ou "AAAA" (année seule).
   projects : liste d'id de projets (voir projects.js) → liens vers leur fiche. */
const CV = {
  experience: [
    { start: "2025-12", end: "2026-06", title: { fr: "Projet documentaire", en: "Documentary project" }, projects: ["vivre-sans-les-chaebols"] },
    { start: "2025-09", end: "2025-12", title: { fr: "Court-métrage", en: "Short film" }, projects: ["le-langage-des-autres"] },
    { start: "2025-11", end: "2025-11", title: { fr: "Courts-métrages", en: "Short films" }, projects: ["rewind-to-you", "passing-breeze"] },
    { start: "2025-03", end: "2025-04",
      title: { fr: "Stage au BISFF (Busan International Short Film Festival)", en: "Internship at BISFF (Busan International Short Film Festival)" },
      text: { fr: "Monteuse vidéo et membre du jury.", en: "Video editor and jury member." } },
    { start: "2024-12", end: "2025-06", title: { fr: "Projet documentaire", en: "Documentary project" }, projects: ["les-glaneurs-de-carton"] }
  ],
  education: [
    { start: "2024", end: "2026",
      title: { fr: "Master Cultures et Métiers du web", en: "Master's in Web Cultures and Professions" },
      text: { fr: "Université Gustave Eiffel", en: "Gustave Eiffel University" } },
    { start: "2025", end: "2026",
      title: { fr: "Master Cinema and Audiovisual Content", en: "Master's in Cinema and Audiovisual Content" },
      text: { fr: "Université Dong-Eui", en: "Dong-Eui University" } },
    { start: "2023", end: "2024", title: { fr: "Bachelor Webmarketing & Social Media", en: "Bachelor's in Webmarketing & Social Media" }, text: { fr: "MyDigitalSchool", en: "MyDigitalSchool" } },
    { start: "2020", end: "2023", title: { fr: "Licence de psychologie", en: "Bachelor's in Psychology" }, text: { fr: "Université Paris 8", en: "Paris 8 University" } },
    { start: "2017", end: "2020", title: { fr: "Baccalauréat L, spé anglais, option cinéma", en: "Literary baccalauréat, English spe, cinema option" }, text: { fr: "Lycée André Malraux", en: "Lycée André Malraux" } }
  ],
  skills: [
    { title: { fr: "Montage vidéo", en: "Video editing" }, text: { fr: "Premiere Pro, DaVinci Resolve, CapCut.", en: "Premiere Pro, DaVinci Resolve, CapCut." } },
    { title: { fr: "Prise de vue et cadrage", en: "Shooting and framing" }, text: { fr: "Maîtrise des caméras professionnelles, des optiques et de la composition de l'image.", en: "Command of professional cameras, lenses and image composition." } },
    { title: { fr: "Qualités artistiques et éditoriales", en: "Artistic and editorial skills" }, text: { fr: "Vision globale d'un projet : anticipation des raccords, des valeurs de plans et du rythme pour le futur montage dès le tournage.", en: "Overall project vision: anticipating cuts, shot values and rhythm for the edit from the shoot onwards." } },
    { title: { fr: "Langues", en: "Languages" }, text: { fr: "Français natif, anglais bilingue, coréen conversationnel.", en: "Native French, bilingual English, conversational Korean." } },
    { title: { fr: "Soft skills", en: "Soft skills" }, text: { fr: "Aisance relationnelle, résistance au stress, adaptabilité, réactivité et créativité face aux imprévus.", en: "Interpersonal ease, stress resilience, adaptability, reactivity and creativity when facing the unexpected." } }
  ]
};

/* ---------- 3. TEXTES (français / anglais) ---------- */
const I18N = {
  fr: {
    title: "PORTFOLIO DE PROJETS VIDÉOS", skip: "Aller au contenu",
    nav_label: "Navigation principale", nav_home: "Accueil", nav_projects: "Projets", nav_about: "À propos", nav_contact: "Me contacter",
    lang_label: "Choix de la langue",
    hero_sub: "PORTFOLIO DE PROJETS VIDÉOS", hero_cta: "voir mes projets",
    proj_title: "Mes Projets", proj_sub: "Cliquez pour découvrir les projets",
    filter_label: "Filtrer par catégorie", sort_label: "Trier par", sort_date: "Date", sort_relevance: "Pertinence", sort_alpha: "Ordre alphabétique",
    cat_documentary: "Documentaire", cat_fiction: "Fiction", cat_vlog: "Vlogs", cat_other: "Autres",
    carousel_label: "Catalogue de projets (flèches gauche et droite du clavier pour défiler)", prev: "Projets précédents", next: "Projets suivants",
    go_to: "Aller au projet", showing: "Projets affichés", of: "sur", no_result: "Aucun projet dans cette catégorie.",
    role: "Mon rôle", more: "Voir plus", close: "Fermer",
    about_title: "À propos de moi",
    about_text: "Quand j'avais 12 ans, mes amis et moi avions créer une série de vidéo appelée "Super Job", dans laquelle nous nous mettions en scène dans un enchainement de sketch. Une dizaine d'année plus tard, je peux passer des heures devant ma timeline Premiere Pro ou à brainstormer des idées (et j'ai appris à faire le backup de mes rushs—adieu Super Job…). Basée en Île-de-France.",
    mail: "M'écrire un e-mail", linkedin: "Mon profil LinkedIn", portrait_alt: "Portrait",
    cv_label: "Mon CV", cv_experience: "Expériences", cv_education: "Éducation", cv_skills: "Compétences", date_sep: "à",
    footer_contact: "Me contacter", legal: "Mentions légales", legal_title: "Mentions légales"
  },
  en: {
    title: "VIDEO PROJECT PORTFOLIO", skip: "Skip to content",
    nav_label: "Main navigation", nav_home: "Home", nav_projects: "Projects", nav_about: "About", nav_contact: "Contact me",
    lang_label: "Language selection",
    hero_sub: "VIDEO PROJECT PORTFOLIO", hero_cta: "See my projects",
    proj_title: "My Projects", proj_sub: "Click to discover the projects",
    filter_label: "Filter by category", sort_label: "Sort by", sort_date: "Date", sort_relevance: "Relevance", sort_alpha: "Alphabetical order",
    cat_documentary: "Documentary", cat_fiction: "Fiction", cat_vlog: "Vlogs", cat_other: "Other",
    carousel_label: "Project catalogue (use left and right arrow keys to scroll)", prev: "Previous projects", next: "Next projects",
    go_to: "Go to project", showing: "Projects shown", of: "of", no_result: "No project in this category.",
    role: "My role", more: "Learn more", close: "Close",
    about_title: "About me",
    about_text: "When I was 12, my friends and I created a video series called Super Job, in which we starred in a series of sketches. About ten years later, I can spend hours on my Premiere Pro timeline or brainstorming ideas (and I’ve learned to back up my footage—goodbye, Super Job…). Based in Île-de-France.",
    mail: "Send me an email", linkedin: "My LinkedIn profile", portrait_alt: "Portrait",
    cv_label: "My CV", cv_experience: "Experience", cv_education: "Education", cv_skills: "Skills", date_sep: "to",
    footer_contact: "Contact me", legal: "Legal notice", legal_title: "Legal notice"
  }
};

/* ---------- 4. MENTIONS LÉGALES (à compléter entre crochets) ---------- */
const LEGAL = {
  fr: `
    <h3>Éditeur du site</h3>
    <p>Site édité à titre personnel par Alyssia BERSET, particulier. Contact : <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
    <h3>Propriété intellectuelle</h3>
    <p>Les vidéos, images, textes et éléments graphiques présentés sont protégés par le Code de la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite. Les projets collectifs restent la propriété de leurs ayants droit respectifs.</p>
    <h3>Données personnelles et cookies</h3>
    <p>Ce site ne collecte aucune donnée personnelle et n'utilise aucun cookie de suivi ni outil de mesure d'audience. Seul votre choix de langue est conservé localement dans votre navigateur. Si vous m'écrivez par e-mail, votre adresse n'est utilisée que pour vous répondre. Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en m'écrivant à l'adresse ci-dessus. La lecture de vidéos hébergées par des plateformes tierces (YouTube, Vimeo) peut déposer des cookies soumis à leurs propres politiques.</p>
    <h3>Responsabilité et liens externes</h3>
    <p>Je m'efforce de fournir des informations exactes mais ne peux garantir leur exhaustivité. Je ne suis pas responsable du contenu des sites externes vers lesquels ce site renvoie.</p>
    <h3>Droit applicable</h3>
    <p>Le présent site est soumis au droit français.</p>`,
  en: `
    <h3>Publisher</h3>
    <p>Site published in a personal capacity by Alyssia BERSET, an individual. Contact: <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
    <h3>Intellectual property</h3>
    <p>Videos, images, texts and graphics shown on this site are protected by intellectual property law. Any total or partial reproduction without prior written permission is prohibited. Collective projects remain the property of their respective rights holders.</p>
    <h3>Personal data and cookies</h3>
    <p>This site collects no personal data and uses no tracking cookies or analytics. Only your language choice is stored locally in your browser. If you email me, your address is used only to reply. Under the GDPR you may request access to, correction or deletion of your data by writing to the address above. Videos hosted by third-party platforms (YouTube, Vimeo) may set cookies governed by their own policies.</p>
    <h3>Liability and external links</h3>
    <p>I strive to provide accurate information but cannot guarantee it is exhaustive. I am not responsible for the content of external websites linked from this site.</p>
    <h3>Governing law</h3>
    <p>This site is governed by French law.</p>`
};
