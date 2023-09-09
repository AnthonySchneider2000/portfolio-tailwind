import { useStateContext } from "utils/StateContext";
import { portfolioItems, AGSFlix } from "utils/constants";
import { GitHub } from "@mui/icons-material";
import { useState } from "react";
import { getTechnologies, getTypes, getCategories } from "utils/portfolioUtils";

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

const TypeContainer = () => {
//   constainer with nested tabs of categories -> types -> technologies
    const [activeCategory, setActiveCategory] = useState("");
    const [activeType, setActiveType] = useState("");
    const [activeTechnology, setActiveTechnology] = useState("");
    const [activeTechnologies, setActiveTechnologies] = useState([]);
    const [activeTypes, setActiveTypes] = useState([]);

    const technologies = getTechnologies(project);
    const types = getTypes(technologies);
    const categories = getCategories(types);


    const typesInThisCategory = (category) => {
        const categoryTypes = [];
        types.forEach((type) => {
            if (types[type].categories.includes(category)) {
                categoryTypes.push(type);
            }
        });
        return categoryTypes;
    };

    const technologiesInThisType = (type) => {
        const typeTechnologies = [];
        technologies.forEach((technology) => {
            if (technologies[technology].types.includes(type)) {
                typeTechnologies.push(technology);
            }
        });
        return typeTechnologies;
    };

    const handleCategoryClick = (category) => {
        if (category === activeCategory) {
            setActiveCategory("");
            setActiveType("");
            setActiveTechnology("");
            setActiveTechnologies([]);
            setActiveTypes([]);
        } else {
            setActiveCategory(category);
            setActiveType("");
            setActiveTechnology("");
            setActiveTechnologies([]);
            setActiveTypes([]);
            const types = typesInThisCategory(category);
            setActiveTypes(types);
        }
    };

    const handleTypeClick = (type) => {
        if (type === activeType) {
            setActiveType("");
            setActiveTechnology("");
            setActiveTechnologies([]);
        } else {
            setActiveType(type);
            setActiveTechnology("");
            setActiveTechnologies([]);
            const technologies = technologiesInThisType(type);
            setActiveTechnologies(technologies);
        }
    };

    const handleTechnologyClick = (technology) => {
        if (technology === activeTechnology) {
            setActiveTechnology("");
        } else {
            setActiveTechnology(technology);
        }
    };



        



  



  return (
    <>
        <div className="flex flex-row justify-center">
            {categories.map((category) => {
                return (
                    <div
                        key={category}
                        className={`flex flex-col justify-center items-center m-2 p-2 rounded-md ${
                            category === activeCategory
                                ? "bg-cyan-500"
                                : "bg-cyan-400"
                        }`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </div>
                );
            })}
        </div>
            <div className="flex flex-row justify-center">
                {activeCategory !== "" &&
                    activeTypes.map((type) => {
                        return (
                            <div
                                key={type}
                                className={`flex flex-col justify-center items-center m-2 p-2 rounded-md ${
                                    type === activeType
                                        ? "bg-cyan-500"
                                        : "bg-cyan-400"
                                }`}
                                onClick={() => handleTypeClick(type)}
                            >
                                {type}
                            </div>
                        );
                    })}
            </div>
            <div className="flex flex-row justify-center">
                {activeType !== "" &&
                    activeTechnologies.map((technology) => {
                        return (
                            <div
                                key={technology}
                                className={`flex flex-col justify-center items-center m-2 p-2 rounded-md ${
                                    technology === activeTechnology
                                        ? "bg-cyan-500"
                                        : "bg-cyan-400"
                                }`}
                                onClick={() => handleTechnologyClick(technology)}
                            >
                                {technology}
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
