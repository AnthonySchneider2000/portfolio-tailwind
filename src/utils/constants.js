export const sidebarWidth = "7rem";

/////////////////////////////////////
//PORTFOLIO ITEMS

export const portfolioItems = {
  AGSFlix: {
    title: "AGSFlix",
    description: "Test",
    image: "Test",
    technologies: ["React", "MaterialUI", "Vercel"],
    link: "https://agsflix.vercel.app/",
    github: "https://github.com/AnthonySchneider2000/AGSFlix",
  },
  TrailTours: {
    title: "Trail Tours",
    description: "Test",
    image: "Test",
    technologies: ["React", "MaterialUI", "Vercel"],
    link: "https://trail-tours.vercel.app/",
    github:
      "https://github.com/AnthonySchneider2000/React-Material-UI-Trail-Tour-Web-App",
  },
  Playlist: {
    title: "Playlist",
    description: "Test",
    image: "Test",
    technologies: ["NextJS", "Vercel"],
    link: "https://youtube-playlist-manager-ags.vercel.app/",
    github:
      "https://github.com/AnthonySchneider2000/NextJS-YouTube-Playlist-Manager",
  },
  Portfolio: {
    title: "Portfolio",
    description: "Test",
    image: "Test",
    technologies: ["React", "TailwindCSS", "Vercel", "MaterialUI"],
    link: "is.gd/AnthonySchneiderPortfolio",
    github: "https://github.com/AnthonySchneider2000/portfolio-tailwind",
  },
};

export const technologies = {
  HTML: {
    title: "HTML",
    description:
      "A markup language for creating web pages and web applications.",
    image: "Test",
    types: ["Frontend", "Layout"],
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    requires: [],
  },
  CSS: {
    title: "CSS",
    description:
      "A style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    image: "Test",
    types: ["Frontend", "Styling"],
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    requires: [],
  },
  JavaScript: {
    title: "JavaScript",
    description:
      "A programming language that conforms to the ECMAScript specification.",
    image: "Test",
    types: ["Frontend", "Scripting"],
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    requires: [],
  },
  TypeScript: {
    title: "TypeScript",
    description:
      "An open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.",
    image: "Test",
    types: ["Frontend", "Scripting"],
    link: "https://www.typescriptlang.org/",
    requires: ["JavaScript"],
  },
  React: {
    title: "React",
    description: "A JavaScript library for building user interfaces",
    image: "Test",
    types: ["Frontend", "Layout", "Scripting"],
    link: "https://reactjs.org/",
    requires: ["JavaScript", "HTML", "CSS"],
  },
  Angular: {
    title: "Angular",
    description:
      "A TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
    image: "Test",
    types: ["Frontend", "Layout", "Scripting"],
    link: "https://angular.io/",
    requires: ["TypeScript", "HTML", "CSS"],
  },
  MaterialUI: {
    title: "Material UI",
    description: "React components for faster and easier web development.",
    image: "Test",
    types: ["Frontend", "Styling"],
    link: "https://material-ui.com/",
    requires: ["React"],
  },
  NextJS: {
    title: "NextJS",
    description: "The React Framework for Production",
    image: "Test",
    types: ["Backend", "Scripting"],
    link: "https://nextjs.org/",
    requires: ["React", "NodeJS"],
  },
  NodeJS: {
    title: "NodeJS",
    description:
      "An open-source, cross-platform, back-end JavaScript runtime environment.",
    image: "Test",
    types: ["Backend", "Scripting"],
    link: "https://nodejs.org/en/",
    requires: [],
  },
  TailwindCSS: {
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    image: "Test",
    types: ["Frontend", "Styling"],
    link: "https://tailwindcss.com/",
    requires: ["CSS"],
  },
  Vercel: {
    title: "Vercel",
    description: "A cloud platform for static sites and Serverless Functions",
    image: "Test",
    types: ["Deployment"],
    link: "https://vercel.com/",
    requires: [],
  },
  Django: {
    title: "Django",
    description:
      "A high-level Python Web framework that encourages rapid development and clean, pragmatic design.",
    image: "Test",
    types: ["Backend", "Scripting"],
    link: "https://www.djangoproject.com/",
    requires: ["Python"],
  },
  Python: {
    title: "Python",
    description:
      "An interpreted high-level general-purpose programming language.",
    image: "Test",
    types: ["Backend", "Scripting"],
    link: "https://www.python.org/",
    requires: [],
  },
  MongoDB: {
    title: "MongoDB",
    description:
      "A source-available cross-platform document-oriented database program.",
    image: "Test",
    types: ["Backend", "Database"],
    link: "https://www.mongodb.com/",
    requires: [],
  },
  MySQL: {
    title: "MySQL",
    description: "An open-source relational database management system.",
    image: "Test",
    types: ["Backend", "Database"],
    link: "https://www.mysql.com/",
    requires: [],
  },
  SQLite: {
    title: "SQLite",
    description:
      "A relational database management system contained in a C library.",
    image: "Test",
    types: ["Backend", "Database"],
    link: "https://www.sqlite.org/index.html",
    requires: [],
  },
  Git: {
    title: "Git",
    description:
      "A distributed version-control system for tracking changes in source code during software development.",
    image: "Test",
    types: ["Version Control"],
    link: "https://git-scm.com/",
    requires: [],
  },
  GitHub: {
    title: "GitHub",
    description:
      "A provider of Internet hosting for software development and version control using Git.",
    image: "Test",
    types: ["Version Control"],
    link: "https://github.com/",
    requires: ["Git"],
  },
  C: {
    title: "C",
    description:
      "A general-purpose, procedural computer programming language supporting structured programming.",
    image: "Test",
    types: ["Backend", "Scripting"],
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    requires: [],
  },
  "C++": {
    title: "C++",
    description:
      "A general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.",
    image: "Test",
    types: ["Backend", "Scripting"],
    link: "https://en.wikipedia.org/wiki/C%2B%2B",
    requires: [],
  },
  Java: {
    title: "Java",
    description:
      "A class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    image: "Test",
    types: ["Backend", "Scripting"],
    link: "https://www.java.com/en/",
    requires: [],
  },
  "C#": {
    title: "C#",
    description:
      "A general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.",
    image: "Test",
    types: ["Backend", "Scripting"],
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    requires: [],
  },
  Unity: {
    title: "Unity",
    description:
      "A cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.'s Worldwide Developers Conference as a Mac OS X-exclusive game engine.",
    image: "Test",
    types: ["Game Engine"],
    link: "https://unity.com/",
    requires: ["C#"],
  },
  Rust: {
    title: "Rust",
    description:
      "A multi-paradigm programming language designed for performance and safety, especially safe concurrency.",
    image: "Test",
    types: ["Backend", "Scripting"],
    link: "https://www.rust-lang.org/",
    requires: [],
  },
};

export const AGSFlix = portfolioItems.AGSFlix;
export const TrailTours = portfolioItems.TrailTours;
export const Playlist = portfolioItems.Playlist;
