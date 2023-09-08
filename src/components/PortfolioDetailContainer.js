import { useStateContext } from "utils/StateContext";
import { portfolioItems, AGSFlix } from "utils/constants";
import { GitHub } from "@mui/icons-material";
import { useState } from "react";
import { getTechnologies, getTypes } from "utils/portfolioUtils";

let project = AGSFlix;
let allTechnologies = getTechnologies(project);
let types = getTypes(allTechnologies);
let primaryTypes = types[0];
let secondaryTypes = types[1];

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

const TypeContainer = () => {
  const [selectedType, setSelectedType] = useState("");

  allTechnologies = getTechnologies(project);
  types = getTypes(allTechnologies);
  primaryTypes = types[0];
  secondaryTypes = types[1];

  const selectType = (type) => {
    if (type === selectedType) {
      setSelectedType("");
    } else {
      setSelectedType(type);
    }
  };

  return (
    <div className="flex flex-row justify-center">
      {primaryTypes.map((type) => (
        <div
          key={type}
          className={`${
            selectedType === type ? "bg-cyan-600" : "bg-cyan-500"
          } rounded-full px-4 py-2 m-2 cursor-pointer`}
          onClick={() => selectType(type)}
        >
          {type}
        </div>
      ))}
    </div>
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
      <TypeContainer />
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
