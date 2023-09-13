import { useStateContext } from "utils/StateContext";
import { portfolioItems, AGSFlix } from "utils/constants";
import { GitHub } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Tooltip } from "@mui/material";
import { useTheme } from "@mui/material";

let project = AGSFlix;

const ProjectIsNotSelected = () => {
  return <Title>Select a project to view details</Title>;
};

const Title = ({ children }) => (
  <div className="text-[2rem] font-bold mt-4">{children}</div>
);

const Link = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="font-bold truncate iconTransition consistentRounding iconBackground p-3"
  >
    {children}
  </a>
);

const TechnologyIcon = ({ technology }) => {
  const theme = useTheme();
  return (
    <Tooltip
      title={
        <div className="text-xl whitespace-pre-line">{`${technology.title}\n${technology.description}`}</div>
      }
      placement="bottom"
      enterTouchDelay={0}
      leaveTouchDelay={500000}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: theme.palette.cyan.dark,
            padding: "0.5rem",
            textAlign: "center",
          },
        },
      }}
    >
      <div
        className={`m-2 p-2 w-24 h-24 rounded-md iconTransition hover:bg-cyan-800 hover:scale-110`}
      >
        {technology.icon}
      </div>
    </Tooltip>
  );
};

const Sections = ({ project }) => {
  //each section is a tab
  //opening a tab will reveal the technologies used in that section
  const sections = project.sections;
  const [selectedSection, setSelectedSection] = useState(0);
  const [technologies, setTechnologies] = useState([]);

  const handleSectionClick = (sectionNumber) => {
    setSelectedSection(sectionNumber);
    setTechnologies(project.sections[sectionNumber].technologies);
  };

  useEffect(() => {
    setSelectedSection(0);
    setTechnologies(project.sections[0].technologies);
  }, [project]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 bg-cyan-800 consistentRounding w-full rounded-t-none transform translate-y-4">
      <div className="text-2xl font-bold pt-4">Technologies Used</div>
      <div className="flex flex-row justify-center flex-wrap">
        {sections.map((section, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-center items-center m-2 p-2 rounded-md iconTransition ${
                selectedSection === index
                  ? "bg-slate-800 cursor-pointer"
                  : "bg-slate-700 cursor-pointer hover:bg-slate-800"
              }`}
              onClick={() => handleSectionClick(index)}
            >
              {section.title}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row flex-wrap justify-evenly shadow-md border-cyan-700 border-[2px] rounded-2xl">
        {technologies.map((technology, index) => {
          return <TechnologyIcon technology={technology} key={index} />;
        })}
      </div>
    </div>
  );
};

const ProjectIsSelected = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title>{project.title}</Title>
      <div className="flex flex-row justify-center items-center gap-4">
        <Link href={project.link}>Live Demo</Link>
        <Link href={project.github}>
          <GitHub /> Source Code
        </Link>
      </div>
      <div className="text-[1.2rem]">{project.description}</div>
      <Sections project={project} />
    </div>
  );
};

export default function PortfolioDetailContainer() {
  const { projectSelected, selectedProjectName } = useStateContext();
  const trimmedName = selectedProjectName.replace(/\s/g, "");
  project = portfolioItems[trimmedName];
  return (
    <div className="w-full bg-cyan-700 consistentRounding text-center text-white">
      {projectSelected ? <ProjectIsSelected /> : <ProjectIsNotSelected />}
    </div>
  );
}
