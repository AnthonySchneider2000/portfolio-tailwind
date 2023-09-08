import { useStateContext } from "utils/StateContext";
import { portfolioItems, AGSFlix } from "utils/constants";
import { GitHub } from "@mui/icons-material";

const ProjectIsSelected = ({ project }) => {
  return (
    <div className="flex flex-col">
      <Title>{project.title}</Title>
      <div className="text-[1.2rem]">{project.description}</div>
        <a href={project.link} target="_blank" rel="noreferrer">Link: {project.link}</a>
        <a href={project.github} target="_blank" rel="noreferrer"><GitHub /> Source Code: {project.github}</a>
    </div>
  );
};

const ProjectIsNotSelected = () => {
  return (
      <Title>Select a project to view details</Title>
  );
};

const Title = ({ children }) => (
  <div className="text-[2rem] font-bold">{children}</div>
);

export default function PortfolioDetailContainer() {
  const { projectSelected, selectedProjectName } = useStateContext();
  const trimmedName = selectedProjectName.replace(/\s/g, "");
  const project = portfolioItems[trimmedName] || AGSFlix;
  return (
    <div className="w-full bg-cyan-700 consistentRounding text-center mt-4 p-4  text-white">
      {projectSelected ? (
        <ProjectIsSelected project={project} />
      ) : (
        <ProjectIsNotSelected />
      )}
    </div>
  );
}
