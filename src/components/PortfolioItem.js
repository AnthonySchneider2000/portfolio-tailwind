import React from "react";
import { useStateContext } from "utils/StateContext";
import { useMediaQuery } from "react-responsive";

export default function PortfolioItem({ title, description, image, link }) {
  const { selectProject } = useStateContext();

  const isMobile = useMediaQuery({ query: "(max-aspect-ratio: 1/1)" });
  const itemHeight = isMobile ? "h-32" : "h-48";
  const itemText = isMobile ? "text-[1.5rem]" : "text-[200%]";
  // function to select project
  const handleClick = () => {
    selectProject(title);
  };
  return (
    <div className={`portfolioItem ${itemHeight}`} onClick={handleClick}>
      {/* <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolioItemText"
      > */}
      <div className={`portfolioItemText ${itemText}`}>
        <div> 
        {/* this div exists so the title doesnt touch the outside of the a tag, which has padding */} 
        {title}
        </div>
      </div>
      {/* </a> */}
    </div>
  );
}
