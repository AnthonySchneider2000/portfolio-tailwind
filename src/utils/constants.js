import { Html5OriginalWordmark,
    Css3OriginalWordmark,
    JavascriptOriginal,
    TypescriptOriginal,
    ReactOriginalWordmark,
    AngularjsOriginal,
    MaterialuiOriginal,
    NextjsOriginalWordmark,
    NodejsOriginalWordmark,
    TailwindcssOriginalWordmark,
    DjangoPlain,
    PythonOriginalWordmark,
    MongodbOriginalWordmark,
    MysqlOriginalWordmark,
    SqliteOriginalWordmark,
    GitOriginalWordmark,
    GithubOriginalWordmark,
    COriginal,
    CplusplusOriginal,
    JavaOriginalWordmark,
    CsharpOriginal,
    UnityOriginalWordmark,
    RustPlain,

 } from "devicons-react";

 import VercelIcon from "components/VercelIcon";

export const sidebarWidth = "7rem";
/////////////////////////////////////
//PORTFOLIO ITEMS

export const types = {
    Layout: {
        title: "Layout",
        categories: ["Frontend"],
    },
    Styling: {
        title: "Styling",
        categories: ["Frontend"],
    },
    Scripting: {
        title: "Scripting",
        categories: ["Frontend", "Backend"],
    },
    Frontend: {
        title: "Frontend",
        categories: ["Frontend"],
    },
    Backend: {
        title: "Backend",
        categories: ["Backend"],
    },
    Database: {
        title: "Database",
        categories: ["Backend"],
    },
    Deployment: {
        title: "Deployment",
        categories: ["Deployment"],
    },
    VersionControl: {
        title: "Version Control",
        categories: ["Version Control"],
    },
    GameEngine: {
        title: "Game Engine",
        categories: ["Game Engine"],
    },
}


export const technologies = {
  HTML: {
    title: "HTML",
    description:
      "A markup language for creating web pages and web applications.",
    icon: <Html5OriginalWordmark />,
    types: types.Layout,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    //requires: [],
  },
  CSS: {
    title: "CSS",
    description:
      "A style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    icon: <Css3OriginalWordmark />,
    types: types.Styling,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    //requires: [],
  },
  JavaScript: {
    title: "JavaScript",
    description:
      "A programming language that conforms to the ECMAScript specification.",
    icon: <JavascriptOriginal />,
    types: types.Scripting,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    //requires: [],
  },
  TypeScript: {
    title: "TypeScript",
    description:
      "An open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.",
    icon: <TypescriptOriginal />,
    types: types.Scripting,
    link: "https://www.typescriptlang.org/",
    //requires: [this.JavaScript],
  },
  React: {
    title: "React",
    description: "A JavaScript library for building user interfaces",
    icon: <ReactOriginalWordmark />,
    types: [types.Layout, types.Scripting],
    link: "https://reactjs.org/",
    //requires: [this.JavaScript, this.HTML, this.CSS],
  },
  Angular: {
    title: "Angular",
    description:
      "A TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
    icon: <AngularjsOriginal />,
    types: [types.Layout, types.Scripting],
    link: "https://angular.io/",
    //requires: [this.TypeScript, this.HTML, this.CSS],
  },
  MaterialUI: {
    title: "Material UI",
    description: "React components for faster and easier web development.",
    icon: <MaterialuiOriginal />,
    types: [types.Styling],
    link: "https://material-ui.com/",
    //requires: [this.React],
  },
  NextJS: {
    title: "NextJS",
    description: "The React Framework for Production",
    icon: <NextjsOriginalWordmark />,
    types: [types.Scripting],
    link: "https://nextjs.org/",
    //requires: [this.React, this.NodeJS],
  },
  NodeJS: {
    title: "NodeJS",
    description:
      "An open-source, cross-platform, back-end JavaScript runtime environment.",
    icon: <NodejsOriginalWordmark />,
    types: [types.Scripting],
    link: "https://nodejs.org/en/",
    //requires: [],
  },
  TailwindCSS: {
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    icon: <TailwindcssOriginalWordmark />,
    types: [types.Styling],
    link: "https://tailwindcss.com/",
    //requires: [this.CSS],
  },
  Vercel: {
    title: "Vercel",
    description: "A cloud platform for static sites and Serverless Functions",
    icon: <VercelIcon />,
    types: [types.Deployment],
    link: "https://vercel.com/",
    //requires: [],
  },
  Django: {
    title: "Django",
    description:
      "A high-level Python Web framework that encourages rapid development and clean, pragmatic design.",
    icon: <DjangoPlain />,
    types: [types.Scripting],
    link: "https://www.djangoproject.com/",
    //requires: [this.Python],
  },
  Python: {
    title: "Python",
    description:
      "An interpreted high-level general-purpose programming language.",
    icon: <PythonOriginalWordmark />,
    types: [types.Scripting],
    link: "https://www.python.org/",
    //requires: [],
  },
  MongoDB: {
    title: "MongoDB",
    description:
      "A source-available cross-platform document-oriented database program.",
    icon: <MongodbOriginalWordmark />,
    types: [types.Database],
    link: "https://www.mongodb.com/",
    //requires: [],
  },
  MySQL: {
    title: "MySQL",
    description: "An open-source relational database management system.",
    icon: <MysqlOriginalWordmark />,
    types: [types.Database],
    link: "https://www.mysql.com/",
    //requires: [],
  },
  SQLite: {
    title: "SQLite",
    description:
      "A relational database management system contained in a C library.",
    icon: <SqliteOriginalWordmark />,
    types: [types.Database],
    link: "https://www.sqlite.org/index.html",
    //requires: [],
  },
  Git: {
    title: "Git",
    description:
      "A distributed version-control system for tracking changes in source code during software development.",
    icon: <GitOriginalWordmark />,
    types: types.VersionControl,
    link: "https://git-scm.com/",
    //requires: [],
  },
  GitHub: {
    title: "GitHub",
    description:
      "A provider of Internet hosting for software development and version control using Git.",
    icon: <GithubOriginalWordmark />,
    types: types.VersionControl,
    link: "https://github.com/",
    //requires: [this.Git],
  },
  C: {
    title: "C",
    description:
      "A general-purpose, procedural computer programming language supporting structured programming.",
    icon: <COriginal />,
    types: [types.Scripting],
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    //requires: [],
  },
  "C++": {
    title: "C++",
    description:
      "A general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.",
    icon: <CplusplusOriginal />,
    types: [types.Scripting],
    link: "https://en.wikipedia.org/wiki/C%2B%2B",
    //requires: [],
  },
  Java: {
    title: "Java",
    description:
      "A class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    icon: <JavaOriginalWordmark />,
    types: [types.Scripting],
    link: "https://www.java.com/en/",
    //requires: [],
  },
  "C#": {
    title: "C#",
    description:
      "A general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.",
    icon: <CsharpOriginal />,
    types: [types.Scripting],
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    //requires: [],
  },
  Unity: {
    title: "Unity",
    description:
      "A cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.'s Worldwide Developers Conference as a Mac OS X-exclusive game engine.",
    icon: <UnityOriginalWordmark />,
    types: [types.GameEngine],
    link: "https://unity.com/",
    //requires: ["C#"],
  },
  Rust: {
    title: "Rust",
    description:
      "A multi-paradigm programming language designed for performance and safety, especially safe concurrency.",
    icon: <RustPlain />,
    types: [types.Scripting],
    link: "https://www.rust-lang.org/",
    //requires: [],
  },
};
export const portfolioItems = {
  AGSFlix: {
    title: "AGSFlix",
    description: "A Netflix clone, uses the oMDB API to search for movies and display them in a Netflix style layout.",
    image: "https://i.imgur.com/8w5cSUw.png",
    // technologies: [technologies.React, technologies.MaterialUI, technologies.Vercel],
    sectionCount: 2,
    sections: [
        {
            title: "Frontend",
            technologies: [
                technologies.React,
                technologies.MaterialUI,
                technologies.HTML,
                technologies.CSS,
                technologies.JavaScript,
            ],
        },
        {
            title: "DevOps",
            technologies: [
                technologies.Vercel,
                technologies.Git,
                technologies.GitHub,
            ],
        },
    ],
    link: "https://agsflix.vercel.app/",
    github: "https://github.com/AnthonySchneider2000/AGSFlix",
  },
  TrailTours: {
    title: "Trail Tours",
    description: "A website for a fictional company that offers guided tours of hiking trails.",
    image: "https://i.imgur.com/K8dRlmu.png",
    // technologies: [technologies.React, technologies.MaterialUI, technologies.Vercel],
    sectionCount: 2,
    sections: [
        {
            title: "Frontend",
            technologies: [
                technologies.React,
                technologies.MaterialUI,
                technologies.HTML,
                technologies.CSS,
                technologies.JavaScript,
            ],
        },
        {
            title: "DevOps",
            technologies: [
                technologies.Vercel,
                technologies.Git,
                technologies.GitHub,
            ],
        },
    ],
    link: "https://trail-tours.vercel.app/",
    github:
      "https://github.com/AnthonySchneider2000/React-Material-UI-Trail-Tour-Web-App",
  },
  YouTubePlaylistManager: {
    title: "YouTube Playlist Manager",
    description: "A website that allows you to create and manage YouTube playlists.",
    image: "https://i.imgur.com/GmKyAxR.png",
    // technologies: [technologies.NextJS, technologies.Vercel],
    sectionCount: 3,
    sections: [
        {
            title: "Frontend",
            technologies: [
                technologies.NextJS,
                technologies.React,
                technologies.HTML,
                technologies.CSS,
                technologies.JavaScript,
            ],
        },
        {
            title: "Backend",
            technologies: [
                technologies.NextJS,
                technologies.NodeJS,
                technologies.MongoDB,
            ],
        },
        {
            title: "DevOps",
            technologies: [
                technologies.Vercel,
                technologies.Git,
                technologies.GitHub,
            ],
        },
    ],
    link: "https://youtube-playlist-manager-ags.vercel.app/",
    github:
      "https://github.com/AnthonySchneider2000/NextJS-YouTube-Playlist-Manager",
  },
  Portfolio: {
    title: "Portfolio",
    description: "This website, a portfolio of my projects.",
    image: "https://i.imgur.com/MQn4AQi.png",
    // technologies: [technologies.React, technologies.MaterialUI, technologies.Vercel, technologies.TailwindCSS],
    sectionCount: 2,
    sections: [
        {
            title: "Frontend",
            technologies: [
                technologies.React,
                technologies.MaterialUI,
                technologies.TailwindCSS,
                technologies.HTML,
                technologies.CSS,
                technologies.JavaScript,
            ],
        },
        {
            title: "DevOps",
            technologies: [
                technologies.Vercel,
                technologies.Git,
                technologies.GitHub,
            ],
        },
    ],
    link: "is.gd/AnthonySchneiderPortfolio",
    github: "https://github.com/AnthonySchneider2000/portfolio-tailwind",
  },
};



export const AGSFlix = portfolioItems.AGSFlix;
export const TrailTours = portfolioItems.TrailTours;
export const YouTubePlaylistManager = portfolioItems.YouTubePlaylistManager;
