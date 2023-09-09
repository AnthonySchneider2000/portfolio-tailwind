import { useStateContext } from "utils/StateContext";
import { portfolioItems, AGSFlix } from "utils/constants";
import { GitHub } from "@mui/icons-material";
import { useState, useEffect } from "react";

let project = AGSFlix;

const ProjectIsNotSelected = () => {
  return <Title>Select a project to view details</Title>;
};

const Title = ({ children }) => (
  <div className="text-[2rem] font-bold">{children}</div>
);

const Link = ({ children, href }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

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
    <>
      <div className="flex flex-row justify-center">
        {sections.map((section, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-center items-center m-2 p-2 rounded-md ${
                selectedSection === index
                  ? "bg-slate-700 cursor-pointer"
                  : "iconBackground"
              }`}
              onClick={() => handleSectionClick(index)}
            >
              {section.title}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-evenly border-cyan-800 border-[2px] rounded-2xl">
        {technologies.map((technology, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-center items-center w-full m-2 p-2 rounded-md iconBackground`}
            >
              {technology.title}
            </div>
          );
        })}
      </div>
    </>
  );
};

const ProjectIsSelected = () => {
  return (
    <div className="flex flex-col">
      <Title>{project.title}</Title>
      <div className="text-[1.2rem]">{project.description}</div>
      <Link href={project.link}>Link: {project.link}</Link>
      <Link href={project.github}>
        <GitHub /> Source Code: {project.github}
      </Link>
      <Sections project={project} />
    </div>
  );
};

export default function PortfolioDetailContainer() {
  const { projectSelected, selectedProjectName } = useStateContext();
  const trimmedName = selectedProjectName.replace(/\s/g, "");
  project = portfolioItems[trimmedName];
  return (
    <div className="w-full bg-cyan-700 consistentRounding text-center mt-4 p-4  text-white">
      {projectSelected ? <ProjectIsSelected /> : <ProjectIsNotSelected />}
    </div>
  );
}
