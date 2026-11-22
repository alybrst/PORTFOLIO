/* =====================================================================
   DATA/PROJECTS.JS — LISTE DES PROJETS
   Pour ajouter un projet : copiez un bloc { ... } ci-dessous, collez-le
   à la suite (sans oublier la virgule) et modifiez les valeurs.
   Tout champ vide ou supprimé n'est simplement pas affiché.

   id          : identifiant unique, sans espace ni accent (obligatoire)
   category    : "documentary" | "fiction" | "vlog" | "other" (obligatoire)
   title       : { fr:"...", en:"..." }  titre affiché
   originalTitle : titre d'origine (sous-titre)
   year        : année de sortie (nombre)
   duration    : texte libre, ex. "26 min"
   description : { fr:"...", en:"..." }
   role        : { fr:"...", en:"..." }  mon rôle dans le projet
   link        : lien « En savoir plus » (s'ouvre dans un nouvel onglet)
   video       : lien YouTube / Vimeo, ou fichier .mp4 / .webm
   image       : vignette 16:9, ex. "assets/projets/mon-film.jpg"
                 (si vide : une vignette de remplacement est générée)
   relevance   : note de pertinence de 1 à 10 (invisible, sert au tri)
   ===================================================================== */
const PROJECTS = [

  /* ---------- DOCUMENTAIRE ---------- */
  {
    id: "vivre-sans-les-chaebols",
    category: "documentary",
    title: { fr: "Vivre sans les Chaebols", en: "Living Without the Chaebols" },
    originalTitle: "재벌 없이 살기",
    year: 2026,
    duration: "14'50''",
    description: {
      fr: "Est-ce possible de vivre sans les Chaebols en Corée du Sud ? Réalisé avec une équipe franco-coréenne dans le cadre d'un échange entre l'Université Gustave Eiffel et l'Université Dong-Eui, à Busan. Mon équipe et moi avons rencontré de nombreuses difficultés durant le tournage, mais nous avons su prendre le contre-pied de ces difficultés et en faire la force du documentaire, en lui donnant une esthétique marquée.",
      en: "Is it possible to live without Chaebols in South Korea ? Made with a French-Korean team as part of an exchange between Gustave Eiffel University and Dong-Eui University, in Busan. My team and I encountered many difficulties during the filming, but we were able to make it the strength of the documentary by leaning into those difficulties, giving it a marked aesthetic."
    },
    role: { fr: "Co-réalisatrice, monteuse, cheffe de projet, intervenante.", en: "Co-director, editor, project leader." },
    link: "https://vivresanschaebols.mastercmw.com/",
    video: "https://vimeo.com/1204627880?fl=pl&fe=cm",
    image: "assets/vslc_visuel10.png",
    relevance: 10
  },
  {
    id: "les-glaneurs-de-carton",
    category: "documentary",
    title: { fr: "Les glaneurs de carton", en: "The Cardboard Gleaners" },
    originalTitle: "폐지 줍는 사람들",
    year: 2025,
    duration: "29'40''",
    description: {
      fr: "Immersion auprès de ceux qui collectent le carton dans les rues de la Corée pour vivre. Ce projet fut mon premier pas dans le milieu du documentaire.",
      en: "An immersion with people who collect cardboard in the streets of Korea for a living. This project was my first step into the world of documentaries."
    },
    role: { fr: "Montage, sous-titrage et interprétation.", en: "Editing, subtitles and interpretation." },
    link: "https://glaneursdecarton.mastercmw.com/?lang=fr",
    video: "https://vimeo.com/1118628914?fl=pl&fe=cm",
    image: "assets/lgdc_visuel1.png",
    relevance: 5
  },

  /* ---------- FICTION ---------- */
  {
    id: "le-langage-des-autres",
    category: "fiction",
    title: { fr: "Le Langage des Autres", en: "The Language of Others" },
    originalTitle: "서로의 언어",
    year: 2025,
    duration: "11'54''",
    description: {
      fr: "Un court-métrage de fin d'étude dramatique qui explore la crainte d'être incompris, mais aussi de mal comprendre les autres, à travers des lunettes qui traduisent la langue des autres. Mon intention était de montrer comment surmonter les malentendus et les différences culturelles peut nous aider à voir le monde sous un nouveau jour. C'est mon premier court-métrage.",
      en: "A dramatic graduation short-film exploring the fear of being misunderstood, but also to misunderstand others, through glasses that translate other people’s languages. My intention was to show how working through miscommunication and cultural differences can help us see the world with a new perspective. It is my first short film."
    },
    role: { fr: "Réalisation, écriture, montage, étalonnage.", en: "Director, writer, editor, colour grading." },
    image: "assets/tloo_visuel2.png",
    link: "https://drive.google.com/drive/u/0/folders/1zE0CYF4jrsnhl4jyaLoHPH8OpkT-wQGg",
    relevance: 9
  },
  {
    id: "rewind-to-you",
    category: "fiction",
    title: { fr: "Rewind: to you", en: "Rewind: to you" },
    originalTitle: "다시: 너에게",
    year: 2025,
    duration: "11'44''",
    description: {
      fr: "Réalisé par Jaeden F. Duong, ce court-métrage dramatique explore le deuil d'une relation à travers un schéma narratif unique. Faire parti de ce court-métrage m'a permis d'apprendre à gérer les besoins d'un tournage de manière efficace.",
      en: "Directed by Jaeden F. Duong, this short-film explores the mourning of a relationship through a unique narrative. Being a part of this short-film taught me to manage the needs of a film shoot effectively." },
    role: { fr: "Assistante de production, cadrage, son.", en: "Production assitant, camera, sound." },
    image: "assets/rty_visuel1.png",
    link: "https://drive.google.com/file/d/1uZR0Fs45ZHTQunLDD5AdJhXOYXWQxy7T/view",
    relevance: 7
  },
  {
    id: "passing-breeze",
    category: "fiction",
    title: { fr: "Passing Breeze", en: "Passing Breeze" },
    originalTitle: "지나가는 바람",
    year: 2025,
    duration: "14'24''",
    description: {
      fr: "Réalisé par Pagnarith KOK SREY, ce court-métrage explore la relation courte mais intense entre Leo et Anna. Prendre part à ce court-métrage m'a beaucoup appris sur l'art du cadrage et l'attention aux détails.",
      en: "Directed by Pagnarith KOK SREY, this short film explores the short but intense relationship between Leo and Anna. Being part of this short-film taught me a lot about the art framing and the attention to details." },
    role: { fr: "Cadrage et interprète plateau", en: "Camera and language interpreting" },
    link: "https://www.youtube.com/watch?si=29zLH-pfnDe8bQUa&v=n4grNrG7Q38&feature=youtu.be",
    video: "https://www.youtube.com/embed/n4grNrG7Q38?si=aH7ZrnIrSmo8O6GN",
    image: "assets/pb_visuel2.png",
    relevance: 6
  },

  /* ---------- VLOG ---------- */
  {
    id: "master-diary-3",
    category: "vlog",
    title: { fr: "Un week-end à Séoul - Master Diary Ep 3", en: "A week-end in Seoul - Master Diary Ep 3" },
    year: 2026,
    duration: "11'56''",
    description: { fr: "Un vlog souvenir tourné pendant un week-end à Séoul avec des amis.", en: "A souvenir vlog filmed during a weekend in Seoul with friends." },
    role: { fr: "Tournage et montage.", en: "Filming and editing." },
    link: "https://www.youtube.com/watch?v=R0l7Hx1Xlig&t=101s",
    video: "https://www.youtube.com/watch?v=R0l7Hx1Xlig&t=101s",
    image: "assets/vlog_visuel2.png",
    relevance: 3,
  },

];
