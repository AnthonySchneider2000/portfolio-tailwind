import {
  Html5OriginalWordmark,
  Css3OriginalWordmark,
  JavascriptOriginal,
  TypescriptOriginal,
  ReactOriginalWordmark,
  AngularjsOriginal,
  AngularmaterialOriginal,
  SvelteOriginalWordmark,
  MaterialuiOriginal,
  NextjsOriginalWordmark,
  NodejsOriginalWordmark,
  TailwindcssOriginalWordmark,
  SassOriginal,
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
  PhpPlain,
  WasmOriginal,
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
};

export const technologies = {
  HTML: {
    title: "HTML",
    description:
      "A markup language for creating web pages and web applications.",
    icon: <Html5OriginalWordmark size="100%" />,
    types: types.Layout,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    //requires: [],
  },
  CSS: {
    title: "CSS",
    description:
      "A style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    icon: <Css3OriginalWordmark size="100%" />,
    types: types.Styling,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    //requires: [],
  },
  JavaScript: {
    title: "JavaScript",
    description:
      "A programming language which allows you to implement complex features on web pages.",
    icon: <JavascriptOriginal size="100%" />,
    types: types.Scripting,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    //requires: [],
  },
  TypeScript: {
    title: "TypeScript",
    description:
      "An open-source language which builds on JavaScript, one of the world's most used tools, by adding static type definitions.",
    icon: <TypescriptOriginal size="100%" />,
    types: types.Scripting,
    link: "https://www.typescriptlang.org/",
    //requires: [this.JavaScript],
  },
  React: {
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    icon: <ReactOriginalWordmark size="100%" />,
    types: [types.Layout, types.Scripting],
    link: "https://reactjs.org/",
    //requires: [this.JavaScript, this.HTML, this.CSS],
  },
  MaterialUI: {
    title: "Material UI",
    description: "A React UI framework that follows Google's Material Design.",
    icon: <MaterialuiOriginal size="100%" />,
    types: [types.Styling],
    link: "https://material-ui.com/",
    //requires: [this.React],
  },
  NextJS: {
    title: "NextJS",
    description: `Next.js is an open-source web development framework which provides 
    React-based web applications with server-side rendering and static website generation.`,
    icon: <NextjsOriginalWordmark size="100%" />,
    types: [types.Scripting],
    link: "https://nextjs.org/",
    //requires: [this.React, this.NodeJS],
  },
  NodeJS: {
    title: "NodeJS",
    description:
      "An open-source, cross-platform, back-end JavaScript runtime environment.",
    icon: <NodejsOriginalWordmark size="100%" />,
    types: [types.Scripting],
    link: "https://nodejs.org/en/",
    //requires: [],
  },
  Angular: {
    title: "Angular",
    description:
      "A TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
    icon: <AngularjsOriginal size="100%" />,
    types: [types.Layout, types.Scripting],
    link: "https://angular.io/",
    //requires: [this.TypeScript, this.HTML, this.CSS],
  },
  AngularMaterial: {
    title: "Angular Material",
    description:
      "A UI component library for Angular developers. Angular Material components help in constructing attractive, consistent, and functional web pages and web applications while adhering to modern web design principles like browser portability, device independence, and graceful degradation.",
    icon: <AngularmaterialOriginal size="100%" />,
    types: [types.Styling],
    link: "https://material.angular.io/",
    //requires: [this.Angular],
  },

  Svelte: {
    title: "Svelte",
    description:
      "A free and open-source front end compiler that converts TypeScript, JavaScript, and CoffeeScript code into JavaScript code.",
    icon: <SvelteOriginalWordmark size="100%" />,
    types: [types.Scripting],
    link: "https://svelte.dev/",
    //requires: [],
  },

  TailwindCSS: {
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    icon: <TailwindcssOriginalWordmark size="100%" />,
    types: [types.Styling],
    link: "https://tailwindcss.com/",
    //requires: [this.CSS],
  },
  Sass: {
    title: "Sass",
    description:
      "A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.",
    icon: <SassOriginal size="100%" />,
    types: [types.Styling],
    link: "https://sass-lang.com/",
    //requires: [this.CSS],
  },
  Vercel: {
    title: "Vercel",
    description: "A cloud platform for static sites and Serverless Functions",
    icon: <VercelIcon size="100%" />,
    types: [types.Deployment],
    link: "https://vercel.com/",
    //requires: [],
  },
  Django: {
    title: "Django",
    description:
      "A high-level Python Web framework that encourages rapid development and clean, pragmatic design.",
    icon: <DjangoPlain size="100%" />,
    types: [types.Scripting],
    link: "https://www.djangoproject.com/",
    //requires: [this.Python],
  },
  Python: {
    title: "Python",
    description:
      "An interpreted high-level general-purpose programming language.",
    icon: <PythonOriginalWordmark size="100%" />,
    types: [types.Scripting],
    link: "https://www.python.org/",
    //requires: [],
  },
  PHP: {
    title: "PHP",
    description:
      "A general-purpose scripting language especially suited to web development.",
    icon: <PhpPlain size="100%" />,
    types: [types.Scripting],
    link: "https://www.php.net/",
    //requires: [],
  },
  MongoDB: {
    title: "MongoDB",
    description:
      "A source-available cross-platform document-oriented database program.",
    icon: <MongodbOriginalWordmark size="100%" />,
    types: [types.Database],
    link: "https://www.mongodb.com/",
    //requires: [],
  },
  MySQL: {
    title: "MySQL",
    description: "An open-source relational database management system.",
    icon: <MysqlOriginalWordmark size="100%" />,
    types: [types.Database],
    link: "https://www.mysql.com/",
    //requires: [],
  },
  SQLite: {
    title: "SQLite",
    description:
      "A relational database management system contained in a C library.",
    icon: <SqliteOriginalWordmark size="100%" />,
    types: [types.Database],
    link: "https://www.sqlite.org/index.html",
    //requires: [],
  },
  Git: {
    title: "Git",
    description:
      "A distributed version-control system for tracking changes in source code during software development.",
    icon: <GitOriginalWordmark size="100%" />,
    types: types.VersionControl,
    link: "https://git-scm.com/",
    //requires: [],
  },
  GitHub: {
    title: "GitHub",
    description:
      "A provider of Internet hosting for software development and version control using Git.",
    icon: <GithubOriginalWordmark size="100%" />,
    types: types.VersionControl,
    link: "https://github.com/",
    //requires: [this.Git],
  },
  C: {
    title: "C",
    description:
      "A general-purpose, procedural computer programming language supporting structured programming.",
    icon: <COriginal size="100%" />,
    types: [types.Scripting],
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    //requires: [],
  },
  "C++": {
    title: "C++",
    description:
      "A general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.",
    icon: <CplusplusOriginal size="100%" />,
    types: [types.Scripting],
    link: "https://en.wikipedia.org/wiki/C%2B%2B",
    //requires: [],
  },
  Java: {
    title: "Java",
    description:
      "A class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    icon: <JavaOriginalWordmark size="100%" />,
    types: [types.Scripting],
    link: "https://www.java.com/en/",
    //requires: [],
  },
  "C#": {
    title: "C#",
    description:
      "A general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.",
    icon: <CsharpOriginal size="100%" />,
    types: [types.Scripting],
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    //requires: [],
  },
  Unity: {
    title: "Unity",
    description:
      "A cross-platform game engine developed by Unity Technologies which is primarily used to develop both three-dimensional and two-dimensional video games and simulations for computers, consoles, and mobile devices.",
    icon: <UnityOriginalWordmark size="100%" />,
    types: [types.GameEngine],
    link: "https://unity.com/",
    //requires: ["C#"],
  },
  Rust: {
    title: "Rust",
    description:
      "A multi-paradigm programming language designed for performance and safety, especially safe concurrency.",
    icon: <RustPlain size="100%" />,
    types: [types.Scripting],
    link: "https://www.rust-lang.org/",
    //requires: [],
  },
  Wasm: {
    title: "WebAssembly (Wasm)",
    description:
      "A binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications.",
    icon: <WasmOriginal size="100%" />,
    types: [types.Scripting],
    link: "https://webassembly.org/",
    //requires: [],
  },

  //  ANYTHING BELOW THIS POINT IS NOT A TECHNOLOGY, BUT WILL BE USED IN THE SKILLS SECTION

  agile: {
    title: "Agile Methodology",
    description:
      "A set of values and principles that describe a way of working that helps teams deliver value to their customers faster and with fewer headaches.",
    icon: <div className="text-5xl">A</div>,
    types: [],
    link: "https://www.atlassian.com/agile",
    //requires: [],
  },
  waterfall: {
    title: "Waterfall Methodology",
    description:
      "A linear project management approach, where stakeholder and customer requirements are gathered at the beginning of the project, and then a sequential project plan is created to accommodate those requirements.",
    icon: <div className="text-5xl">W</div>,
    types: [],
    link: "",
    //requires: [],
  },
  remote: {
    title: "Remote Work",
    description:
      "A working style that allows professionals to work outside of a traditional office environment.",
    icon: <div className="text-5xl">R</div>,
    types: [],
    link: "",
    //requires: [],
  },





};


export const TechnologiesArray = [
  technologies.HTML,
  technologies.CSS,
  technologies.JavaScript,
  technologies.TypeScript,
  technologies.React,
  technologies.Angular,
  technologies.MaterialUI,
  technologies.NextJS,
  technologies.NodeJS,
  technologies.TailwindCSS,
  technologies.Vercel,
  technologies.Django,
  technologies.Python,
  technologies.PHP,
  technologies.MongoDB,
  technologies.MySQL,
  technologies.SQLite,
  technologies.Git,
  technologies.GitHub,
  technologies.C,
  technologies["C++"],
  technologies.Java,
  technologies["C#"],
  technologies.Unity,
  technologies.Rust,
];


export const portfolioItems = {
  TrimVid: {
    title: "TrimVid",
    description:
    "A web app which uses ffmpeg.wasm to trim videos, and locally can use youtube-dl to download videos from YouTube.",
    image: "https://i.imgur.com/QPDIRw1.png",
    sectionCount: 2,
    sections: [
      {
        title: "Frontend",
        technologies: [
          technologies.Wasm,
          technologies.React,
          technologies.NextJS,
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
    link: "https://trimvid.vercel.app/",
    github: "https://github.com/AnthonySchneider2000/ffmpeg-online",
  },
  AGSFlix: {
    title: "AGSFlix",
    description:
      "A Netflix clone, uses the oMDB API to search for movies and display them in a Netflix style layout.",
    image: "https://i.imgur.com/WW551T9.png",
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
    description:
      "A website for a fictional company that offers guided tours of hiking trails.",
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
    description:
      "A website that allows you to create and manage YouTube playlists.",
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
  AGSupplements: {
    title: "AGSupplements",
    description:
      "A variant of pcpartpicker.com, but for supplements and food products. Has a powerful data table that allows you to filter and sort products.",
    image: "https://i.imgur.com/1lVUsCy.png",
    // technologies: [technologies.Django, technologies.Angular, technologies.MySQL],
    sectionCount: 3,
    sections: [
      {
        title: "Frontend",
        technologies: [
          technologies.Angular,
          technologies.AngularMaterial,
          technologies.TailwindCSS,
          technologies.HTML,
          technologies.CSS,
          technologies.JavaScript,
        ],
      },
      {
        title: "Backend",
        technologies: [
          technologies.Django,
          technologies.Python,
          technologies.SQLite,
        ],
      },
      {
        title: "DevOps",
        technologies: [
          technologies.Git,
          technologies.GitHub,
        ],
      },
    ],
    link: "https://www.youtube.com/watch?v=kDdmkBIMOy0",
    github: "https://github.com/AnthonySchneider2000/agsupplements",
  },
  MarkdownConverter: {
    title: "Markdown Converter",
    description:
    "A Rust GUI application that converts Markdown input to HTML output.",
    image: "https://i.imgur.com/ESwfpUu.png",
    // technologies: [technologies.Rust],
    sectionCount: 1,
    sections: [
      {
        title: "Application",
        technologies: [
          technologies.Rust,
        ],
      },
    ],
    link: "https://i.imgur.com/zNReR2o.png",
    github: "https://github.com/AnthonySchneider2000/markdown-editor-rust",
  },
  ChessWebApp: {
    title: "Chess Web App",
    description:
    "A simple web application created with Svelte with a functioning chess board.",
    image: "https://i.imgur.com/qTia0zJ.png",
    // technologies: [technologies.Svelte],
    sectionCount: 1,
    sections: [
      {
        title: "Frontend",
        technologies: [
          technologies.Svelte,
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
      }
    ],
    link: "https://chess-web-app-ags.vercel.app/",
    github: "https://github.com/AnthonySchneider2000/Chess-Web-App",
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

export const JobExperience = {
  freelance: {
    employer: "Freelance",
    position: "Software Developer",
    location: "Remote",
    startDate: "May 2021",
    endDate: "Present",
    responsibilities: [
      "Developed a system for automating invoice generation using Google Forms and Google Sheets",
      "Contributed to an existing codebase, adding new features and fixing bugs",
      "Performed data analytics and improved product usability"
    ],
  },
  target: {
    employer: "Target Corporation",
    position: "Retail Sales Specialist",
    location: "Fairview Heights, IL",
    startDate: "July 2019",
    endDate: "Present",
    responsibilities: [
      "Engaged with dozens of guests nightly, assessing their needs and providing solutions",
      "Worked with management to prioritize tasks as efficiently as possible",
      "Trained new team members on store policies and procedures",
    ],
  },
  colonnade: {
    employer: "The Colonnade Senior Living",
    position: "Dining Services",
    location: "O'Fallon, IL",
    startDate: "June 2017",
    endDate: "May 2019",
    responsibilities: [
      "Provided excellent customer service to residents and guests",
      "Worked as a team to ensure the dining room was clean and ready for service",
      "Assisted in the kitchen with food preparation and dishwashing",
    ],
  },
};

export const JobExperienceArray = [
  JobExperience.freelance,
  JobExperience.target,
  JobExperience.colonnade,
];

export const Education = {
  siue: {
    school: "Southern Illinois University Edwardsville",
    degree: "Bachelor of Science in Computer Science",
    location: "Edwardsville, IL",
    startDate: "August 2018",
    endDate: "May 2022",
    gpa: "3.4",
    courses: [],
  },
  oths: {
    school: "O'Fallon Township High School",
    degree: "High School Diploma",
    location: "O'Fallon, IL",
    startDate: "August 2014",
    endDate: "May 2018",
    gpa: "3.8",
    courses: [],
  },
};

export const EducationArray = [Education.siue, Education.oths];

export const Awards = {
  honors: {
    title: "SIUE Honors Program",
    description:
      "A program for students who are highly motivated and academically talented.",
    date: "August 2018",
  },
  sealOfBiliteracy: {
    title: "Illinois Seal of Biliteracy in Spanish",
    description:
      "Awarded to students who have studied and attained proficiency in two or more languages by high school graduation.",
    date: "May 2018",
  },
};
export const AwardsArray = [Awards.honors, Awards.sealOfBiliteracy];

export const SkillCategories = {
  frontend: {
    title: "Web Frontend",
    skills: [
      technologies.HTML,
      technologies.CSS,
      technologies.JavaScript,
      technologies.TypeScript,
      technologies.React,
      technologies.NextJS,
      technologies.MaterialUI,
      technologies.Angular,
      technologies.AngularMaterial,
      technologies.Svelte,
      technologies.TailwindCSS,
      technologies.Sass,
    ],
  },
  backend: {
    title: "Web Backend",
    skills: [
      technologies.NodeJS,
      technologies.NextJS,
      technologies.Django,
      technologies.Python,
      technologies.PHP,
      technologies.MongoDB,
      technologies.MySQL,
      technologies.SQLite,
    ],
  },
  application: {
    title: "Application Development",
    skills: [
      technologies.C,
      technologies["C++"],
      technologies["C#"],
      technologies.Java,
      technologies.Unity,
      technologies.Python,
      technologies.Rust,
    ],
  },
  devops: {
    title: "DevOps",
    skills: [
      technologies.Vercel,
      technologies.Git,
      technologies.GitHub,
    ],
  },
  workflow: {
    title: "Workflow",
    skills: [
      technologies.agile,
      technologies.waterfall,
      technologies.remote,
    ],
  },    
};

export const SkillCategoriesArray = [
  SkillCategories.frontend,
  SkillCategories.backend,
  SkillCategories.application,
  SkillCategories.devops,
  SkillCategories.workflow,
];



export const siue = Education.siue;
export const oths = Education.oths;
export const AGSFlix = portfolioItems.AGSFlix;
export const TrailTours = portfolioItems.TrailTours;
export const YouTubePlaylistManager = portfolioItems.YouTubePlaylistManager;
