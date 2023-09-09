import React from "react";
import { useStateContext } from "utils/StateContext";
import { useMediaQuery } from "react-responsive";

export default function PortfolioItem({ title, description, image, link }) {
  const { selectProject, selectedProjectName } = useStateContext();
  const [isSelected, setIsSelected] = React.useState(false);

  if (selectedProjectName === title && !isSelected) {
    setIsSelected(true);
  } else if (selectedProjectName !== title && isSelected) {
    setIsSelected(false);
  }

  // function to select project
  const handleClick = () => {
    selectProject(title);
  };

  const isMobile = useMediaQuery({ query: "(max-aspect-ratio: 1/1)" });
  const itemHeight = isMobile ? "h-32" : "h-48";
  const itemText = isMobile ? "text-[1.5rem]" : "text-[200%]";

  return (
    <div
      className={`portfolioItem ${itemHeight} ${
        isSelected ? "bg-slate-800 cursor-pointer" : "iconBackground"
      }`}
      onClick={handleClick}
    >
      <div className={`portfolioItemText ${itemText}`}>
        <div>
          {/* this div exists so the title doesnt touch the outside of the a tag, which has padding */}
          {title}
        </div>
      </div>
    </div>
  );
}
