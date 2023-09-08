import React from "react";
import { useStateContext } from "utils/StateContext";

export default function PortfolioItem({ title, description, image, link }) {
  const { selectProject } = useStateContext();

  // function to select project
  const handleClick = () => {
    selectProject(title);
  };
  return (
    <div className="portfolioItem" onClick={handleClick}>
      {/* <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolioItemText"
      > */}
      <div className="portfolioItemText">
        <div> 
        {/* this div exists so the title doesnt touch the outside of the a tag, which has padding */} 
        {title}
        </div>
      </div>
      {/* </a> */}
    </div>
  );
}
